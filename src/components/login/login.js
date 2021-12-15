import React, { Component } from 'react'
// import './login-helper'
import './login.css'
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const API_PATH = 'http://localhost/paradox/login.php';
const API_PATH2 = 'http://localhost/paradox/signup.php';

export default class login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      msg: '',
      username: '',
      gender: '',
      fullName: '',

    };

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);

  }



  login() {
    if (this.state.email && this.state.password) {
      console.log(this.state);
      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state

      })
        .then(result => {


          // alert(result.data[0].Message);
          this.setState({
            msg: result.data[0].Message
          })


          if (result.data[0].Message == 'Success') {
            localStorage.setItem('email', JSON.stringify(this.state.email));
            window.open("/dashboard", "_self")
            //   this.setState({
            //     redirectToReferrer: true
            //   })
            //   console.log(this.state);
            //   alert(result.data[0].Message);
            //   console.log(this.state);
            //   alert(result.data[0].Message);
            //   console.log(this.state);
            //   alert(result.data[0].Message);

          }

        })
        .catch(error => this.setState({ msg: error.data[0].Message }));


    }

  }
  signup() {
    if (this.state.email && this.state.password && this.state.fullName && this.state.username && this.state.gender) {
      console.log(this.state);
      axios({
        method: 'post',
        url: `${API_PATH2}`,
        headers: { 'content-type': 'application/json' },
        data: this.state

      })
        .then(result => {


          // alert(result.data[0].Message);
          this.setState({
            msg: result.data[0].Message
          })


          if (result.data[0].Message == 'ACCOUNT CREATED.') {
            localStorage.setItem('email', JSON.stringify(this.state.email));
            window.open("/dashboard", "_self")
            //   this.setState({
            //     redirectToReferrer: true
            //   })
            //   console.log(this.state);
            //   alert(result.data[0].Message);
            //   console.log(this.state);
            //   alert(result.data[0].Message);
            //   console.log(this.state);
            //   alert(result.data[0].Message);

          }

        })
        .catch(error => this.setState({ msg: error.data[0].Message }));


    }

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

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
      square.style.height = "300px";
      document.title = "PARADOX Login";
    });

    rightSide.addEventListener("click", () => {
      rightSide.style.display = "none";
      frontSide.style.display = "block";
      leftSide.style.display = "block";
      square.style.transform = "rotate3d(0, -1, 0, 90deg)";
      document.title = "PARADOX Sign up";
      square.style.height = "600px";
      square.style.marginTop = "30px";
    });

    leftSide.addEventListener("click", () => {
      leftSide.style.display = "none";
      frontSide.style.display = "block";
      rightSide.style.display = "none";
      square.style.transform = "rotate3d(0, 1, 0, 90deg)";
      document.title = "PARADOX Forgot password";
      square.style.height = "275px";
    });


  }
  render() {

    return (
      <div className="background">

        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}
        {<span></span>}


        <div className="logn">
          <div className="container">
            <div id="square">
              <div className="front">
                <h1>Login</h1>
                <form>
                  <input
                    required

                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={this.onChange}
                  /><br />
                  <input
                    required

                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.onChange}
                  /><br />
                  <button type="button" onClick={this.login}>Submit</button>
                </form>
                <div>
                  {this.state.msg &&
                    <div>{this.state.msg}</div>
                  }
                </div>
              </div>
              <div className="right">
                <h1>Create a new account</h1>
                <form >
                  <input
                    required

                    type="email"
                    name="email"
                    id="email"

                    placeholder="Email"
                    onChange={this.onChange}
                  /><br />
                  <input
                    required
                    type="text"
                    name="username"
                    id="username"
                    placeholder="User name"
                    onChange={this.onChange}
                  /><br />
                  <input
                    required
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full name"
                    onChange={this.onChange}
                  /><br />
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.onChange}
                  /><br />
                  GENDER:
                  Male
                  <input style={{
                    // float: "left",
                    // clear: "none",
                    // margin: "2px 0 0 2px"
                  }}

                    type="radio"
                    name="gender"
                    id="gender"
                    value="m"
                    placeholder="gender"
                    onChange={this.onChange}
                  />

                  Female
                  <input
                    style={{
                      // float: "left",
                      // clear: "none",
                      // margin: "0px"
                    }}
                    type="radio"
                    name="gender"
                    id="gender"
                    value="f"
                    placeholder="gender"
                    onChange={this.onChange}
                  />
                  <br /><br />
                  <button type="button" onClick={this.signup}>Submit</button>
                  <div>
                    {this.state.msg &&
                      <div>{this.state.msg}</div>
                    }
                  </div>

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
                  <button type="button">Submit</button>
                </form>
              </div>
            </div>
            <div className="actions">

              <button id="leftSide" type="button" >Forgot Password</button>
              <button id="frontSide" type="button">Login</button>
              <button id="rightSide" type="button">Sign up</button>
            </div>
          </div>
        </div>
      </div >
    );
  }
}