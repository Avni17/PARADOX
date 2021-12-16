import React, { Component } from 'react';
import './style.scss';
import addproject from './images/addproject.jpeg'
import calendar from './images/calendar.jpeg';
import dashboard from './images/dashboard.jpeg';
import graph from './images/graph.jpeg';
import project from './images/project.png';
import Navbar from "./navbar";
import Footer from "./footer";
// import signup from './images/signup.jpeg';

export default class landing extends Component {
    myfunction = () => {
        var slides = document.querySelectorAll('.slide');
        var btns = document.querySelectorAll('.btn');
        let currentSlide = 1;

        // Javascript for image slider manual navigation
        var manualNav = function (manual) {
            slides.forEach((slide) => {
                slide.classList.remove('active');

                btns.forEach((btn) => {
                    btn.classList.remove('active');
                });
            });

            slides[manual].classList.add('active');
            btns[manual].classList.add('active');
        }

        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                manualNav(i);
                currentSlide = i;
            });
        });
        var repeat = function (activeClass) {
            let active = document.getElementsByClassName('active');
            let i = 1;

            var repeater = () => {
                setTimeout(function () {
                    [...active].forEach((activeSlide) => {
                        activeSlide.classList.remove('active');
                    });

                    slides[i].classList.add('active');
                    btns[i].classList.add('active');
                    i++;

                    if (slides.length == i) {
                        i = 0;
                    }
                    if (i >= slides.length) {
                        return;
                    }
                    repeater();
                }, 3000);
            }
            repeater();
        }
        repeat();
    }
    componentDidMount = () => {
        this.myfunction();
    }

    componentDidUpdate = () => {
        // this.myfunction();
    }
    render() {
        return (
            <div className='landing app'>
                <Navbar />

                <div class="boxes">
                    <ul>
                        <li className='li'></li>
                        <li className='li'></li>
                        <li className='li'></li>
                        <li className='li'></li>
                    </ul>
                </div>


                <div id="boxes">
                    <div class="img-slider">
                        <div class="slide active">
                            <img src={dashboard} alt="" />
                            <div class="info">
                            </div>
                        </div>
                        <div class="slide">
                            <img src={addproject} alt="" />
                            <div class="info">
                            </div>
                        </div>
                        <div class="slide">
                            <img src={calendar} alt="" />
                            <div class="info">
                            </div>
                        </div>
                        <div class="slide">
                            <img src={graph} alt="" />
                            <div class="info">
                            </div>
                        </div>

                        <div class="navigation">
                            <div class="btn active"></div>
                            <div class="btn"></div>
                            <div class="btn"></div>
                            <div class="btn"></div>
                            <div class="btn"></div>



                        </div>
                    </div>
                </div>

                <div id="sec-1">
                    <div class="contain">
                        <a href="#showcase" aria-label="Read more about Seminole tax hike">
                            <div class="scroll-down"></div>
                        </a>
                    </div>
                </div>
                <div id="showcase">
                    <div class="contain">
                        <h1>THE MOST POPULAR PROJECT TRACKER FOR TEAMS</h1>
                        <marquee width="100%" direction="left" height="100px" class="glow"><h2>HECTIC SCHEDULES? WE ARE HERE TO HELP YOU!!!!SIGN UP NOW BY CLICKING ON LETS TRACK</h2></marquee>
                        <p>Project tracking software used by millions.<br />
                            Pardox is a project tracker that lets you work hours across projects.<br />
                            Unlimted users,free forever.<br />
                            you can keep track of daily work at you company by the exclusive feautures offered by paradox.<br />
                            from days to months to adding information about your employees and pending tasks
                            search records in blink of an eye.
                        </p>
                    </div>
                </div>

                <div id="sec-2">
                    <div class="contain">
                        <a href="#main" aria-label="Read more about Seminole tax hike">
                            <div class="scroll-down"></div>

                        </a>
                    </div>
                </div>
                <div id="main">
                    <div class="contain">
                        <article id="main-col">
                            <div className='con'>
                                <div className='imageContainer'>
                                </div>
                                <center><h2>About Us</h2></center>
                                <p>DASHBOARD--<br />
                                    SHOWS THE PROGRESS OF YOUR PROJECT THROUGH GRAPHICAL REPRESENTATION
                                    ALSO LETS YOU KEEP TRACK OF EACH TASK SO YOU DONT HAVE TO WORRY ABOUT DEADLINES.<br />
                                    CALENDAR--<br />
                                    GIVES YOU DETAILED VERSIONS OF PROJECTS AND TASKS WITHIN THEM WEEKLY AND MONTHLY<br />
                                    ADD PROEJCT--<br />
                                    ADD PROJECT AND INFORMATION ABOUT MEMBERS INSTANTANEOUSLY<br />.</p>
                            </div>
                            <div className='con'>
                                <div className='imageContainer'>
                                </div>
                                <center><h2>Other Perks</h2></center>
                                <p >
                                From increased chances of project success to creating a united team.keeping up to date on the progress of the project and awareness of project status
                                From increased chances of project success to creating a united team.
                                keeping up to date on the progress of the project and awareness of project status
                                From increased chances of project success to creating a united team.
                                keeping up to date on the progress of the project and awareness of project status

                            </p>
                            </div>
                         
                            <br />
                            <br />

                        </article>
                        {/* <img src={project} /> */}

                    </div>
                </div>


                <Footer />
            </div>
        );

    }
}