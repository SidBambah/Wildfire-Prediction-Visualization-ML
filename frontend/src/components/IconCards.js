import React from 'react';

class IconCards extends React.Component {
    render(){
        return (
            <div className="row">
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fas fa-fw fa-comments"></i>
                    </div>
                    <div className="mr-5">26 New Messages!</div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fas fa-fw fa-list"></i>
                    </div>
                    <div className="mr-5">11 New Tasks!</div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fas fa-fw fa-shopping-cart"></i>
                    </div>
                    <div className="mr-5">123 New Orders!</div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fas fa-fw fa-life-ring"></i>
                    </div>
                    <div className="mr-5">13 New Tickets!</div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default IconCards;
