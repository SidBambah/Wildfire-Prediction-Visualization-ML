import React from 'react';

class IconCards extends React.Component {
    render(){
        return (
            <div className="row">
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fas fa-fw fa-table"></i>
                    </div>
                    <div className="mr-5">1.88 Million Wildfires</div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-secondary o-hidden h-100">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fas fa-fw fa-fire"></i>
                    </div>
                    <div className="mr-5">13 Different Causes</div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                <a href="https://github.com/SidBambah/Wildfire-Prediction-Visualization-ML" target="_blank" rel="noopener noreferrer">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fab fa-fw fa-github"></i>
                    </div>
                    <div className="mr-5"><font color="white">GitHub Repository</font></div>
                </div>
                </a>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                <a href="https://www.kaggle.com/rtatman/188-million-us-wildfires" target="_blank" rel="noopener noreferrer">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fab fa-fw fa-kaggle"></i>
                    </div>
                    <div className="mr-5"><font color="white">Kaggle Dataset</font></div>
                </div>
                </a>
                </div>
            </div>
            </div>
        );
    }
}

export default IconCards;
