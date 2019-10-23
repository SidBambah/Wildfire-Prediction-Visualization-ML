import React from 'react';

class InlineForm extends React.Component {
    render(){
        return (
          <form>
            <div className="form-row">
              <div className="col">
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last name" />
              </div>
            </div>
          </form>
        );
    }
}

export default InlineForm;
