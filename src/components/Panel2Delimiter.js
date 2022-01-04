import React from 'react';

class Panel2Delimiter extends React.Component {
    render(){
        const {title, message1, message2} = this.props;
        return(
            <div className="container pt-5">
                <div className="text-center">
                    <h3 className="text-upper text-green">{title}</h3>
                    <h1>{message1}</h1>
                    <h4>{message2}</h4>
                </div>
            </div>
        );
    }
}

export default Panel2Delimiter;