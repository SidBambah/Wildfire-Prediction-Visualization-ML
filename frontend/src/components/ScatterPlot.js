import React from 'react';
import APIConnection from './APIConnection.js';
import axios from 'axios';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ScatterPlot extends React.Component {
  
  options= {
    theme: "dark2",
    animationEnabled: true,
    zoomEnabled: true,
    title:{
      text: this.props.parameter1 + " vs " + this.props.parameter2
    },
    axisX: {
      title: this.props.parameter1,
      scaleBreaks: {
        autocalculate: true
      },
      minimum: -200,
      maximum: -60,
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
    axisY:{
      title: this.props.parameter2,
      scaleBreaks: {
        autocalculate: true
      },
      minimum: 20,
      maximum: 65,
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
    data: [{
      type: "scatter",
      markerSize: 3,
      toolTipContent: "<b>" + this.props.parameter1 + ": </b>{x}<br/><b>" + this.props.parameter2 + ": </b>{y}",
      dataPoints: []
    }]
  }
  

  componentDidMount(){
    //Axios Get Request
    axios.get(APIConnection["endpoint"] + '/visualization/scatterplot?parameter1=' + this.props.parameter1
              + '&parameter2=' + this.props.parameter2)
        .then((response) => {
            this.options.data[0].dataPoints = response.data//[{x: 5, y: 5}, {x: 10, y: 11}]
            this.chart.render()
            console.log("Rendered")
    });
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
            <div style={{height:this.props.height, width:this.props.width}}>
              <CanvasJSChart options = {this.options}
                            onRef={ref => this.chart = ref} />
            </div>
          </div>
          <div className="card-footer small text-muted text-right">Updated {dateTime}</div>
      </div>
      )
  }
}

export default ScatterPlot;
