import React from 'react';
import IconCards from './IconCards.js';
import DonutChart from './DonutChart.js';
import MyDataTable from './MyDataTable.js';
import WordCloud from './WordCloud.js';
import BarChart from './BarChart.js';
import ChoroplethMap from './ChoroplethMap.js';
import DynamicVisualization from './DynamicVisualization.js';
import GoogleMapCluster from './GoogleMapCluster.js';

class Visualization extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-8">Exploratory Visualization</h1>
                        <p className="lead">Figures generated to analyze the wildfire dataset. This analysis assists in the
                        development of machine learning models to predict the causes of wildfires.</p>
                    </div>
                </div>
                <IconCards />
                <DonutChart name={"Causes of Fires"}
                            parameter={'STAT_CAUSE_DESCR'}
                            width={500}
                            height={500}/>
                <WordCloud parameter={'STATE'}/>
                <BarChart name={'Top Ten States'} 
                        parameter1={'STATE'}
                        limit={12}
                        xaxis={'States'}
                        yaxis={'Count'}
                        width={500}
                        height={500}/>
                <BarChart name={'Causes of Fires in California'} 
                        parameter1={'STAT_CAUSE_DESCR'}
                        parameter2={'STATE'}
                        matchValue={'CA'}
                        limit={10}
                        xaxis={'Causes'}
                        yaxis={'Counts'}
                        width={500}
                        height={500}/>
                <ChoroplethMap />
                <GoogleMapCluster />
                <DynamicVisualization />
                <MyDataTable />
            </div>
        );
    }
}

export default Visualization;