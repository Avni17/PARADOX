import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Login from "./components/login/login";
import Calender from "./components/Calender/calender";
import Chart from "./components/chart/chart";
import Landing from "./components/Landing/landing";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      email: ''
    }

  }
  componentDidMount = () => {
    let email = localStorage.email
    if (email != undefined) {
      this.setState({
        email: JSON.parse(email)
      });
    }

  }
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/login' element={<Login />} />
            {this.state.email &&
              <Route exact path="/dashboard" element={<Dashboard />} />
            }
            {this.state.email &&
              <Route exact path='/calender' element={<Calender />} />
            }
            {this.state.email &&
              <Route exact path='/chart' element={<Chart />} />
            }
          </Routes>
        </Router>
      </>

    );

  }

}


