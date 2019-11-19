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
            <div className="col">
              <input type="text" className="form-control" placeholder= "Month" name="month" onChange = {this.changeHandler} />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder= "Day of Week" name="dayofweek" onChange = {this.changeHandler} />
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
