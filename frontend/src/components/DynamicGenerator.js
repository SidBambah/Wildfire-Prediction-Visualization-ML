import React from 'react';
import WordCloud from './WordCloud.js';

class DynamicGenerator extends React.Component {
    render(){
        return (
            <WordCloud parameter={'STATE'}/>
        );
    }
}

export default DynamicGenerator;
