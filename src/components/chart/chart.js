import * as React from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
import './chart.css'
const API_PATH = 'http://localhost/paradox/timedata.php';
const API_PATH2 = 'http://localhost/paradox/typedata.php';
const API_PATH3 = 'http://localhost/paradox/bargraph.php';
const API_PATH4 = 'http://localhost/paradox/historydata.php';
const API_PATH5 = 'http://localhost/paradox/completedata.php';

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: [],
            type: [],
            timeper: [],
            taskper: [],
            histime:[],
            histask:[],
            completed:[],
            project:[],
            email: '',
            history:'',
            update: 0,
            update1: 0,
            update2: 0,
            update3:0,
            update4:0
        };
        this.addtime = this.addtime.bind(this);
        this.addtask = this.addtask.bind(this);
        this.addbar = this.addbar.bind(this);
        this.history = this.history.bind(this);
        this.complete = this.complete.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handler = this.handler.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      handler() {
        this.setState({
          update3: 0
        })
      }
      history() {
        console.log(this.state);
        if (this.state.email) {

            axios({
                method: 'post',
                url: `${API_PATH4}`,
                headers: { 'content-type': 'application/json' },
                data: this.state

            })
                .then(result => {
                    console.log(this.state);
                    var time = [];
                    var task = [];
                    console.log(result.data)
                    for (let i = 0; i < result.data.length; i++) {
                        time.push(result.data[i].time);
                        task.push(result.data[i].task);
                    }
                    
                    if (this.state.update3 == 0) {
                        this.setState({
                            histime: time,
                            histask: task,
                            update3: 1
                        })
                    }
                    console.log(this.state);
                })
                .catch(error => this.setState());
        }

    }
    complete() {
        console.log(this.state);
        if (this.state.email) {

            axios({
                method: 'post',
                url: `${API_PATH5}`,
                headers: { 'content-type': 'application/json' },
                data: this.state

            })
                .then(result => {
                    console.log(this.state);
                    var complete = [];
                    var task = [];
                    console.log(result.data)
                    for (let i = 0; i < result.data.length; i++) {
                        complete.push(result.data[i].complete);
                        task.push(result.data[i].task);
                    }
                    
                    if (this.state.update4 == 0) {
                        this.setState({
                            completed: complete,
                            project: task,
                            update4: 1
                        })
                    }
                    console.log(this.state);
                })
                .catch(error => this.setState());
        }

    }
    addtime() {
        console.log(this.state);
        if (this.state.email) {

            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: this.state

            })
                .then(result => {
                    console.log(this.state);
                    // alert('prev'+this.state.date.length);
                    // alert('new'+result.data.length);
                    // date=result.data;
                    if (this.state.update == 0) {
                        this.setState({
                            time: result.data,

                            update: 1
                        })
                    }
                })
                .catch(error => this.setState());
        }

    }
    addtask() {
        console.log(this.state);
        if (this.state.email) {
            axios({
                method: 'post',
                url: `${API_PATH2}`,
                headers: { 'content-type': 'application/json' },
                data: this.state
            })
                .then(result => {
                    if (this.state.update1 == 0) {
                        this.setState({
                            type: result.data,

                            update1: 1
                        })
                    }
                })
                .catch(error => this.setState());


        }

    }
    addbar() {
        console.log(this.state);

        if (this.state.email) {

            axios({
                method: 'post',
                url: `${API_PATH3}`,
                headers: { 'content-type': 'application/json' },
                data: this.state

            })
                .then(result => {
                    console.log(this.state);
                    var time = [];
                    var task = [];
                    for (let i = 0; i < result.data.length; i++) {
                        time.push(result.data[i].time);
                        task.push(result.data[i].task);
                    }
                    console.log(time);
                    if (this.state.update2 == 0) {
                        this.setState({
                            timeper: time,
                            taskper: task,
                            histime:time,
                            histask:task,

                            update2: 1
                        })
                    }
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
        this.addtime();
        this.addtask();
        this.addbar();
        this.complete();


    }
    componentDidUpdate() {
        this.addtime();
        this.addtask();
        this.addbar();
        this.complete();
    }
    render() {
        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Time analysis',
                },
            },
        };
        const labels = this.state.taskper;

        const data2 = {
            labels,
            datasets: [
                {
                    label: 'Time Spent',
                    data: this.state.timeper,
                    backgroundColor: 'rgba(255, 191, 0, 0.7)',
                }
            ],
        };
        const data = {
            labels: this.state.type,
            datasets: [
                {
                    label: '# of Votes',
                    data: this.state.time,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(64, 224, 208, 0.7)',
                        'rgba(204, 204, 255, 0.7)',
                        'rgba(223, 255, 0, 0.7)',
                        'rgba(222, 49, 99, 0.7)',
                        'rgba(100, 149, 237, 0.7)',
                        'rgba(255, 191, 0, 0.7)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(64, 224, 208, 1)',
                        'rgba(204, 204, 255, 1)',
                        'rgba(223, 255, 0,1)',
                        'rgba(222, 49, 99, 1)',
                        'rgba(100, 149, 237, 1)',
                        'rgba(255, 191, 0,1)',
                    ],
                    borderWidth: 1,
                },
            ],
        };
        const options2 = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'area graph',
                },
            },
        };

        const data3 = {
            labels:this.state.histask,
            datasets: [
                {
                    fill: true,
                    label: 'Time Graph',
                    data: this.state.histime,
                    borderColor: 'rgba(255, 191, 0)',
                    backgroundColor: 'RGB(188, 36, 60)',
                },
            ],
        };
        const data4 = {
            labels: this.state.project,
            datasets: [
                {
                    label: '%projects completed',
                    data: this.state.completed,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 3,
                },
            ],
        };
        // const options4={scales: {
        //     r: {
        //       max: 100,
        //       min: 30,
        //       ticks: {
        //         stepSize: 15,
        //         backdropColor: "orange",
        //         color: "white"
        //       },
        //       grid: {
        //         color: "black"
        //       },
        //       angleLines: {
        //         color: "gray"
        //       },
        //       pointLabels: {
        //         font: {
        //           size: 20
        //         }
        //       }
        //     }}
        //   }
        return (
            <div className='chart'>
<div class="app-sidebar side">
            <a href="/dashboard" class="app-sidebar-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" /></svg>
            </a>
            <a href="/chart" class="app-sidebar-link active">
              <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-pie-chart" viewBox="0 0 24 24">
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
                <div className='pie graph-card'>
                    <span class="text">Analysis</span>
                    <Bar options={options} data={data2} width={300} height={200} />
                    <span class="graph-content">Time% spent in activities in various project </span>
                </div>
                <div className='bar graph-card'>
                    <Doughnut data={data} height={200} width={300} />
                    <span class="graph-content">Time % spent on various activities in past 7 days </span>
                </div>

                <div className="areagraph graph-card">
                    <Line options={options2} data={data3} width={300} height={200} />
                    <span class="graph-content">Custom Data Graph (default lifetime)</span>
                    <form >
                        <input
                            type="text"
                            name="history"
                            id="history"
                            class="inputtext"
                            placeholder="Enter days:"
                            onChange={this.onChange}
                        />
                        <button type="button" class='inpbtn' onClick={(event) => {this.handler(); this.history();}}>Submit</button>
                    </form>

                </div>
                <div className="radargraph graph-card">
                    <Radar data={data4} width={300} height={240} />
                    <span class="graph-content">% Work completed in each project</span>

                </div>



            </div>

        );
    }
}
