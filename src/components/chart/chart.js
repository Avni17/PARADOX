import * as React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title,
    BarSeries,
    ArgumentAxis,
    Legend,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import './chart.css'
const API_PATH = 'http://localhost/paradox/timedata.php';
const data = [
    { country: 'Russia', area: 12 },
    { country: 'Canada', area: 7 },
    { country: 'USA', area: 7 },
    { country: 'China', area: 7 },
    { country: 'Brazil', area: 6 },
    { country: 'Australia', area: 5 },
    { country: 'India', area: 2 },
    { country: 'Others', area: 55 },
];
const data1 = [
    { year: '1950', population: 2.525 },
    { year: '1960', population: 3.018 },
    { year: '1970', population: 3.682 },
    { year: '1980', population: 4.440 },
    { year: '1990', population: 5.310 },
    { year: '2000', population: 6.127 },
    { year: '2010', population: 6.930 },
];
export default class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data,
            data1,
            email:'',
            update:0
        };
        this.addtime= this.addtime.bind(this);
    }
    addtime()
    {
      console.log(this.state.data);
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
                data: result.data,
                data1: result.data,
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
    componentDidMount = () => {
  
      let email = localStorage.email
      if (email != undefined) {
        this.setState({
          email: JSON.parse(email)
        });
      }
      this.addtime();
      
  
    }
    componentDidUpdate() {
        // console.log(this.state);
      this.addtime();
    //   console.log(this.state);
    }
    render() {
        // const { data: chartData, data1: chartData2 } = this.state;

        return (
            <div>
                <div className='pie'>
                    <Paper style={{height:"100vh"}}>
                        <Chart
                            data={this.state.data}
                        >
                            <PieSeries
                                valueField="time"
                                argumentField="task"
                            />
                            <Title
                                text="Time devoted in various activities in last week"
                            />
                            <Animation />
                            <Legend/>
                        </Chart>
                    </Paper>
                </div>
                <div className='bar'>
                    <Paper style={{height:"100vh"}}>
                        <Chart
                            data={this.state.data1}
                        >
                            <ArgumentAxis />
                            <ValueAxis max={7} />

                            <BarSeries
                                valueField="time"
                                argumentField="task"
                            />
                            <Title text="Bar graph represntation" />
                            <Animation />
                            
                        </Chart>
                    </Paper>

                </div>

            </div>

        );
    }
}
