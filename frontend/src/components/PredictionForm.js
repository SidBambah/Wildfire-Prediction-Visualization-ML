import React from 'react';

class PredictionForm extends React.Component {
  state={
    location: ''
  }
  changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state;
    data.location = document.getElementById('autocomplete').value
    this.props.handleSubmit(data);
  }

  componentDidMount = () => {

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
    );
  }

  render(){
      return (
        <div style={{'paddingTop': '25px', 'paddingBottom': '25px'}}>
        <form>
          <div className="form-row">
            <div className="col">
              <input type="text" className="form-control" placeholder= "Location" name="location" id="autocomplete" onChange = {this.changeHandler} />
            </div>
            <datalist id="months">
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </datalist>
            <div className="col">
              <input list="months" type="text" className="form-control" placeholder= "Month" name="month" onChange = {this.changeHandler} />
            </div>
            <datalist id="dayofweek">
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="7">Sunday</option>
            </datalist>
            <div className="col">
              <input list="dayofweek" type="text" className="form-control" placeholder= "Day of Week" name="dayofweek" onChange = {this.changeHandler} />
            </div>
            <div className="col">
              <input type="button" className="btn btn-primary" value="Make Prediction" onClick={this.handleSubmit}/>
            </div>
          </div>
        </form>
        </div>
      );
  }
}

export default PredictionForm;
