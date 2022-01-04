import React from 'react';

class Panel4Cards extends React.Component {
    render(){
        const {title, message1, message2, img, imgAlt, link} = this.props;
        return(
            <div className="row">
                <div className="col-md-8">
                    <div className="container">
                        <h2 className="text-white">{title}</h2>
                        <h1 className="text-white font-weight-bold"> {message1}</h1>
                        <a href={link} className="btn btn-transparent btn-lg mt-5">{message2}</a>
                    </div>
                </div>
                <div className="col-md-4 mt-n2 hidden-md-down">
                    <img className="img-fluid text-right width-m5s" src={img} alt={imgAlt}/>
                </div>
            </div>
        );
    }
}

export default Panel4Cards;