import React from 'react';
import PredictionTable from './PredictionTable';
import InlineForm from './InlineForm';
class Prediction extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-8">Machine Learning</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>   
                <InlineForm />         
                <PredictionTable />
            </div>
        );
    }
}

export default Prediction;