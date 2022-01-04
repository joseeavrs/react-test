import React from 'react';

class Panel1Content extends React.Component {

    render(){
        const {arrowImage1, arrowImage2, arrowImage3, arrowImage4, circleImage1, circleImage2, circleImage3} = this.props;
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center hidden-md-down">
                        <img className="img-fluid vertical-align" src={arrowImage1} alt="arrow"/>
                        <img className="img-fluid vertical-align mx-2" src={circleImage1} alt="circle with number 1"/>
                        <img className="img-fluid vertical-align" src={arrowImage2} alt="arrow"/>
                        <img className="img-fluid vertical-align mx-2" src={circleImage2} alt="circle with number 2"/>
                        <img className="img-fluid vertical-align" src={arrowImage3} alt="arrow"/>
                        <img className="img-fluid vertical-align mx-2" src={circleImage3} alt="circle with number 3"/>
                        <img className="img-fluid vertical-align" src={arrowImage4} alt="arrow"/>
                    </div>
                    <div className="col-12 text-center hidden-md-up">
                        <div className="row">
                            <div className="col-12 my-5">
                                <img style={{transform: `rotate(90deg)`}} className="img-fluid" src={arrowImage1} alt="arrow"/>
                            </div>
                            <div className="col-12 my-5">
                                <img className="img-fluid" src={circleImage1} alt="circle with number 1"/>
                            </div>
                            <div className="col-12 mb-5 text-center text-white">
                                <h2>Visualizar equipo.</h2>
                                <p>Déjanos saber qué es lo que necesitas con exactitud.</p>
                            </div>
                            <div className="col-12 my-5">
                                <img style={{transform: `rotate(90deg)`}} className="img-fluid my-5" src={arrowImage2} alt="arrow"/>
                            </div>
                            <div className="col-12 my-5">
                                <img className="img-fluid" src={circleImage2} alt="circle with number 2"/>
                            </div>
                            <div className="col-12 mb-5 text-center text-white">
                                <h2>Evaluar opciones.</h2>
                                <p>Te presentaremos candidatos en poco tiempo. Ya lo verás.</p>
                            </div>
                            <div className="col-12 my-5">
                                <img style={{transform: `rotate(90deg)`}} className="img-fluid my-5" src={arrowImage3} alt="arrow"/>
                            </div>
                            <div className="col-12 my-5">
                                <img className="img-fluid" src={circleImage3} alt="circle with number 3"/>
                            </div>
                            <div className="col-12 mb-5 text-center text-white">
                                <h2>Contratar y crecer.</h2>
                                <p>Elige el que más te convenga y agrega valor a tu equipo.</p>
                            </div>
                            <div className="col-12 my-5">
                                <img style={{transform: `rotate(90deg)`}} className="img-fluid my-5" src={arrowImage4} alt="arrow"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 hidden-md-down">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 text-center text-white">
                                    <h2>Visualizar equipo.</h2>
                                    <p>Déjanos saber qué es lo que necesitas con exactitud.</p>
                                </div>
                                <div className="col-md-4 text-center text-white">
                                    <h2>Evaluar opciones.</h2>
                                    <p>Te presentaremos candidatos en poco tiempo. Ya lo verás.</p>
                                </div>
                                <div className="col-md-4 text-center text-white">
                                    <h2>Contratar y crecer.</h2>
                                    <p>Elige el que más te convenga y agrega valor a tu equipo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel1Content;