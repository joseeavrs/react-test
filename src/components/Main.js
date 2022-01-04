import React from 'react';


function Main(props){   //componente funcional (de función)
    const {title, img} = props;
    return(
        <div className="container">
            <div className="container">
                <div className="row align-items-center panel-1-my">
                    <div className="col-md-8">
                        <img className="img-fluid" src={title} alt="Haz crecer tu equipo en menos de una semana"/>
                    </div>
                    <div className="col-md-4 text-right hidden-md-down">
                        <img className="img-fluid" src={img} alt="flying rocket"/>
                    </div>
                    <div className="col-md-4 text-center hidden-md-up">
                        <img className="img-fluid" src={img} alt="flying rocket"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
/* class Main extends React.Component { componente de clase
    render(){
        return(
            <div className="container">
                <div className="container">
                    <div className="row align-items-center panel-1-my">
                        <div className="col-md-8">
                            <img className="img-fluid" src={title} alt="Haz crecer tu equipo en menos de una semana"/>
                        </div>
                        <div className="col-md-4 text-right hidden-md-down">
                            <img className="img-fluid" src={img} alt="flying rocket"/>
                        </div>
                        <div className="col-md-4 text-center hidden-md-up">
                            <img className="img-fluid" src={img} alt="flying rocket"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} */

export default Main;