import React from 'react';

class SideBar extends React.Component {
    state = {
        mainPage: true
    };
    render(){
        return (
            <ul className="sidebar navbar-nav">
                <li className={this.state.mainPage ? "nav-item active":"nav-item"}>
                    <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Visualization</span>
                    </a>
                </li>
                <li className={this.state.mainPage ? "nav-item":"nav-item active"}>
                    <a className="nav-link" href="/prediction">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Prediction</span></a>
                </li>
            </ul>
        );
    }
}

export default SideBar;
