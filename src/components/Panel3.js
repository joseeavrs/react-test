import React from 'react';
import Panel3Content from './Panel3Content';
import Panel3Header from './Panel3Header';

class Panel3 extends React.Component {
    render(){
        return(
            <div className="row bg-white pb-3">
                <Panel3Header
                    title="T e s t i m o n i o s"
                    message="Por qué las organizaciones nos eligen"
                />
                <Panel3Content/>
            </div>
        );
    }
}

export default Panel3;