import React, { Component } from 'react'
// import './login-helper'
import './login.css'
import axios from 'axios';



const API_PATH = 'http://localhost/paradox/login.php';


export default class login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      msg: ''
    };

    this.login = this.login.bind(this);
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  componentDidMount = () => {
    localStorage.setItem('email', JSON.stringify(''));
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
              <form>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.onChange}
                />
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.onChange}
                />
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