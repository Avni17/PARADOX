import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './dashboard.scss';
// import './dashboard-help.js';
import axios from 'axios';
import avni from './images/avni.jpg';
 import "./styles.css";
const API_PATH = 'http://localhost/paradox/card_date_data.php';
// let date=[];
function Card(props) {

  return (

    <div class="project-box-wrapper">
      <div class="project-box" style={{ backgroundColor: "#fee4cb;" }}>
        <div class="project-box-header">
          <span>{props.dt}</span>

          <div class="more-wrapper">
            <button class="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>
        <div class="project-box-content-header">
          <p class="box-content-header">{props.task}</p>
          <p class="box-content-subheader">Prototyping</p>
        </div>
        <div class="box-progress-wrapper">
          <p class="box-progress-header">Progress</p>
          <div class="box-progress-bar">
            <span class="box-progress" style={{ width: "60%", backgroundColor: "#ff942e" }}></span>
          </div>
          <p class="box-progress-percentage">{props.prog}%</p>
        </div>
        <div class="project-box-footer">
          <div class="participants">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant" />
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant" />
            <button class="add-participant" style={{ color: "#ff942e" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div class="days-left" style={{ color: "#ff942e" }}>
            {props.days} Days Left
          </div>
        </div>
      </div>
    </div>
  )
}

export default class dashboard extends Component {

  constructor() {
    super();

    this.state = {

      currDate: Date().toLocaleString().split(' ').slice(0, 4).join(' '),
      email: '',
      date: []
    }
    this.logout = this.logout.bind(this);
    this.data_cards = this.data_cards.bind(this);

  }
  logout() {

    localStorage.setItem('email', JSON.stringify(''));
    window.open("/", "_self")
  }
  data_cards() {
    if (this.state.email) {

      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state

      })
        .then(result => {

          // alert(result.data[2].endtime)

          // date=result.data;

          this.setState({
            date: result.data
          })
          console.log(this.state);
          // alert(result.data[2].endtime)

        })
        .catch(error => this.setState());


    }

  }
  componentDidMount = () => {

    let email = localStorage.email
    if (email != undefined) {
      this.setState({
        email: JSON.parse(email)
      });
    }
    this.myfunction();
    this.data_cards();

  }

  componentDidUpdate = () => {
    this.myfunction();
    this.data_cards();

  }


  myfunction = () => {

    document.addEventListener('DOMContentLoaded', function () {
      var modeSwitch = document.querySelector('.mode-switch');

      modeSwitch.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
      });

      var listView = document.querySelector('.list-view');
      var gridView = document.querySelector('.grid-view');
      var projectsList = document.querySelector('.project-boxes');

      listView.addEventListener('click', function () {
        gridView.classList.remove('active');
        listView.classList.add('active');
        projectsList.classList.remove('jsGridView');
        projectsList.classList.add('jsListView');
      });

      gridView.addEventListener('click', function () {
        gridView.classList.add('active');
        listView.classList.remove('active');
        projectsList.classList.remove('jsListView');
        projectsList.classList.add('jsGridView');
      });

      document.querySelector('.messages-btn').addEventListener('click', function () {
        document.querySelector('.messages-section').classList.add('show');
      });

      document.querySelector('.messages-close').addEventListener('click', function () {
        document.querySelector('.messages-section').classList.remove('show');
      });
    });


  }
  render() {


    return (


      <div class="app-container">
        <div class="app-header">
          <div class="app-header-left">
            <span class="app-icon"></span>
            <p class="app-name">Paradox</p>
            <div class="search-wrapper">
              <input class="search-input" type="text" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
                <defs></defs>
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </div>
          </div>
          <div class="app-header-right">
            <button class="mode-switch" title="Switch Theme">
              <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </button>
            {/* <button class="add-btn" title="Add New Project">
              <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" /></svg>
            </button> */}
            <Overlay />
            <button class="notification-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            </button>
            <div class="dropdown">
              <button class="dropbtn profile-btn">
                <img src={avni} />
                <span>{this.state.email}</span>
              </button>
              <div class="dropdown-content">
                <button type='button' onClick={this.logout}>Logout</button>
                <svg id="cloud-upload" fill="#000000" height="60" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path id="upcloud" d="M10.09 15.59l1.41 1.41 5-5-5-5-1.41 1.41 2.58 2.59h-9.67v2h9.67l-2.58 2.59zm8.91-12.59h-14c-1.11 0-2 .9-2 2v4h2v-4h14v14h-14v-4h-2v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
            </div>

          </div>
          <button class="messages-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
          </button>
        </div>
        <div class="app-content">
          <div class="app-sidebar">
            <a href="" class="app-sidebar-link active">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" /></svg>
            </a>
            <a href="" class="app-sidebar-link">
              <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-pie-chart" viewBox="0 0 24 24">
                <defs />
                <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
              </svg>
            </a>
            <a href="" class="app-sidebar-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" /></svg>
            </a>
            <a href="" class="app-sidebar-link">
              <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-settings" viewBox="0 0 24 24">
                <defs />
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </a>
          </div>
          <div class="projects-section">
            <div class="projects-section-header">
              <p>Projects</p>
              <p class="time">{this.state.currDate}</p>
            </div>
            <div class="projects-section-line">
              <div class="projects-status">
                <div class="item-status">
                  <span class="status-number">45</span>
                  <span class="status-type">In Progress</span>
                </div>
                <div class="item-status">
                  <span class="status-number">24</span>
                  <span class="status-type">Upcoming</span>
                </div>
                <div class="item-status">
                  <span class="status-number">62</span>
                  <span class="status-type">Total Projects</span>
                </div>
              </div>
              <div class="view-actions">
                <button class="view-btn list-view" title="List View">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                </button>
                <button class="view-btn grid-view active" title="Grid View">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" /></svg>
                </button>
              </div>
            </div>
            <div class="project-boxes jsGridView">
              {
                this.state.date.map((item) => (<Card dt={item.starttime} days={item.days} task={item.task} prog={item.progress} />))

              }

            </div>
          </div>
          <div class="messages-section">
            <button class="messages-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" /></svg>
            </button>
            <div class="projects-section-header">
              <p>Client Messages</p>
            </div>
            <div class="messages">
              <div class="message-box">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image" />
                <div class="message-content">
                  <div class="message-header">
                    <div class="name">Stephanie</div>
                    <div class="star-checkbox">
                      <input type="checkbox" id="star-1" />
                      <label for="star-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      </label>
                    </div>
                  </div>
                  <p class="message-line">
                    I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.
                  </p>
                  <p class="message-line time">
                    Dec, 12
                  </p>
                </div>
              </div>
              <div class="message-box">
                <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image" />
                <div class="message-content">
                  <div class="message-header">
                    <div class="name">Mark</div>
                    <div class="star-checkbox">
                      <input type="checkbox" id="star-2" />
                      <label for="star-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      </label>
                    </div>
                  </div>
                  <p class="message-line">
                    Hey, can tell me about progress of project? I'm waiting for your response.
                  </p>
                  <p class="message-line time">
                    Dec, 12
                  </p>
                </div>
              </div>
              <div class="message-box">
                <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />
                <div class="message-content">
                  <div class="message-header">
                    <div class="name">David</div>
                    <div class="star-checkbox">
                      <input type="checkbox" id="star-3" />
                      <label for="star-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      </label>
                    </div>
                  </div>
                  <p class="message-line">
                    Awesome! 🤩 I like it. We can schedule a meeting for the next one.
                  </p>
                  <p class="message-line time">
                    Dec, 12
                  </p>
                </div>
              </div>
              <div class="message-box">
                <img src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />
                <div class="message-content">
                  <div class="message-header">
                    <div class="name">Jessica</div>
                    <div class="star-checkbox">
                      <input type="checkbox" id="star-4" />
                      <label for="star-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      </label>
                    </div>
                  </div>
                  <p class="message-line">
                    I am really impressed! Can't wait to see the final result.
                  </p>
                  <p class="message-line time">
                    Dec, 11
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


class OverlayContent extends React.Component 
{
   state = { values: [{ value: null }] };

  createUI() {
    return this.state.values.map((el, i) => (
      <div key={i}>
        <input
          type="text"
          value={el.value || ""}
          onChange={this.handleChange.bind(this, i)}
        />
        <input
          type="button"
          value="remove"
          onClick={this.removeClick.bind(this, i)}
        />
      </div>
    ));
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i].value = event.target.value;
    this.setState({ values });
  }

  addClick() {
    this.setState(prevState => ({
      values: [...prevState.values, { value: null }]
    }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.values.join(", "));
    event.preventDefault();
  }

  render() {
    return (
      <div className="blur">

     
      <form className="projectform" onSubmit={this.handleSubmit}>
         <input type="text" className="project_input" name="projectName" 
       size="50" placeholder="Project Name"/><br/>
    <input type="text"className="project_input" name="startD"  size="50" 
    placeholder="Start Date"  onfocus="(this.type='date')" onblur="(this.type='text')"/>
     <input type="text"className="project_input" name="endD" size="50" 
     placeholder="End Date" onfocus="(this.type='date')" onblur="(this.type='text')"/>
     <br/>
   
    
        {this.state.values.map((el, i) => (
          <div key={i}>
            
            <input
              type="text"
              className="project_input"
              value={el.value || ""}
              onChange={e => this.handleChange(i, e)}
              placeholder="Team Member Name"
            />
            <input
              type="text"
              className="project_input"
              onChange={e => this.handleChange(i, e)}
              placeholder="Task"
            />
            <input type="button"  class="button" value="add more" onClick={() => this.addClick()} />
            <input
              type="button" class="button"
              value="remove"
              onClick={() => this.removeClick(i)}
            />
          </div>
        ))}

       
        <input  class="button" type="submit" value="Submit" />
        <button className="button btn btn-default btn-wide palette-sun-flower" onClick={this.props.closeOverlay}>Close</button>
      </form>
      </div>
    );
  }
}
class Overlay extends React.Component {
  constructor(props) {
    super(props)
    this.state = { overlay: false }
    this.openOverlay = this.openOverlay.bind(this)
    this.closeOverlay = this.closeOverlay.bind(this)
  }
  
  openOverlay() {
    this.setState({ overlay: true })   
  }
  
  closeOverlay() {
    this.setState({ overlay: false })
  }
  
  render() {
    return (
      <div>
        <button class="add-btn" title="Add New Project" onClick={this.openOverlay}>
              <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" /></svg>
                
            </button>
        
        {this.state.overlay &&
          <Portal>
            <OverlayContent closeOverlay={this.closeOverlay} />
          </Portal>
        }
      </div>
    )
  }
}
class Portal extends React.Component {
  componentDidMount() {
    this.portal = document.createElement('div')
    this.portal.setAttribute('class', 'overlay overlay-anim')
    document.body.appendChild(this.portal)
    ReactDOM.render(this.props.children, this.portal)
  }
  
  componentWillUnmount() {
    document.body.removeChild(this.portal)
  }
  
  render() {
    return null
  }
}
