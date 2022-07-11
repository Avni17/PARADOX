-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 11, 2022 at 07:45 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

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

CREATE TABLE `allocated` (
  `tid` int(11) NOT NULL,
  `eid` int(11) NOT NULL,
  `bandwidth` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `allocated`
--

INSERT INTO `allocated` (`tid`, `eid`, `bandwidth`) VALUES
(1, 1, 12),
(2, 2, 60);

-- --------------------------------------------------------

--
-- Table structure for table `calendar`
--

CREATE TABLE `calendar` (
  `ttid` int(11) NOT NULL,
  `eid` int(11) NOT NULL,
  `task` varchar(100) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `Project_Name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `calendar`
--

INSERT INTO `calendar` (`ttid`, `eid`, `task`, `startDate`, `endDate`, `Project_Name`) VALUES
(186, 1, 'frontend', '2021-12-12 16:02:24', '2021-12-12 20:02:24', 'proj1'),
(187, 1, 'frontend', '2021-12-13 17:00:49', '2021-12-13 21:03:47', 'proj2'),
(188, 1, 'frontend1', '2021-12-12 12:03:03', '2021-12-12 14:03:25', 'proj1'),
(189, 1, 'php', '2022-07-09 09:30:00', '2022-07-09 10:30:00', 'proj1'),
(190, 1, 'lunch', '2022-07-11 09:00:00', '2022-07-11 11:00:00', 'lunch'),
(191, 1, 'web', '2022-07-14 09:00:00', '2022-07-14 11:30:00', 'avni'),
(192, 1, 'backend', '2022-07-11 08:05:00', '2022-07-11 18:00:00', 'avni'),
(193, 1, 'frontend', '2022-07-11 09:00:00', '2022-07-11 16:00:00', 'avni2'),
(194, 1, 'frontend', '2022-07-12 07:00:00', '2022-07-12 15:00:00', 'avni2'),
(196, 1, 'lunch', '2022-07-13 09:00:00', '2022-07-13 11:00:00', 'lunch');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `name` varchar(30) NOT NULL,
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL
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

CREATE TABLE `project` (
  `pid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `dependencies` int(11) NOT NULL,
  `startTime` date NOT NULL,
  `endTime` date NOT NULL,
  `manager` int(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`pid`, `name`, `dependencies`, `startTime`, `endTime`, `manager`) VALUES
(1, 'proj1', 2, '2021-10-05', '2021-11-11', 1),
(2, 'proj2', 0, '2021-10-18', '2021-11-02', 2),
(33, 'frontend task', 0, '2021-12-19', '2021-12-17', 1),
(29, 'backend task', 0, '2021-12-17', '2022-01-17', 1),
(34, 'proj3xjk', 0, '2022-07-09', '2022-07-14', 1),
(35, 'test', 0, '2022-07-20', '2022-07-24', 1),
(36, 'avni', 0, '2022-07-13', '2022-07-21', 40),
(37, 'avni2', 0, '2022-07-09', '2022-07-13', 40);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `eid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `tid` int(11) NOT NULL,
  `status` varchar(11) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`eid`, `pid`, `tid`, `status`, `type`) VALUES
(1, 1, 1, 'no', 'frontend'),
(1, 2, 2, 'no', 'backend'),
(1, 1, 3, 'no', 'frontend1'),
(1, 29, 19, 'yes', 'php'),
(1, 29, 18, 'yes', 'web'),
(1, 33, 24, 'yes', 'web'),
(1, 34, 25, 'no', 'web'),
(2, 33, 26, 'no', 'ww'),
(1, 35, 27, 'no', 'webdev'),
(40, 36, 28, 'no', 'web'),
(40, 37, 29, 'no', 'ww'),
(1, 36, 30, 'no', 'doit');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `eid` int(11) NOT NULL,
  `pid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`eid`, `pid`) VALUES
(1, 1),
(1, 2),
(1, 29),
(1, 33),
(1, 34),
(1, 35),
(1, 36),
(2, 1),
(2, 2),
(2, 33),
(40, 36),
(40, 37);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allocated`
--
ALTER TABLE `allocated`
  ADD PRIMARY KEY (`tid`,`eid`),
  ADD KEY `FK_eid` (`eid`);

--
-- Indexes for table `calendar`
--
ALTER TABLE `calendar`
  ADD PRIMARY KEY (`ttid`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`tid`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`eid`,`pid`),
  ADD KEY `FK_pid` (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calendar`
--
ALTER TABLE `calendar`
  MODIFY `ttid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
