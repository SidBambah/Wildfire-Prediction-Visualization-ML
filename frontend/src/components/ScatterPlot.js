import React from 'react';
import {Scatter} from 'react-chartjs-2';


class ScatterPlot extends React.Component {
  state = {
    data: {
      labels: ['Scatter'],
      datasets: [
        {
          label: this.props.name,
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          data: [
            { x: 65, y: 75 },
            { x: 59, y: 49 },
            { x: 80, y: 90 },
            { x: 81, y: 29 },
            { x: 56, y: 36 },
            { x: 55, y: 25 },
            { x: 40, y: 18 },
          ]
        }
      ]
    },
    options: {
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
              Scatter Plot</div>
          <div className="card-body mx-auto">
            <Scatter data={this.state.data} options={this.state.options} width={500} height={500}/>
          </div>
          <div className="card-footer small text-muted text-right">Updated {dateTime}</div>
      </div>
      )
  }
}

export default ScatterPlot;
