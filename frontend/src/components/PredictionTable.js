import React from 'react';

class PredictionTable extends React.Component {
    render(){
        var updateTime = new Date();
        var date = updateTime.getFullYear()+'-'+(updateTime.getMonth()+1)+'-'+updateTime.getDate();
        var time = updateTime.getHours() + ":" + updateTime.getMinutes() + ":" + updateTime.getSeconds();
        var dateTime = date+' '+time;
        return (
            <div className="card mb-3">
            <div className="card-header">
            <table className="table table-striped">
                <thead className="black white-text">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cause</th>
                    <th scope="col">Probability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Natural</td>
                    <td>{this.props.natural + '%'}</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Accidental</td>
                    <td>{this.props.accidental + '%'}</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Malicious</td>
                    <td>{this.props.malicious + '%'}</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Other</td>
                    <td>{this.props.other + '%'}</td>
                    </tr>
                </tbody>
                </table>
                </div>
                <div className="card-footer small text-muted text-right">Updated { dateTime }</div>
                </div>
        );
    }
}

export default PredictionTable;