import React from 'react';
import PredictionTable from './PredictionTable';
import PredictionForm from './PredictionForm';
import APIConnection from './APIConnection.js';
import axios from 'axios';
class Prediction extends React.Component {
    state={
        ca: {
            natural: 0,
            accidental: 0,
            malicious: 0,
            other: 0
        },
        tx: {
            natural: 0,
            accidental: 0,
            malicious: 0,
            other: 0
        },
        ny: {
            natural: 0,
            accidental: 0,
            malicious: 0,
            other: 0
        }
    }
    handleCASubmit = (data) => {
        let latitude = data.latitude;
        let longitude = data.longitude;
        let month = data.month;
        let dayofweek = data.dayofweek;
        //Axios Get Request
        axios.get(APIConnection["endpoint"] + '/prediction/ca?latitude=' + latitude
        + '&longitude=' + longitude + '&month=' + month + '&dayofweek=' + dayofweek)
        .then((response) => {        
            let ca = {...this.state.ca};
            ca = response.data;
            this.setState({ca});
        }); 
    }
    handleTXSubmit = (data) => {
        let latitude = data.latitude;
        let longitude = data.longitude;
        let month = data.month;
        let dayofweek = data.dayofweek;
        //Axios Get Request
        axios.get(APIConnection["endpoint"] + '/prediction/ca?latitude=' + latitude
        + '&longitude=' + longitude + '&month=' + month + '&dayofweek=' + dayofweek)
        .then((response) => {        
            let tx = {...this.state.tx};
            tx = response.data;
            this.setState({tx});
        });
    }
    handleNYSubmit = (data) => {
        let latitude = data.latitude;
        let longitude = data.longitude;
        let month = data.month;
        let dayofweek = data.dayofweek;
        //Axios Get Request
        axios.get(APIConnection["endpoint"] + '/prediction/ny?latitude=' + latitude
        + '&longitude=' + longitude + '&month=' + month + '&dayofweek=' + dayofweek)
        .then((response) => {        
            let ny = {...this.state.ny};
            ny = response.data;
            this.setState({ny});
        });
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-8">Machine Learning</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <h3>CA Predictions</h3>
                <PredictionForm handleSubmit={this.handleCASubmit} />         
                <PredictionTable natural={this.state.ca.natural}
                                accidental={this.state.ca.accidental}
                                malicious={this.state.ca.malicious}
                                other={this.state.ca.other} />
                <h3>TX Predictions</h3>
                <PredictionForm handleSubmit={this.handleTXSubmit} />         
                <PredictionTable natural={this.state.tx.natural}
                                accidental={this.state.tx.accidental}
                                malicious={this.state.tx.malicious}
                                other={this.state.tx.other}/>
                <h3>NY Predictions</h3>
                <PredictionForm handleSubmit={this.handleNYSubmit}/>         
                <PredictionTable natural={this.state.ny.natural}
                                accidental={this.state.ny.accidental}
                                malicious={this.state.ny.malicious}
                                other={this.state.ny.other}/>
            </div>
        );
    }
}

export default Prediction;