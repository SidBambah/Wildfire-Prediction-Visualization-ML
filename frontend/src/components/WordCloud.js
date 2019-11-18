import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import APIConnection from './APIConnection.js';
import axios from 'axios';

const options = {
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'impact',
    fontSizes: [5, 60],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 5,
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000
  };

class WordCloud extends React.Component {
    // Define the initial state:
    state = {
        data: []
    };

    componentDidMount(){
        //Axios Get Request
        axios.get(APIConnection["endpoint"] + '/visualization/wordcloud?parameter=' + this.props.parameter)
            .then((response) => {
                this.setState({data: response.data});
        });
    }

    render() {
        var updateTime = new Date();
        var date = updateTime.getFullYear()+'-'+(updateTime.getMonth()+1)+'-'+updateTime.getDate();
        var time = updateTime.getHours() + ":" + updateTime.getMinutes() + ":" + updateTime.getSeconds();
        var dateTime = date+' '+time;
        return (
        <div className="card mb-3">
            <div className="card-header">
                <i className="fas fa-chart-area"></i>
                &nbsp; Word Cloud</div>
            <div className="card-body mx-auto">
            <div style={{height: "500px", width: "500px"}}>
                <ReactWordcloud options={options} words={this.state.data}/>
            </div>
            </div>
            <div className="card-footer small text-muted text-right">Updated {dateTime}</div>
        </div>
        )
    }
}
export default WordCloud