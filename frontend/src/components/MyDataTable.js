import React from 'react';
import APIConnection from './APIConnection.js';
import axios from 'axios';
import DataTable from 'react-data-table-component';

class MyDataTable extends React.Component {
    state = {
        data: [],
        columns: [
            {
                name: 'State',
                selector: 'STATE'
            },
            {
                name: 'Cause',
                selector: 'STAT_CAUSE_DESCR'
            },
            {
                name: 'Reporting Unit',
                selector: 'NWCG_REPORTING_UNIT_NAME'
            },
            {
                name: 'Fire Name',
                selector: 'FIRE_NAME'
            },
            {
                name: 'Month',
                selector: 'MONTH'
            },
            {
                name: 'Day of Week',
                selector: 'DAY_OF_WEEK'
            }
        ]
    };

    componentDidMount(){
        //Axios Get Request
        axios.get(APIConnection["endpoint"] + '/visualization/datatable')
        .then((response) => {
            this.setState({data: response.data});
        });
    }

    render(){
        var updateTime = new Date();
        var date = updateTime.getFullYear()+'-'+(updateTime.getMonth()+1)+'-'+updateTime.getDate();
        var time = updateTime.getHours() + ":" + updateTime.getMinutes() + ":" + updateTime.getSeconds();
        var dateTime = date+' '+time;
        return (
            <div className="card mb-3">
                <div className="card-header">
                    <i className="fas fa-table"></i>
                    &nbsp; Data Table</div>
                <div className="card-body">
                {(this.state.data.length !== 0)?
                    <DataTable
                        pagination
                        title="Random Subset of Wildfires"
                        columns={this.state.columns}
                        data={this.state.data}
                    />
                    :
                    false
                }
                </div>
                <div className="card-footer small text-muted text-right">Updated { dateTime }</div>
            </div>
        );
    }
}

export default MyDataTable;
