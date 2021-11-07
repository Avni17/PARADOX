-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 07, 2021 at 03:56 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paradox`
--

-- --------------------------------------------------------

--
-- Table structure for table `allocated`
--

DROP TABLE IF EXISTS `allocated`;
CREATE TABLE IF NOT EXISTS `allocated` (
  `tid` int(11) NOT NULL,
  `eid` int(11) NOT NULL,
  `bandwidth` int(11) NOT NULL,
  PRIMARY KEY (`tid`,`eid`),
  KEY `FK_eid` (`eid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `allocated`
--

INSERT INTO `allocated` (`tid`, `eid`, `bandwidth`) VALUES
(1, 1, 12),
(2, 2, 60);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE IF NOT EXISTS `employee` (
  `name` varchar(30) NOT NULL,
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`name`, `id`, `username`, `password`, `email`, `gender`) VALUES
('John', 1, 'john32', 'johnnyyyhere', 'john32@gmail.com', 'm'),
('Sara ali khan', 2, 'sara_22', 'sarame', 'sara_22@gmail.com', 'f');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `pid` int(11) NOT NULL,
  `dependencies` int(11) NOT NULL,
  `startTime` date NOT NULL,
  `endTime` date NOT NULL,
  `manager` int(30) NOT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`pid`, `dependencies`, `startTime`, `endTime`, `manager`) VALUES
(1, 2, '2021-10-05', '2021-11-11', 1),
(2, 0, '2021-10-18', '2021-11-02', 2);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `eid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `tid` int(11) NOT NULL,
  `manDays` int(11) NOT NULL,
  `type` varchar(30) NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`eid`, `pid`, `tid`, `manDays`, `type`) VALUES
(1, 1, 1, 15, 'frontend'),
(2, 2, 2, 13, 'backend');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
CREATE TABLE IF NOT EXISTS `team` (
  `eid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  PRIMARY KEY (`eid`,`pid`),
  KEY `FK_pid` (`pid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`eid`, `pid`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
