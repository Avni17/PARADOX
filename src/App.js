import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Login from "./components/login/login";
import Calender from "./components/Calender/calender";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      email:''
    }

  }
  componentDidMount = () => { 
    let email = localStorage.email
    if(email != undefined){
        this.setState({
            email: JSON.parse(email)
        });
    } 
    
 }
  render()
  {
    return (
      <>
      <Router>
        <Routes>
        
          <Route exact path='/' element={<Login/>} />
          { this.state.email && 
          <Route exact path="/dashboard" element={<Dashboard/>} />
          } 
          <Route exact path='/calender' element={<Calender/>} />
          
        </Routes>
      </Router>
    </>
   
    );

  }
 
}


