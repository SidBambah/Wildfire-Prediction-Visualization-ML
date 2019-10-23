import React from 'react';
import IconCards from './IconCards.js';
import DonutChart from './DonutChart.js';
import DataTable from './DataTable.js';
import WordCloud from './WordCloud.js';
import ScatterPlot from './ScatterPlot.js';
import BarChart from './BarChart.js';

class Visualization extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-8">Exploratory Visualization</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <IconCards />
                <DonutChart name={"Causes of Fires"}/>
                <WordCloud />
                <ScatterPlot name={'Fire Locations'} xaxis={'Latitude'} yaxis={'Longitude'}/>
                <BarChart name={'Chart Title'} xaxis={'X-axis Label'} yaxis={'Y-axis Label'}/>
                <DataTable />
            </div>
        );
    }
}

export default Visualization;