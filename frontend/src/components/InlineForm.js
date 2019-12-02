import React from 'react';

class InlineForm extends React.Component {

  changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render(){
      return (
        <div style={{'paddingTop': '25px', 'paddingBottom': '25px'}}>
        <form>
          <div className="form-row">
            <datalist id="options">
              <option value="STATE">State</option>
              <option value="STAT_CAUSE_DESCR">Cause</option>
              <option value="FIRE_NAME">Fire Name</option>
              <option value="FIRE_CODE">Fire Code</option>
              <option value="SOURCE_REPORTING_UNIT_NAME">Reporting Unit</option>
              <option value="DISCOVERY_DOY">Day of Year</option>
            </datalist>
            <div className="col">
              <input list="options" type="text" className="form-control" placeholder= "Parameter 1" name="param1" onChange = {this.changeHandler} />
            </div>
            <div className="col">
              <input list="options" type="text" className="form-control" placeholder= "Parameter 2" name="param2" onChange = {this.changeHandler} />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder = "Match Value" name="param3" onChange = {this.changeHandler} />
            </div>
            <div className="col">
              <input type="button" className="btn btn-primary" value="Submit" onClick={this.handleSubmit}/>
            </div>
          </div>
        </form>
        </div>
      );
  }
}

export default InlineForm;
