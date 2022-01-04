import React from 'react';

class FooterContact extends React.Component {
    render(){
        const {img, imgAlt, title, classRequired} = this.props;
        return(
            <div className="row mt-3 mx-auto">
                <div className="col-2 vertical-align text-center">
                    <img className="img-fluid" src={img} alt={imgAlt}/>
                </div>
                <div className="col-10">
                    <p className={`vertical-align d-inline ${classRequired}`}>{title}</p>
                </div>
            </div>
        );
    }
}

export default FooterContact;