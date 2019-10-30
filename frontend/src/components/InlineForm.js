import React from 'react';

class InlineForm extends React.Component {
    render(){
        return (
          <form>
            <div className="form-row">
              <div className="col">
                <input type="text" className="form-control" placeholder= {this.props.parameter1} />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder={this.props.parameter2} />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder={this.props.parameter3} />
              </div>
              <div className="col">
                <input type="button" className="btn btn-primary" value="Submit" onClick={console.log("Submit clicked!")}/>
              </div>
            </div>
          </form>
        );
    }
}

export default InlineForm;
