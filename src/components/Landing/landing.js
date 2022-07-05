import React, { Component } from 'react';
import './style.scss';
import './animCharacter.css';
import $ from 'jquery';
import Navbar from "./navbar";
import logo from './images/logo.png'
import s1 from './images/dashboard.jpeg'
import s2 from './images/calendar.jpeg'
import s3 from './images/addproject.jpeg'
import s4 from './images/graph.jpeg'
import mt from "./images/mt.gif"
import { Nav } from 'react-bootstrap';

// import signup from './images/signup.jpeg';

export default class landing extends Component {
    constructor(props) {
        super(props);
        window.addEventListener('scroll', this.scroll, true);
    }
    scroll = () => {
        var $nav = $(".fixed-top");
        //add background to nav when scrolled
        $nav.toggleClass("scrolled", $(window).scrollTop() > $nav.height());

    }
    // function for new slideshow
    myfunction = () => {


        // const sliderContainer = document.querySelector(".slider-container");
        // const slideRight = document.querySelector(".right-slide");
        // const slideLeft = document.querySelector(".left-slide");
        // const upButton = document.querySelector(".up-button");
        // const downButton = document.querySelector(".down-button");
        // const slidesLength = slideRight.querySelectorAll("div").length;

        // let activeSlideIndex = 0;

        // slideLeft.style.top = `-${(slidesLength - 1) * 70}vh`;

        // const changeSlide = (direction) => {
        //     const sliderHeight = sliderContainer.clientHeight;
        //     console.log(sliderHeight)
        //     if (direction === "up") {
        //         activeSlideIndex++;
        //         if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
        //     } else if (direction === "down") {
        //         activeSlideIndex--;
        //         if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
        //     }
        //     slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight
        //         }px)`;
        //     slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight
        //         }px)`;
        // };

        // upButton.addEventListener("click", () => changeSlide("up"));
        // downButton.addEventListener("click", () => changeSlide("down"));

    }
    componentDidMount = () => {
        this.myfunction();
    }

