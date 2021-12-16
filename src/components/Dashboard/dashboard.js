import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './dashboard.scss';
// import './dashboard-help.js';
import axios from 'axios';
import avni from './images/avni.png';
import "./styles.css";
const API_PATH = 'http://localhost/paradox/card_date_data.php';
const API_PATH2 = 'http://localhost/paradox/addproject.php';
const API_PATH3 = 'http://localhost/paradox/addparticipant.php';
const API_PATH4 = 'http://localhost/paradox/typeview.php';
const API_PATH5 = 'http://localhost/paradox/statusupdate.php';
const API_PATH6 = 'http://localhost/paradox/username.php';
const API_PATH8 = 'http://localhost/paradox/phpqueries.php';
const API_PATH9 = 'http://localhost/paradox/notification.php';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      i: props.k,
      width: props.prog,
    }
    this.myfunction = this.myfunction.bind(this);
  };
  myfunction = () => {
    var progress = document.getElementsByClassName('box-progress');
    console.log(this.state);
    progress[this.state.i].style.width = this.state.width + "%";


  }

  componentDidMount = () => {
    this.myfunction();

  }

  componentDidUpdate = () => {
    this.myfunction();
    console.log(this.state);

  }
  render() {



    return (

      <div class="project-box-wrapper">
        <div class="project-box" style={{ backgroundColor: "#fee4cb;" }}>
          <div class="project-box-header">
            <span>{this.props.dt}</span>

            <div class="more-wrapper">
              {/* <button class="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button> */}
              <Overlay3 p={this.props.pid} handle={this.props.handler} />
            </div>
          </div>
          <div class="project-box-content-header">
            <p class="box-content-header">{this.props.name}</p>
            {/* <p class="box-content-subheader">{this.props.task}</p> */}
          </div>
          <div class="box-progress-wrapper">
            <p class="box-progress-header">Progress</p>
            <div class="box-progress-bar">
              <span class="box-progress" style={{ backgroundColor: "#ff942e" }}></span>
            </div>
            <p class="box-progress-percentage">{this.props.prog}%</p>
          </div>
          <div class="project-box-footer">
            <div class="participants">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant" />
              <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant" />
              {/* <button class="add-participant" style={{ color: "#ff942e" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button> */}
              <Overlay2 p={this.props.pid} />
            </div>
            <div class="days-left" style={{ color: "#ff942e" }}>
              {this.props.days}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default class dashboard extends Component {

  constructor() {
    super();

    this.state = {
      update: 0,
      update1: 0,
      update2: 0,
      username: '',
      currDate: Date().toLocaleString().split(' ').slice(0, 4).join(' '),
      email: '',
      date: [],
      inprogress: '',
      upcoming: '',
      total: ''
    }
    this.logout = this.logout.bind(this);
    this.username = this.username.bind(this);
    this.data_cards = this.data_cards.bind(this);
    this.handler = this.handler.bind(this);
    this.projinfo = this.projinfo.bind(this);


  }
  handler() {
    this.setState({
      update: 0,
      update1: 0
    })
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

          // alert('prev'+this.state.date.length);
          // alert('new'+result.data.length);
          // date=result.data;
          if (this.state.update == 0) {
            this.setState({
              date: result.data,
              update: 1
            })
          }
          // this.setState({
          //   date: result.data,
          //   update:1
          // })


          // console.log(this.state);
          // alert(result.data[2].endtime)

        })
        .catch(error => this.setState());


    }

  }
  username() {
    if (this.state.email) {

      axios({
        method: 'post',
        url: `${API_PATH6}`,
        headers: { 'content-type': 'application/json' },
        data: this.state

      })
        .then(result => {

          // alert(result.data[2].totalprojects);

          // date=result.data;
          // console.log(this.state);
          if (this.state.update2 == 0) {
            this.setState({
              update2: 1,
              username: result.data[0].Message
            })
          }


          // alert(result.data[2].endtime)

        })
        .catch(error => this.setState());


    }

  }
  projinfo() {
    if (this.state.email) {

      axios({
        method: 'post',
        url: `${API_PATH8}`,
        headers: { 'content-type': 'application/json' },
        data: this.state

      })
        .then(result => {

          // alert(result.data[2].totalprojects);

          // date=result.data;
          // console.log(this.state);
          if (this.state.update1 == 0) {
            this.setState({
              inprogress: result.data[0].inprogress,
              upcoming: result.data[1].upcoming,
              total: result.data[2].totalprojects,
              update1: 1
            })
          }


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
    this.projinfo();
    this.username();

  }

  componentDidUpdate = () => {
    this.myfunction();
    this.data_cards();
    console.log('hi');
    this.projinfo();
    this.username();

  }
  // componentDidUpdate(prevProps, prevState) {
  //   this.myfunction();

  //    this.data_cards();
  //     console.log('hi');

  // }


  myfunction = () => {

    document.addEventListener('DOMContentLoaded', function () {
      // var modeSwitch = document.querySelector('.mode-switch');

      // modeSwitch.addEventListener('click', function () {
      //   document.documentElement.classList.toggle('dark');
      //   modeSwitch.classList.toggle('active');
      // });

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

      // document.querySelector('.messages-close').addEventListener('click', function () {
      //   document.querySelector('.messages-section').classList.remove('show');
      // });
    });


  }
  render() {


    return (


      <div class="app-container">
        <div class="app-header">
          <div class="app-header-left">
            <span class="app-icon"></span>
            <p class="app-name">Paradox</p>
            {/* <div class="search-wrapper">
              <input class="search-input" type="text" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
                <defs></defs>
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </div> */}
          </div>
          <div class="app-header-right">
            {/* <button class="mode-switch" title="Switch Theme">
              <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </button> */}
            {/* <button class="add-btn" title="Add New Project">
              <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" /></svg>
            </button> */}
            <Overlay handler={this.handler} />
            {/* <button class="notification-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            </button> */}
            <Overlay4 />
            <div class="dropdown">
              <button class="dropbtn profile-btn">
                <img src={avni} />
                <span>{this.state.username}</span>
              </button>
              <div class="dropdown-content">
                <button type='button' onClick={this.logout}>Logout</button>
                <svg id="cloud-upload" fill="#000000" height="60" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
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
            <a href="/chart" class="app-sidebar-link">
              <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-pie-chart" viewBox="0 0 24 24">
                <defs />
                <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
              </svg>
            </a>
            <a href="/calender" class="app-sidebar-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" /></svg>
            </a>
            {/* <a href="" class="app-sidebar-link">
              <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-settings" viewBox="0 0 24 24">
                <defs />
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </a> */}
          </div>
          <div class="projects-section">
            <div class="projects-section-header">
              <p>Projects</p>
              <p class="time">{this.state.currDate}</p>
            </div>

            <div class="projects-section-line">
              <div class="projects-status">
                <div class="item-status">
                  <span class="status-number">{this.state.inprogress}</span>
                  <span class="status-type">In Progress</span>
                </div>
                <div class="item-status">
                  <span class="status-number">{this.state.upcoming}</span>
                  <span class="status-type">Upcoming</span>
                </div>
                <div class="item-status">
                  <span class="status-number">{this.state.total}</span>
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
                this.state.date.map((item, i) => (<Card k={i} handler={this.handler} dt={item.starttime} days={item.days} prog={item.progress} pid={item.pid} name={item.name} />))

              }

            </div>
          </div>
          <div class="messages-section" style={{ display: 'none' }}>
            {/* <button class="messages-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" /></svg>
            </button> */}
            {/* <div class="projects-section-header">
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
            </div> */}
          </div>
        </div>
      </div>

    );
  }
}


class OverlayContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      projectName: '',
      startD: '',
      endD: '',
      msg: '',
      values: [{ member: null, task: null }]
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.project = this.project.bind(this);
  }

  handleChange(i, event) {
    // console.log(this.state);
    let values = [...this.state.values];
    values[i][event.target.name] = event.target.value;
    this.setState({ values });
    // console.log(this.state);
  }

  addClick() {
    console.log(this.state.values);
    this.setState(prevState => ({
      values: [...prevState.values, { member: null, task: null }]
    }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state);
    console.log(this.state);
    event.preventDefault();
  }
  onChange(e) {
    // console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });

  }
  project() {
    if (this.state.projectName && this.state.startD && this.state.endD && this.state.values) {
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

          if (result.data[0].Message == 'Data inserted') {
            { this.props.handle() }
            { this.props.closeOverlay() }

            // window.open("/dashboard", "_self")
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
        .catch(error => this.setState({}));


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
      <div className="blur">


        <form className="projectform" >
          <input type="text" className="project_input" name="projectName"
            size="50" placeholder="Project Name" onChange={this.onChange} /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Start date:
          <input type="date" className="project_input" name="startD" size="50"
            placeholder="Start Date" onfocus="(this.type='date')" onblur="(this.type='text')" onChange={this.onChange} />
          End date:
          <input type="date" className="project_input" name="endD" size="50"
            placeholder="End Date" onfocus="(this.type='date')" onblur="(this.type='text')" onChange={this.onChange} />
          <br />


          {this.state.values.map((el, i) => (
            <div key={i}>

              <input
                type="text"
                className="project_input"
                name="member"
                onChange={e => this.handleChange(i, e)}
                placeholder="Team Member Name"
              />
              <input
                type="text"
                className="project_input"
                name="task"
                onChange={e => this.handleChange(i, e)}
                placeholder="Task"
              />&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="button" class="button" value="add more" onClick={() => this.addClick()} />
              <input
                type="button" class="button"
                value="remove"
                onClick={() => this.removeClick(i)}
              />

            </div>

          ))}

          <br></br>
          <input class="button" style={{ marginLeft: "300px" }} type="button" value="Submit" onClick={this.project} />
          <button class="button" onClick={this.props.closeOverlay}>Close</button>
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
            <OverlayContent closeOverlay={this.closeOverlay} handle={this.props.handler} />
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

class OverlayContent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: props.pid,
      msg: '',
      values: [{ member: null, task: null }]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.project = this.project.bind(this);
  }

  handleChange(i, event) {
    console.log(this.state);
    let values = [...this.state.values];
    values[i][event.target.name] = event.target.value;
    this.setState({ values });
    // console.log(this.state);
  }

  addClick() {
    console.log(this.state.values);
    this.setState(prevState => ({
      values: [...prevState.values, { member: null, task: null }]
    }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state);
    console.log(this.state);
    event.preventDefault();
  }

  project() {
    if (this.state.values) {
      // alert('hi1');
      console.log(this.state);
      axios({
        method: 'post',
        url: `${API_PATH3}`,
        headers: { 'content-type': 'application/json' },
        data: this.state

      })
        .then(result => {


          //  alert(result.data[0].Message);
          this.setState({
            msg: result.data[0].Message
          })

          if (result.data[0].Message == 'Data inserted') {
            { this.props.closeOverlay() }
            // window.open("/dashboard", "_self")
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
        .catch(error => this.setState({}));


    }


  }

  render() {
    return (
      <div className="blur">


        <form className="projectform" >



          {this.state.values.map((el, i) => (
            <div key={i}>

              <input
                type="text"
                className="project_input"
                name="member"
                onChange={e => this.handleChange(i, e)}
                placeholder="Team Member Name"
              />
              <input
                type="text"
                className="project_input"
                name="task"
                onChange={e => this.handleChange(i, e)}
                placeholder="Task"
              />
              <input type="button" class="button" value="add more" onClick={() => this.addClick()} />
              <input
                type="button" class="button"
                value="remove"
                onClick={() => this.removeClick(i)}
              />

            </div>
          ))}


          <input class="button" type="button" style={{ marginLeft: "300px" }} value="Submit" onClick={this.project} />
          <button className="button" onClick={this.props.closeOverlay}>Close</button>
        </form>
      </div>
    );
  }
}
class Overlay2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overlay: false,
      pid: props.p
    }
    this.openOverlay = this.openOverlay.bind(this)
    this.closeOverlay = this.closeOverlay.bind(this)
  }

  openOverlay() {
    // console.log(this.state)
    this.setState({ overlay: true })

  }

  closeOverlay() {
    this.setState({ overlay: false })
  }

  render() {
    return (
      <div>

        <button class="add-participant" style={{ color: "#ff942e" }} onClick={this.openOverlay}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>

        {this.state.overlay &&
          <Portal>
            <OverlayContent2 closeOverlay={this.closeOverlay} pid={this.state.pid} />
          </Portal>
        }
      </div>
    )
  }
}

class OverlayContent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: 0,
      email: '',
      pid: props.pid,
      values: [],
      status: []
    };

    this.project = this.project.bind(this);

  }
  type_data() {

    if (this.state.email && this.state.pid) {


      axios({
        method: 'post',
        url: `${API_PATH4}`,
        headers: { 'content-type': 'application/json' },
        data: this.state

      })
        .then(result => {



          if (this.state.update == 0) {
            this.setState({
              values: result.data,
              update: 1
            })
          }

          // if (result.data[0].Message == 'Data inserted') {
          //   // alert(result.data[0].Message);


          // }

        })
        .catch(error => this.setState({}));


    }


  }
  //  addClick() {
  //   console.log(this.state.status);
  //   this.setState(prevState => ({
  //     status: [...prevState.status, { st:null }]
  //   }));
  // }
  project() {
    if (this.state.status) {
      console.log(this.state);
      axios({
        method: 'post',
        url: `${API_PATH5}`,
        headers: { 'content-type': 'application/json' },
        data: this.state

      })
        .then(result => {



          this.setState({
            msg: result.data[0].Message,
            update: 0
          })

          if (result.data[0].Message == 'Data updated') {
            // alert(result.data[0].Message);
            { this.props.hand() }
            window.open("/dashboard", "_self")

          }

        })
        .catch(error => {
          this.setState({})
        });


    }


  }

  handleChange(i, el, event) {
    event.preventDefault();
    console.log(this.state);
    // let status = [...this.state.status];
    // status[i].st = event.target.value;
    var status = this.state.status
    if (el.status == 'no') {
      if (!status[el.tid]) {
        status.push(new Array)
        status[el.tid] = event.target.value
      }
      else {
        if (status[el.tid] == 'yes')
          status[el.tid] = 'no'
        else
          status[el.tid] = event.target.value
      }

    }


    this.setState({
      status: status
    });
    console.log(this.state);
  }
  componentDidMount = () => {

    let email = localStorage.email
    if (email != undefined) {
      this.setState({
        email: JSON.parse(email)
      });
    }

    this.type_data();

  }

  componentDidUpdate = () => {

    this.type_data();

  }
  render() {

    return (
      <div className="blur">


        <form className="projectform" >
          {this.state.values.map((el, i) => (
            <div key={i}>

              <div class="project-box-wrapper">
                <div class="project-box" style={{ backgroundColor: "#fee4cb;" }}>
                  <div class="project-box-content-header">
                    <span class="box-content-subheader">Task: {el.type}&nbsp;&nbsp;&nbsp; </span>

                    <div class="btn_check">
                      {/* <input type="checkbox"  className="check" name="status" value="yes" onClick={e => this.handleChange(i,el, e)} 
                     /> */}
                      <button className="button1" value='yes' onClick={e => this.handleChange(i, el, e)}>{this.state.status[el.tid] == 'yes' || el.status == 'yes' ? 'Mark a undone' : 'Mark as done'}</button>
                      {/* Mark as Done
                       checked={el.status=='yes' ? 'checked':''} */}
                    </div>



                  </div>


                </div>

              </div>

            </div>

          ))}

          <input class="button" type="button" style={{ marginLeft: "300px" }} value="Submit" onClick={this.project} />
          <button className="button" onClick={this.props.closeOverlay}>Close</button>
        </form>

      </div>
    );
  }
}
class Overlay3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overlay: false,
      pid: props.p,
      type: props.type
    }
    this.openOverlay = this.openOverlay.bind(this)
    this.closeOverlay = this.closeOverlay.bind(this)
  }

  openOverlay() {
    // console.log(this.state)
    this.setState({ overlay: true })

  }

  closeOverlay() {
    this.setState({ overlay: false })
  }

  render() {
    return (
      <div>
        <button class="project-btn-more" onClick={this.openOverlay}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" /></svg>
        </button>
        {this.state.overlay &&
          <Portal>
            <OverlayContent3 closeOverlay={this.closeOverlay} pid={this.state.pid} hand={this.props.handle} />
          </Portal>
        }
      </div>
    )
  }
}
class OverlayContent4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: 0,
      email: '',
      notification: []
    };
    this.notification_data = this.notification_data.bind(this);


  }
  notification_data() {

    if (this.state.email) {


      axios({
        method: 'post',
        url: `${API_PATH9}`,
        headers: { 'content-type': 'application/json' },
        data: this.state

      })
        .then(result => {


          if (this.state.update == 0) {
            this.setState({
              notification: result.data,
              update: 1
            })
          }
          console.log(this.state);

          // if (result.data[0].Message == 'Data inserted') {
          //   // alert(result.data[0].Message);


          // }

        })
        .catch(error => this.setState({}));


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

  componentDidUpdate = () => {
    this.notification_data();

  }
  render() {

    return (
      <div className="blur" class="notifications" id="box">
        {this.state.notification.map((el, i) => (


          <div key={i}>
            <h2>Notifications</h2>
            <div class="notifications-item">
              <div class="text">
                <h4>Project Name: {el.name}</h4>
                <h4>Task: {el.task}</h4>
                <p>Days left:{el.days}</p>
              </div>
            </div>

          </div>


        ))}

        <button className="button" onClick={this.props.closeOverlay}>Close</button>
      </div>
    );
  }
}
class Overlay4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overlay: false,
      pid: props.p,
      type: props.type
    }
    this.openOverlay = this.openOverlay.bind(this)
    this.closeOverlay = this.closeOverlay.bind(this)
  }

  openOverlay() {
    // console.log(this.state)
    this.setState({ overlay: true })

  }

  closeOverlay() {
    this.setState({ overlay: false })
  }

  render() {
    return (
      <div>
        <button class="notification-btn" onClick={this.openOverlay} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
        </button>
        {this.state.overlay &&
          <Portal>
            <OverlayContent4 closeOverlay={this.closeOverlay} pid={this.state.pid} />
          </Portal>
        }
      </div>
    )
  }
}