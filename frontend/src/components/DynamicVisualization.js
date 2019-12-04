import React from 'react';
import InlineForm from './InlineForm';
import WordCloud from './WordCloud.js';
import BarChart from './BarChart.js';
import DonutChart from './DonutChart.js';

class DynamicVisualization extends React.Component {
    state = {
        param1: null,
        param2: null,
        param3: null,
        key: 1
    }
    handleSubmit = (value) => {
        this.setState({param1: value.param1});
        this.setState({param2: value.param2});
        this.setState({param3: value.param3})
        let newKey = this.state.key + 1;
        this.setState({key: newKey});
    }

    render(){
        var readableParam = {'STATE': 'State', 'STAT_CAUSE_DESCR': 'Cause', 'FIRE_NAME': 'Fire Name',
                            'NWCG_REPORTING_UNIT_NAME': 'Reporting Unit',
                            'DAY_OF_WEEK': 'Day of Week', 'FIRE_SIZE': 'Fire Size'  };
        return (
            <div>
            <h2 className='text-center'> Dynamically Generated Visualizations </h2>
            <InlineForm handleSubmit={this.handleSubmit}/>
            {(this.state.param1 !== null && this.state.param1 !== undefined)?
                <div>
                <BarChart key={this.state.key}
                            name={"Fires by " + readableParam[this.state.param1]} 
                            parameter1={this.state.param1}
                            limit={12}
                            xaxis={readableParam[this.state.param1]}
                            yaxis={'Count'}
                            width={500}
                            height={500}/>
                <WordCloud key={this.state.key + 1} parameter={this.state.param1}/>
                <DonutChart key={this.state.key + 2}
                                name={readableParam[this.state.param1]}
                                parameter={this.state.param1}
                                limit={10}
                                width={500}
                                height={500}/>
                </div>
                : 
                false
            }
            {(this.state.param2 !== null && this.state.param2 !== undefined && this.state.param3 !== null && this.state.param3 !== undefined)?
                <BarChart key={this.state.key + 3}
                name={"Fires by " + readableParam[this.state.param1] + " where " + readableParam[this.state.param2] +
                " is " + this.state.param3} 
                parameter1={this.state.param1}
                parameter2={this.state.param2}
                matchValue={this.state.param3}
                limit={12}
                xaxis={readableParam[this.state.param1]}
                yaxis={'Count'}
                width={500}
                height={500}/>
                :
                false
            }
            </div>
        );
    }
}

export default DynamicVisualization;
