import React, { Component } from 'react'
// import './login-helper'
import './login.css'

export default class login extends Component 
{
  
  componentDidMount = () => {  
    this.myfunction();
 }

 componentDidUpdate = () => {  
    this.myfunction();
 }

 myfunction = () => {
  const square = document.getElementById("square");
  const frontSide = document.getElementById("frontSide");
  const rightSide = document.getElementById("rightSide");
  const leftSide = document.getElementById("leftSide");

  frontSide.addEventListener("click", () => {
    frontSide.style.display = "none";
    rightSide.style.display = "block";
    leftSide.style.display = "block";
    square.style.transform = "rotate3d(0, 0, 0, 90deg)";
    document.title = "PARADOX Login";
  });

  rightSide.addEventListener("click", () => {
    rightSide.style.display = "none";
    frontSide.style.display = "block";
    leftSide.style.display = "block";
    square.style.transform = "rotate3d(0, -1, 0, 90deg)";
    document.title = "PARADOX Sign up";
  });

  leftSide.addEventListener("click", () => {
    leftSide.style.display = "none";
    frontSide.style.display = "block";
    rightSide.style.display = "none";
    square.style.transform = "rotate3d(0, 1, 0, 90deg)";
    document.title = "PARADOX Forgot password";
  });

    
 }
  render() {
    return (
      <div className="login">
      <div className="container">
        <div id="square">
          <div className="front">
            <h1>Login</h1>
            <form action="#" method="post">
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="right">
            <h1>Create a new account</h1>
            <form action="#" method="post">
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                required
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full name"
              />
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="left">
            <h1>Add your email to reset password</h1>
            <form action="#" method="post">
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="actions">
          <button id="leftSide" type="button">Forgot Password</button>
          <button id="frontSide" type="button">Login</button>
          <button id="rightSide" type="button">Sign up</button>
        </div>
      </div>
      </div>
    );
  }
}