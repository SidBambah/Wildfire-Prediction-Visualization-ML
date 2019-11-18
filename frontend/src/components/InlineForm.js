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
      console.log("render called");
      return (
        <div style={{'paddingTop': '25px', 'paddingBottom': '25px'}}>
        <form>
          <div className="form-row">
            <div className="col">
              <input type="text" className="form-control" placeholder= "Parameter 1" name="param1" onChange = {this.changeHandler} />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder= "Parameter 2" name="param2" onChange = {this.changeHandler} />
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
