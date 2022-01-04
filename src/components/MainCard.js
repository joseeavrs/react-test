import React from 'react';

class MainCard extends React.Component {
    render(){
        return(
            <div className="col-sm-12 col-md-10 mx-auto mt-n5">
                <div className="card card-1 shadow-card">
                    <div className="card-body">
                        <div className="row mt-3 mb-5">
                            <div className="col-md-6">
                                <div className="container text-justify">
                                    <br/>
                                    <h1 className="text-gd-1">{this.props.message1}</h1>
                                    <h2>{this.props.message2}</h2>
                                    <br/>
                                    <p>Indícanos qué necesitas y te contactaremos con <b>tarifas</b> y algunos <b>CVs acordes a tus intereses.</b></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="container">
                                    <br/>
                                    <br/>
                                    <form>
                                        <div className="form-group mb-5">
                                            <label className="col-form-label-lg font-weight-bold">{this.props.emailTitle}</label>
                                            <input className="form-control" typeof="email" name="email" placeholder="nombre@example.com"/>
                                        </div>
                                        <div className="form-group my-5">
                                            <label className="col-form-label-lg font-weight-bold">{this.props.descripTitle}</label>
                                            <textarea className="form-control" name="description" cols="30" rows="5" placeholder={this.props.boxMessage}/>
                                        </div>
                                        <div className="form-group text-center">
                                            <a href={this.props.linkButton} className="btn btn-gradient btn-lg text-white">{this.props.btnMessage}</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainCard;