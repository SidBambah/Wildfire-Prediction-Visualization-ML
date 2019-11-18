import React from 'react';
import InlineForm from './InlineForm';
import WordCloud from './WordCloud.js';
import BarChart from './BarChart.js';
import DonutChart from './DonutChart.js';

class DynamicVisualization extends React.Component {
    state = {
        param1: null,
        param2: null,
        key: 1
    }
    handleSubmit = (value) => {
        this.setState({param1: value.param1});
        this.setState({param2: value.param2});
        let newKey = this.state.key + 1;
        this.setState({key: newKey});
    }

    render(){
        return (
            <div>
            <h2 className='text-center'> Dynamically Generated Visualizations </h2>
            <InlineForm handleSubmit={this.handleSubmit}/>
            <WordCloud key={this.state.key} parameter={this.state.param1}/>
            <DonutChart key={this.state.key + 1}
                            name={this.state.param1}
                            parameter={this.state.param1}
                            limit={10}
                            width={500}
                            height={500}/>
            <BarChart key={this.state.key + 2}
                        name={"Fires by " + this.state.param1} 
                        parameter1={this.state.param1}
                        parameter2={this.state.param2}
                        limit={12}
                        xaxis={this.state.param1}
                        yaxis={'Count'}
                        width={500}
                        height={500}/>
            </div>
        );
    }
}

export default DynamicVisualization;
