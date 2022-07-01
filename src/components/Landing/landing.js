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



                <div  className='box' id="boxes" >
                    <div class="img-slider">
                        <div class="slide active">
                            <img height="360 px" src={dashboard} alt="" />
                            <div class="info">
                            </div>
                        </div>
                        <div class="slide">
                            <img height="360 px" src={addproject} alt="" />
                            <div class="info">
                            </div>
                        </div>
                        <div class="slide">
                            <img height="360 px" src={calendar} alt="" />
                            <div class="info">
                            </div>
                        </div>
                        <div class="slide">
                            <img height="360 px" src={graph} alt="" />
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

                {/* <div id="sec-1">
                    <div class="contain">
                        <a href="#showcase" aria-label="Read more about Seminole tax hike">
                            <div class="scroll-down"></div>
                        </a>
                    </div>
                </div> */}
                <div id="showcase">
                    <div class="contain">
                        <h1 class="h12 blink-soft animate-charcter">THE MOST POPULAR PROJECT TRACKER FOR TEAMS</h1>
                        <marquee width="100%" direction="left" height="80px" loop="infinite" >
                        <span class="Title Background">HECTIC SCHEDULES? WE ARE HERE TO HELP YOU!!!!SIGN UP NOW BY CLICKING ON LETS TRACK</span>
                            <h2 id="text" class="Title">HECTIC SCHEDULES? WE ARE HERE TO HELP YOU!!!!SIGN UP NOW BY CLICKING ON LETS TRACK</h2></marquee>
                        <p class="info" >Project tracking software used by millions.<br />
                            Pardox is a project tracker that lets you work hours across projects.<br />
                            Unlimted users,free forever.<br />
                            you can keep track of daily work at you company by the exclusive feautures offered by paradox.<br />
                            from days to months to adding information about your employees and pending tasks
                            search records in blink of an eye.
                        </p>
                    </div>
                </div>

                {/* <div id="sec-2">
                    <div class="contain">
                        <a href="#main" aria-label="Read more about Seminole tax hike">
                            <div class="scroll-down"></div>

                        </a>
                    </div>
                </div> */}
                <main>
                    <article>
                        <center class="thirteen"><h1>About Us</h1></center>
                        <p>DASHBOARD--<br />
                            Shows The Progress Of Your Project Through Graphical Representation
                            Also Lets You Keep Track Of Each Task So You Dont Have To Worry About Deadlines.<br />
                            Calendar--<br />
                            Gives You Detailed Versions Of Projects And Tasks Within Them Weekly And Monthly<br />
                            Add Proejct--<br />
                            Add Project And Information About Members Instantaneously.
                        </p>
                    </article>
                    <article>
                        <center class="thirteen"><h1>Other Perks</h1></center>
                        <p >
                            From increased chances of project success to creating a united team.keeping up to date on the progress of the project and awareness of project status
                            From increased chances of project success to creating a united team.
                            keeping up to date on the progress of the project and awareness of project status
                            From increased chances of project success to creating a united team.
                            keeping up to date on the progress of the project and awareness of project status

                        </p>
                    </article>
                </main>



                <Footer />
            </div>
        );

    }
}