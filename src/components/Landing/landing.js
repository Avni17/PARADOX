import React, { Component } from 'react';
import './style.scss';

// import signup from './images/signup.jpeg';

export default class landing extends Component {
    // myfunction = () => {
    //     var slides = document.querySelectorAll('.slide');
    //     var btns = document.querySelectorAll('.btn');
    //     let currentSlide = 1;

    //     // Javascript for image slider manual navigation
    //     var manualNav = function (manual) {
    //         slides.forEach((slide) => {
    //             slide.classList.remove('active');

    //             btns.forEach((btn) => {
    //                 btn.classList.remove('active');
    //             });
    //         });

    //         slides[manual].classList.add('active');
    //         btns[manual].classList.add('active');
    //     }

    //     btns.forEach((btn, i) => {
    //         btn.addEventListener("click", () => {
    //             manualNav(i);
    //             currentSlide = i;
    //         });
    //     });
    //     var repeat = function (activeClass) {
    //         let active = document.getElementsByClassName('active');
    //         let i = 1;

    //         var repeater = () => {
    //             setTimeout(function () {
    //                 [...active].forEach((activeSlide) => {
    //                     activeSlide.classList.remove('active');
    //                 });

    //                 slides[i].classList.add('active');
    //                 btns[i].classList.add('active');
    //                 i++;

    //                 if (slides.length == i) {
    //                     i = 0;
    //                 }
    //                 if (i >= slides.length) {
    //                     return;
    //                 }
    //                 repeater();
    //             }, 3000);
    //         }
    //         repeater();
    //     }
    //     repeat();
    // }
    // componentDidMount = () => {
    //     this.myfunction();
    // }

    // componentDidUpdate = () => {
    //     // this.myfunction();
    // }
    render() {
        return (
            <div className='landing app'>
                <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                    <div class="container">
                        <a class="navbar-brand" href="#page-top">Company Name</a>
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto my-2 my-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#services">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#partners">Partners</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class="parallax1" id="page-top">
                    <div class="heading">
                        Company Profile
                    </div>
                </div>

                <section class="section1" id="about">
                    <h1>About Us</h1>
                    <br/>
                        <div class="col-md-12 row">
                            <div class="col-md-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatem illum molestiae quisquam nulla aspernatur delectus voluptatum quo, doloribus et porro consectetur possimus architecto nesciunt, magnam ipsam! Molestias ipsum explicabo quod,
                                culpa doloremque eos delectus voluptate cum expedita. Nihil at qui animi illum impedit deleniti fuga, aspernatur error accusantium fugit ad, sed deserunt vitae? Amet nam quaerat, veritatis enim et itaque velit architecto earum, saepe voluptate debitis
                                iure, ab aliquam doloribus. Cum exercitationem eveniet laborum voluptates ipsa eius, soluta commodi. Eos eveniet corporis repellendus, quis ad debitis perferendis veniam sunt molestiae omnis, officia suscipit nesciunt ducimus! Temporibus quis nobis
                                asperiores.
                            </div>
                            <div class="col-md-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatem illum molestiae quisquam nulla aspernatur delectus voluptatum quo, doloribus et porro consectetur possimus architecto nesciunt, magnam ipsam! Molestias ipsum explicabo quod,
                                culpa doloremque eos delectus voluptate cum expedita. Nihil at qui animi illum impedit deleniti fuga, aspernatur error accusantium fugit ad, sed deserunt vitae? Amet nam quaerat, veritatis enim et itaque velit architecto earum, saepe voluptate debitis
                                iure, ab aliquam doloribus. Cum exercitationem eveniet laborum voluptates ipsa eius, soluta commodi. Eos eveniet corporis repellendus, quis ad debitis perferendis veniam sunt molestiae omnis, officia suscipit nesciunt ducimus! Temporibus quis nobis
                                asperiores.
                            </div>
                        </div>
                </section>

                <div class="parallax2" id="services">
                    <div class="heading-sm">
                        <span class="border">
                            Description
                        </span>
                    </div>
                </div>

                <section class="dark">
                    <h2>Description</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat debitis cupiditate. Cupiditate aspernatur rerum voluptas doloribus ut? Odit minima fuga earum temporibus assumenda. Saepe libero, adipisci hic consequatur nisi illo eius neque rem
                        ratione! Saepe nisi eos, corporis provident, recusandae delectus, officia vero eius quaerat voluptas error molestiae rem rerum! Odit facilis quos est tempora, aspernatur
                    </p>
                </section>

                <div class="parallax3" id="partners"></div>

                <div class="dark">
                    <h3 class="text-center">Description here</h3>
                    <br/>
                        <div class="col-md-12 row">
                            <div class="col-md-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur omnis repudiandae magnam animi architecto excepturi exercitationem soluta. Cupiditate, omnis similique, magnam veritatis vitae molestias temporibus esse doloribus asperiores
                                exercitationem, iste corrupti earum. Hic saepe non eius amet temporibus at autem officiis suscipit doloribus. Dignissimos odit possimus ex, voluptatum debitis nostrum iusto maxime obcaecati corporis, aut nihil odio mollitia facere dolore voluptas
                                natus consectetur porro hic ut est tempora in doloribus, aspernatur accusantium. Perspiciatis ab nemo iusto eveniet distinctio odit voluptatum necessitatibus et neque quidem natus, enim officiis optio voluptate alias inventore dolores sint provident
                                sunt nihil, doloribus voluptas dolorum.
                            </div>
                            <div class="col-md-6">
                                quisquam molestias sequi ipsa magnam quasi ad reiciendis libero expedita nemo asperiores nobis ducimus ab aliquid accusantium fugit unde quis cum consequatur? Libero, inventore, perspiciatis explicabo ipsam repellat at quod, iure ullam temporibus autem
                                tempore ad odio eveniet debitis amet necessitatibus accusantium earum.
                            </div>
                        </div>

                </div>

                <div class="parallax4"></div>

                <section class="section1" id="contact-header">
                    <h1>Contact Us</h1>
                </section>
                <div class="parallax5">
                    <section id="contact">
                        <div class="container">
                            <div id="form-content" class="col-lg-8 mx-auto bg-light form">
                                <h3>Got Questions?</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus esse voluptate ullam ab consequatur, ex illo sed harum ut labore doloremque ipsum voluptatum tempore? Incidunt magni reiciendis totam? Ducimus?</p>
                                <hr/>
                                    <form style={{padding: "30px"}}>
                                        <div class="control-group">
                                            <div class="group">
                                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                                    <input class="col-md-12" type="text" required/>
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
                                                    <input class="col-md-12" type="text" required/>
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
                                        <br/>
                                            <div id="success"></div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-primary col-md-12 btn-xl" id="sendMessageButton">Send
                                                    Message</button>
                                            </div>
                                    </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );

    }
}