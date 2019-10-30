import React from 'react';
import InlineForm from './InlineForm';

class DynamicGenerator extends React.Component {

    render(){
        return (
            <div>
            <InlineForm parameter1="Parameter 1" parameter2="Parameter 2" parameter3="Parameter3" />
            <p className="text-center">Dynamically Generate Stuff Here </p>
            </div>
        );
    }
}

export default DynamicGenerator;
