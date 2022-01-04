import React from 'react';

class Panel2Cards extends React.Component {
    render(){
        const {cardClass, img, imgAlt, title, message1, message2} = this.props;
        return(
            <div className="col-md-4 my-3">
                <div className={`card ${cardClass} shadow-card py-1`}>
                    <div className="card-header">
                        <img className="img-fluid" src={img} alt={imgAlt}/>
                    </div>
                    <div className="card-body pt-0">
                        <h2 className="font-weight-bold card-title">{title}</h2>
                        <p>{message1}<b> {message2}</b></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel2Cards;