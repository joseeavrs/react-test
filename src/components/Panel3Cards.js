import React from 'react';

class Panel3Cards extends React.Component {
    render(){
        const {message, title}= this.props;

        return(
            <div className="col-md-6 my-3">
                <div className="card card-rounded shadow-card">
                    <div className="card-body font-weight-bold">
                        <div className="container">
                            <p>{message}</p>
                            <div className="h-100">
                                <p className="mt-auto">{title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel3Cards;