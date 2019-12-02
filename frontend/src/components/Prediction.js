import React from 'react';
import PredictionTable from './PredictionTable';
import PredictionForm from './PredictionForm';
import APIConnection from './APIConnection.js';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';

class Prediction extends React.Component {
    state={
        natural: 0,
        accidental: 0,
        malicious: 0,
        other: 0,
        barData: {
            labels: ["Natural", "Accidental", "Malicious", "Other"],
            datasets: [
                {
                label: "Wildfire Probability",
                backgroundColor: 'rgba(53, 170, 94, 0.6)',
                borderColor: 'rgba(7, 12, 9, 0.6)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(105, 201, 246, 0.3)',
                hoverBorderColor: 'rgba(7, 12, 9, 0.6)',
                data: []
                }
            ]
        }
    }


    barOptions={
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                scaleLabel: {
                display: true,
                labelString: "Probability (%)"
                }
            }],
            xAxes: [{
                scaleLabel: {
                display: true,
                labelString: "Cause"
                }
            }],
        }
    }
    handleSubmit = (data) => {
        let location = data.location;
        let month = data.month;
        let dayofweek = data.dayofweek;
        //Axios Get Request
        axios.get(APIConnection["endpoint"] + '/prediction?location=' + location + 
        '&month=' + month + '&dayofweek=' + dayofweek)
        .then((response) => {        
            
            this.setState({natural: response.data['natural'],
                            accidental: response.data['accidental'],
                            malicious: response.data['malicious'],
                            other: response.data['other']});
            
            const { barData } = { ...this.state }
            const currentState = barData
            currentState.datasets[0].data = [response.data['natural']*100, response.data['accidental']*100,
                                                response.data['malicious']*100,response.data['other']*100]
            this.setState({ barData: currentState })
        }); 
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-8">Machine Learning</h1>
                        <p className="lead">Make predictions on model trained with Random Forest Classifier. The required inputs are
                        Location, Month, and Day of Week.</p>
                    </div>
                </div>
                <h3>Wildfire Predictions</h3>
                <PredictionForm handleSubmit={this.handleSubmit} />         
                <PredictionTable natural={this.state.natural*100}
                                accidental={this.state.accidental*100}
                                malicious={this.state.malicious*100}
                                other={this.state.other*100} />
                <div style={{height: '500px', width: '500px'}} className="mx-auto">
                <Bar
                    data={this.state.barData}
                    options={this.barOptions}
                    height={300}
                    width={400}
                />
                </div>
            </div>
        );
    }
}

export default Prediction;