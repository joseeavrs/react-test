import React from 'react';
import Panel2HeaderLine from './Panel2HeaderLine';
import rocketIcon from '../img/rocket_icon.svg';
import tieIcon from '../img/tie_icon.svg';
import targetIcon from '../img/target_icon.svg';

class Panel2Header extends React.Component {
    render(){
        const {centerImage} = this.props;
        return(
            <div className="container">
                <div className="container my-5">
                    <h3 className="text-upper text-green">Por qué devel root</h3>
                    <h1>Estás en <span className="text-line">el lugar correcto si...</span></h1>
                </div>
                <div className="container">
                    <div className="row">
                        <Panel2HeaderLine
                            Icon={rocketIcon}
                            iconAlt="rocket icon"
                            message="Quieres aumentar rápidamente el staff de TI de tu compañía."
                        />
                        <Panel2HeaderLine
                            Icon={tieIcon}
                            iconAlt="tie icon"
                            message="Estás buscando Diseñadores y Desarrolladores Web."
                        />
                        <Panel2HeaderLine
                            Icon={targetIcon}
                            iconAlt="target icon"
                            message="Estás cansado de perder tiempo en entrevistas."
                        />
                        <div className="col-md-4 text-center">
                            <img className="img-fluid" src={centerImage} alt="people, rocket, insert idea"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel2Header;