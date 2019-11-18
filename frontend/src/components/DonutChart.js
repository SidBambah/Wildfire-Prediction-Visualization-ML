import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import APIConnection from './APIConnection.js';
import axios from 'axios';

class DonutChart extends React.Component {

    state = {
        data: [],
        labels: []
    };

    componentDidMount(){
        let limit;
        if(this.props.limit){
            limit = this.props.limit;
        } else{
            limit = false;
        }
        //Axios Get Request
        axios.get(APIConnection["endpoint"] + '/visualization/donutchart?parameter=' + this.props.parameter
                            + '&limit=' + limit)
            .then((response) => {
                this.setState({data: response.data["data"]});
                this.setState({labels: response.data["labels"]});
        });
    }

    render() {
    var updateTime = new Date();
    var date = updateTime.getFullYear()+'-'+(updateTime.getMonth()+1)+'-'+updateTime.getDate();
    var time = updateTime.getHours() + ":" + updateTime.getMinutes() + ":" + updateTime.getSeconds();
    var dateTime = date+' '+time;
    var i;
    var randomColor = [];
    for (i = 0; i < this.state.labels.length; i++) {
        randomColor.push("#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}));
    }   
    const data = {
        labels: this.state.labels,
        datasets: [{
            data: this.state.data,
            backgroundColor: randomColor,
            hoverBackgroundColor: randomColor,
        }]
    };
    return (
        <div className="card mb-3">
        <div className="card-header">
            <i className="fas fa-chart-area"></i>
            &nbsp; Donut Chart</div>
        <div className="card-body mx-auto">
            <Doughnut data={data} width={this.props.width} height={this.props.height}/>
        </div>
        <div className="card-footer small text-muted text-right">Updated { dateTime }</div>
        </div>
    );
    }
}

export default DonutChart