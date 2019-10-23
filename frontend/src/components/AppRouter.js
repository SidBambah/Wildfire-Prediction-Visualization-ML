import React from 'react';
import Visualization from './Visualization'
import Prediction from './Prediction'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class AppRouter extends React.Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Visualization />
                    </Route>
                    <Route path="/prediction">
                        <Prediction />
                    </Route>
                    </Switch>
            </Router>
        )
    }
}

export default AppRouter;