    componentDidUpdate = () => {
        this.myfunction();
    }
    render() {
        return (
            <div className='landing app'>
                <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                    <div class="containerss">
                        <img class="logo" src={logo} alt="logo"></img>
                        <a class="navbar-brand nav-head" href="#page-top">Paradox</a>
                        {/* <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        <Navbar />
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav my-2 my-lg-0">
                                <li class="nav-item">
                                    <a class="nav-lin" href="/#page-top">Home</a>
                                    <a class="nav-lin" href="./#about">About</a>
                                    <a class="nav-lin" href="./#features">Features</a>
                                    <a class="nav-lin" href="./login">Let's Track</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class="parallax1" id="page-top">
                    <div class="heading">
                        <h3 class="animate-charcter"> Paradox</h3>
                    </div>
                    <div class="wrapp">
                        <div class="border-circle" id="one"></div>
                        <div class="border-circle" id="two"></div>
                        <div class="background-circle">
                            <div class="triangle-light"></div>
                            <div class="body"></div>
                            <span class="shirt-text">P</span>
                            <span class="shirt-text">A</span>
                            <span class="shirt-text">R</span>
                            <span class="shirt-text">A</span>
                            <span class="shirt-text">D</span>
                            <span class="shirt-text">O</span>
                            <span class="shirt-text">X</span>
                            <div class="triangle-dark"></div>
                        </div>
                        <div class="head">
                            <div class="ear" id="left"></div>
                            <div class="ear" id="right"></div>
                            <div class="hair-main">
                                <div class="sideburn" id="left"></div>
                                <div class="sideburn" id="right"></div>
                                <div class="hair-top"></div>
                            </div>
                            <div class="face">
                                <div class="hair-bottom"></div>
                                <div class="nose"></div>
                                <div class="eye-shadow" id="left">
                                    <div class="eyebrow"></div>
                                    <div class="eye"></div>
                                </div>
                                <div class="eye-shadow" id="right">
                                    <div class="eyebrow"></div>
                                    <div class="eye"></div>
                                </div>
                                <div class="mouth"></div>
                                <div class="shadow-wrapper">
                                    <div class="shadow"></div>
                                </div>
                            </div>
                        </div>
                        <span class="music-note" id="one">&#9835;</span>
                        <span class="music-note" id="two">&#9834;</span>
                    </div>
                </div>

                <section class="section1" id="about">
                    <div class="features">
                        <container id="features-column">
                            <div id="content">
                                <div id="heading">
                                    <h5 class="h-5">DESIGNED FOR DEVELOPERS</h5>
                                    <h2 class="h-2">The world's most powerful and<br />easy-to-use Project Tracker</h2>
                                    <p class="body-mid">Pardox project tracking is the <b>No.1 </b> tool to track,organise projects and schedule your daily events. Its an all in one solution to each problem a developer faces during project execution</p>
                                    <button class="primary-button">Know More</button>
                                </div>
                                <div id="feature-block">
                                    <div id="feature-column">
                                        <img id="feature-icon" src="https://assets.codepen.io/7339435/Edit.svg" />
                                        <h6 class="h-6">Track Each project</h6>
                                        <p class="body-small">With this tool you can keep track on each project a developer working on and can add or remove project according to one's need and never miss your deadlines ever.</p>

                                    </div>
                                    <div id="feature-column">
                                        <img id="feature-icon" src="https://assets.codepen.io/7339435/Grid+Four+01.svg" />
                                        <h6 class="h-6">Schedule Project</h6>
                                        <p class="body-small">Using Paradox give user independence to schedule your projects according to their own convinience .With time tracking it assist developer to organise project accordingly. </p>

                                    </div>
                                </div>
                            </div>
                            <div id="image">
                                <img class="about-img" src={mt} />
                            </div>
                        </container>
                    </div>
                </section>

                <div class="parallax2" id="services">
                    <div class="heading-sm about-description">
                        <span>
                            Project Tracling software used by millions.
                            <p>PARADOX is a project tracker that let's you work hours across project. Unlimited Users,Free Forever.</p>
                            <p>You can keep track of daily work at your company by the exclusive features offered by paradox </p>
                            <p>From Days to months, to adding information about your employees and pending task. All you can search across in blink of an eye</p>
                        </span>
                    </div>
                </div>

                <section class="dark" id="features">
                    {/* <div class="slider-container">
                        <div class="left-slide">
                            <div style={{ backgroundColor: "yellow" }}>
                                <h1>Heading 1</h1>
                                <p>content to be written here</p>
                            </div>
                            <div style={{ backgroundColor: "#354f32" }}>
                                <h1>Heading 2</h1>
                                <p>content to be written here</p>
                            </div>
                            <div style={{ backgroundColor: "#657e85" }}>
                                <h1>Heading 3</h1>
                                <p>content to be written here</p>
                            </div>
                            <div style={{ backgroundColor: "#2b2e32" }}>
                                <h1>Heading 4</h1>
                                <p>content to be written here</p>
                            </div>
                        </div>
                        <div class="right-slide">
                            <div id="slide-image-1" ></div>
                            <div id="slide-image-2" ></div>
                            <div id="slide-image-3"></div>
                            <div id="slide-image-4"></div>
                        </div>
                        <div class="action-buttons">
                            <button class="down-button">
                                <i class="fas fa-arrow-down"></i>
                            </button>
                            <button class="up-button">
                                <i class="fas fa-arrow-up"></i>
                            </button>
                        </div>
                    </div> */}
                    {/* <h2>Description</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat debitis cupiditate. Cupiditate aspernatur rerum voluptas doloribus ut? Odit minima fuga earum temporibus assumenda. Saepe libero, adipisci hic consequatur nisi illo eius neque rem
                        ratione! Saepe nisi eos, corporis provident, recusandae delectus, officia vero eius quaerat voluptas error molestiae rem rerum! Odit facilis quos est tempora, aspernatur
                    </p> */}
                    <article class="article group">
                        <img class="image rights" src={s1} alt="Image" />
                        <section class="content">
                            <h2 class="headline">Organise Your Work</h2>
                            <p><em>Set up and easily manage even the most hectic project in a blink.</em></p>
                        </section>

                    </article>
                    <article class="article group">
                        <img class="image lefts" src={s2} alt="Image" />
                        <section class="content">
                            <h2 class="headline">Schedule Your Time</h2>
                            <p><em>With paradox Project Tracker,You get flexibility to schedule your time and devote required time in each project and be ahead of all.</em></p>

                        </section>

                    </article>
                    <article class="article group">
                        <img class="image rights" src={s3} alt="Image" />
                        <section class="content">
                            <h2 class="headline">Add Projects With Timeline</h2>
                            <p><em>Add current/Upcoming project with project time-period to never miss deadlines, You can also add team members to notify and sync all your teamates with upcoming projects in the pipeline.</em></p>

                        </section>

                    </article>
                    <article class="article group">
                        <img class="image lefts" src={s4} alt="Image" />
                        <section class="content">
                            <h2 class="headline">Detail Analysis Of Your Work and Time</h2>
                            <p><em>With this tool you get detail analysis of time spent in various project by the user and assist the user to plan thier workflow accordingly.</em></p>

                        </section>

                    </article>
                </section>

                <div class="parallax3" id="partners">

                    <div class="main-container">
                        <div class="cards">
                            <div class="cardi card-1">
                                <div class="card__icon"><i class="fas fa-bolt"></i></div>
                                
                                <h2 class="card__title"><div class="card__tit">PARADOX PROJECT TRACKER</div> <br/>
                                <p class="card_content">The <b>NO.1 </b> Project Tracking Tool Made For Developers, By The Developers. <br/>Never Miss a Deadline and Keep Track Of Your Time To Accomplish Your Aims.</p></h2>
                                <img class="card__logo" src={logo} alt="logo"></img>
                                <p class="card__apply">
                                    <a class="card__link" href="./login">Try it Now !!! <i class="fas fa-arrow-right"></i></a>
                                </p>
                            </div>
                            


                        </div>
                    </div>
                </div>

                <div class="more">
                    <div class="header">
                        <h1 class="h--1">Reliable,Time Efficient and Developer Friendly with useful features</h1>
                        <h1 class="h--12">Organize,Track and Analyse your projects</h1>
                    </div>
                    <div class="row1-container">
                        <div class="box box-down cyan">
                            <h2 class="h--2">Tracker</h2>
                            <p>Monitors and analyse activity to identify project and never miss your deadlines.</p>
                            <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                        </div>

                        <div class="box red">
                            <h2 class="h--2">Manage Team</h2>
                            <p>manage Team members and follow well structured system.</p>
                            <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
                        </div>

                        <div class="box box-down blue">
                            <h2 class="h--2">Analyse</h2>
                            <p>Analyse and Track Time spent on various Project.</p>
                            <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                        </div>
                    </div>
                    <div class="row2-container">
                        <div class="box orange">
                            <h2 class="h--2">Add Projects</h2>
                            <p>Add Upcoming Project With Timeline and get ready to conquer. </p>
                            <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
                        </div>
                    </div>

                </div>

                <div class="parallax4"></div>

                {/* <section class="section1" id="contact-header">
                    <h1>Contact Us</h1>
                </section> */}
                {/* <div class="parallax5">
                    <section id="contact">
                        <div class="container">
                            <div id="form-content" class="col-lg-8 mx-auto bg-light form">
                                <h3>Got Questions?</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus esse voluptate ullam ab consequatur, ex illo sed harum ut labore doloremque ipsum voluptatum tempore? Incidunt magni reiciendis totam? Ducimus?</p>
                                <hr />
                                <form style={{ padding: "30px" }}>
                                    <div class="control-group">
                                        <div class="group">
                                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                                <input class="col-md-12" type="text" required />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Name</label>
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="group">
                                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                                <input class="col-md-12" type="text" required />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Email</label>
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="group">
                                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                                <textarea class="col-md-12" type="textarea" rows="5" required="required"></textarea>
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Message</label>
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div id="success"></div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary col-md-12 btn-xl" id="sendMessageButton">Send
                                            Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div> */}
            </div>
        );

    }
}