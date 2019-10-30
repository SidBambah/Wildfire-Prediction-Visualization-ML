import React from 'react';
import IconCards from './IconCards.js';
import DonutChart from './DonutChart.js';
import DataTable from './DataTable.js';
import WordCloud from './WordCloud.js';
import ScatterPlot from './ScatterPlot.js';
import BarChart from './BarChart.js';
import ChoroplethMap from './ChoroplethMap.js';
import DynamicGenerator from './DynamicGenerator.js';

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
                <DonutChart name={"Causes of Fires"}
                            parameter={'STAT_CAUSE_DESCR'}
                            width={500}
                            height={500}/>
                <WordCloud parameter={'STATE'}/>
                {/*
                <ScatterPlot name={'Fire Locations'} 
                            parameter1={'LONGITUDE'}
                            parameter2={'LATITUDE'}
                            width={500}
                            height={500}/>
                */}
                <BarChart name={'Top Ten States'} 
                        parameter1={'STATE'}
                        limit={12}
                        xaxis={'X-axis Label'}
                        yaxis={'Y-axis Label'}
                        width={500}
                        height={500}/>
                <BarChart name={'Causes of Fires in California'} 
                        parameter1={'STAT_CAUSE_DESCR'}
                        parameter2={'STATE'}
                        matchValue={'CA'}
                        limit={10}
                        xaxis={'X-axis Label'}
                        yaxis={'Y-axis Label'}
                        width={500}
                        height={500}/>
                <ChoroplethMap />
                <DynamicGenerator />
                <DataTable />
            </div>
        );
    }
}

export default Visualization;