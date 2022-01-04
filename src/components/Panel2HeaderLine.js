import React from 'react';

class Panel2HeaderLine extends React.Component {
    render(){
        const {Icon, iconAlt, message} = this.props;
        return(
            <div className="col-md-8">
                <div className="row my-5">
                    <div className="col-2 vertical-align text-center">
                        <img className="img-fluid" src={Icon} alt={iconAlt}/>
                    </div>
                    <div className="col-10">
                        <h2 className="vertical-align d-inline">{message}</h2>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Panel2HeaderLine;