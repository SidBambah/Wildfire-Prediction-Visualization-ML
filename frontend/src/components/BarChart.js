import React from 'react';
import {Bar} from 'react-chartjs-2';
import APIConnection from './APIConnection.js';
import axios from 'axios';

class BarChart extends React.Component {
    state = {
        data: {
            labels: [],
            datasets: [
              {
                label: this.props.name,
                backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
                borderColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
                borderWidth: 1,
                hoverBackgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
                hoverBorderColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
                data: []
              }
            ]
          }
    }

    componentDidMount(){
        //Check if limit is given
        let limit
        let parameter2
        let matchValue
        if(this.props.limit){
            limit = this.props.limit
        } else{
            limit = 10
        }
        if(this.props.parameter2){
            parameter2 = this.props.parameter2
            matchValue = this.props.matchValue
        } else{
            parameter2 = false
            matchValue = null
        }
        //Axios Get Request
        axios.get(APIConnection["endpoint"] + '/visualization/barchart?parameter1=' + this.props.parameter1
                    + '&limit=' + limit + '&parameter2=' + parameter2 + '&matchValue=' + matchValue)
            .then((response) => {
                this.setState({
                    data: {
                        ...this.state.data,
                        labels: response.data["labels"],
                    },
                });
                const { data } = { ...this.state }
                const currentState = data
                currentState.datasets[0].data = response.data["data"]
                this.setState({ data: currentState })
        });
    }

    options = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                scaleLabel: {
                display: true,
                labelString: this.props.yaxis
                }
            }],
            xAxes: [{
                scaleLabel: {
                display: true,
                labelString: this.props.xaxis
                }
            }],
        }
    }
    
    
    render(){
        var updateTime = new Date();
        var date = updateTime.getFullYear()+'-'+(updateTime.getMonth()+1)+'-'+updateTime.getDate();
        var time = updateTime.getHours() + ":" + updateTime.getMinutes() + ":" + updateTime.getSeconds();
        var dateTime = date+' '+time;
        return (
        <div className="card mb-3">
            <div className="card-header">
                <i className="fas fa-chart-area"></i>
                &nbsp; Bar Chart</div>
            <div className="card-body mx-auto">
            <Bar
                data={this.state.data}
                width={this.props.width}
                height={this.props.height}
                options={this.options}
            />
            </div>
            <div className="card-footer small text-muted text-right">Updated {dateTime}</div>
        </div>
        )
    }
}

export default BarChart;
