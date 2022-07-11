import * as React from 'react';
import axios from 'axios';
// import Paper from '@material-ui/core/Paper';
// import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
import faker from 'faker';
import './chart.css'
// ChartJS.register(ArcElement, Tooltip, Legend);
// import {
//     Chart,
//     PieSeries,
//     Title,
//     BarSeries,
//     ArgumentAxis,
//     Legend,
//     ValueAxis,
//     HoverState
// } from '@devexpress/dx-react-chart-material-ui';
// import { Animation } from '@devexpress/dx-react-chart';

const API_PATH = 'http://localhost/paradox/timedata.php';
const API_PATH2 = 'http://localhost/paradox/typedata.php';
const API_PATH3 = 'http://localhost/paradox/bargraph.php';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: [],
            type: [],
            timeper: [],
            taskper: [],
            email: '',
            update: 0,
            update1: 0,
            update2: 0
        };
        this.addtime = this.addtime.bind(this);
        this.addtask = this.addtask.bind(this);
        this.addbar = this.addbar.bind(this);
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
                    // this.setState({
                    //   data: result.data,

                    // })



                    // console.log(this.state);
                    // alert(result.data[2].endtime)

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
                    console.log(this.state);
                    // alert(result.data);
                    // alert('new'+result.data.length);
                    // date=result.data;

                    if (this.state.update1 == 0) {
                        this.setState({
                            type: result.data,

                            update1: 1
                        })
                    }
                    // this.setState({
                    //   data: result.data,

                    // })



                    // console.log(this.state);
                    // alert(result.data[2].endtime)

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
                    // alert(result.data);
                    // alert('new'+result.data.length);
                    // date=result.data;
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

                            update2: 1
                        })
                    }

                    // this.setState({
                    //   data: result.data,

                    // })



                    // console.log(this.state);
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
        this.addtime();
        this.addtask();
        this.addbar();


    }
    componentDidUpdate() {
        // console.log(this.state);
        this.addtime();
        this.addtask();
        this.addbar();
        //   console.log(this.state);
    }
    render() {
        // const { data1: chartData2 } = this.state;
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
            labels,
            datasets: [
                {
                    fill: true,
                    label: 'Time Graph',
                    data: this.state.timeper,
                    borderColor: 'rgba(255, 191, 0)',
                    backgroundColor: 'RGB(188, 36, 60)',
                },
            ],
        };
        const data4 = {
            labels: this.state.taskper,
            datasets: [
                {
                    label: 'Time spent past 7 days',
                    data: this.state.timeper,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
            ],
        };
        return (
            <div className='chart'>

                <div className='pie'>
                    <span class="text">Analysis</span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* <Paper style={{ height: "100vh" }}> */}

                    {/* <Chart
                            data={this.state.data}
                        >
                            <PieSeries
                                valueField="time"
                                argumentField="task"
                                innerRadius={0.6}
                            />
                            <Title
                                text="Time devoted in various activities in last week"
                            />
                            <Animation />
                            
                            <Legend/>
                        </Chart> */}
                    {/* <Pie
                            options={{
                                width: "400",
                                height: "400"
                            }}
                            data={{
                                labels: labels,
                                datasets: datasets
                            }}
                        /> */}

                    <Bar options={options} data={data2} />

                    <p class="line-1 anim-typewriter">Time% spent in activities in various project </p>

                    {/* </Paper> */}

                </div>
                <div className='bar'>
                    {/* <Paper style={{ height: "100vh" }}> */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* <Chart
                            data={this.state.data}
                        >
                            <ArgumentAxis />
                            <ValueAxis max={70} />

                            <BarSeries
                                valueField="time"
                                argumentField="task"
                            />
                            
                            <Animation />
                            
                        </Chart> */}
                    <Doughnut data={data} />
                    <p class="line-2 anim-typewriter">Time % spent on various activities in past 7 days </p>

                    {/* <Bar
                            data={{
                                labels: labels,
                                datasets: datasets,
                                label: "something"
                            }}
                        /> */}
                    {/* </Paper> */}

                </div>

                <div className="areagraph">
                    <Line options={options2} data={data3} />

                </div>
                <div className="radargraph">
                    <Radar data={data4} />

                </div>



            </div>

        );
    }
}
