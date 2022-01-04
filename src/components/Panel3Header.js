import React from 'react';

class Panel3Header extends React.Component {
    render(){
        const {title, message} = this.props;
        return(
            <div className="container text-center my-5">
                <div className="container">
                    <h3 className="my-5 text-upper text-green">{title}</h3>
                    <h1>{message}</h1>
                </div>
            </div>
        );
    }
}

export default Panel3Header;