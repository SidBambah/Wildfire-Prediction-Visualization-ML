import React from 'react';
import InlineForm from './InlineForm';

class DynamicGenerator extends React.Component {

    render(){
        return (
            <div>
            <h2 className='text-center'> Dynamically Generated Visualizations </h2>
            <InlineForm parameter1="Parameter 1" parameter2="Parameter 2" parameter3="Parameter 3" />
            </div>
        );
    }
}

export default DynamicGenerator;
