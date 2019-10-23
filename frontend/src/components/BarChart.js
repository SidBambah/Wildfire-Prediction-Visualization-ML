import React from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends React.Component {
    state = {
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: this.props.name,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 54]
              }
            ]
          },
        options: {
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
                Bar Chart</div>
            <div className="card-body mx-auto">
            <Bar
                data={this.state.data}
                width={500}
                height={500}
                options={this.state.options}
            />
            </div>
            <div className="card-footer small text-muted text-right">Updated {dateTime}</div>
        </div>
        )
    }
}

export default BarChart;
