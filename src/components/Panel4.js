import React from 'react';
import Panel4Cards from './Panel4Cards';
import flyingRocketImage from '../img/flying_rocket.svg'

class Panel4 extends React.Component {
    render(){
        return(
            <div className="row py-5">
                <div className="container">
                    <div className="container">
                        <div className="card rectangule">
                            <div className="card-body">
                                <div className="container">
                                    <Panel4Cards
                                        title="Potencia tu equipo."
                                        message1="Obtén una cotización gratuita en menos de una hora."
                                        message2="¡Obténla ya!"
                                        img={flyingRocketImage}
                                        imgAlt="flying rocket"
                                        link="#"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel4;