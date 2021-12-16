import * as React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { Pie, Bar } from "react-chartjs-2";
import {
    Chart,
    PieSeries,
    Title,
    BarSeries,
    ArgumentAxis,
    Legend,
    ValueAxis,
    HoverState
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import './chart.css'
const API_PATH = 'http://localhost/paradox/timedata.php';
const API_PATH2 = 'http://localhost/paradox/typedata.php';
const API_PATH3 = 'http://localhost/paradox/bargraph.php';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time:[],
            type:[],
            data:[],
            email: '',
            update: 0,
            update1:0,
            update2:0
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

                    if (this.state.update2 == 0) {
                        this.setState({
                            data: result.data,
                            
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
        let labels = this.state.type
        let datasets = [
            {
                data: this.state.time,
                backgroundColor: ["#CC2200", " #FF8D00", "#FFE24F", "#A7E739", "#ffa600"]
            }
        ]
        return (
            <div className='chart'>
                
                <div className='pie'>
                <span class="text">Analysis</span>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
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
                        <Pie
                            options={{
                                width: "400",
                                height: "400"
                            }}
                            data={{
                                labels: labels,
                                datasets: datasets
                            }}
                        />
                         <p class="line-1 anim-typewriter">Time % spent on various activities in past 7 days </p>
                    {/* </Paper> */}

                </div>
                <div className='bar'>
                    {/* <Paper style={{ height: "100vh" }}> */}
                    <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
                        <Chart
                            data={this.state.data}
                        >
                            <ArgumentAxis />
                            <ValueAxis max={70} />

                            <BarSeries
                                valueField="time"
                                argumentField="task"
                            />
                            
                            <Animation />
                            
                        </Chart>
                        <p class="line-2 anim-typewriter">Time% spent in activities in various project </p>
                        {/* <Bar
                            data={{
                                labels: labels,
                                datasets: datasets,
                                label: "something"
                            }}
                        /> */}
                    {/* </Paper> */}

                </div>

            </div>

        );
    }
}
