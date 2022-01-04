import React from 'react';
import MainCard from './MainCard';
import Panel1Content from './Panel1Content';

import arrowImage1 from '../img/Proyecto HTML5_CSS3/Union.svg';
import arrowImage3 from '../img/Proyecto HTML5_CSS3/Union-2.svg';
import arrowImage4 from '../img/Proyecto HTML5_CSS3/Union-1.svg';
import circleImage1 from '../img/Proyecto HTML5_CSS3/Group 1065.svg';
import circleImage2 from '../img/Proyecto HTML5_CSS3/Group 1066.svg';
import circleImage3 from '../img/Proyecto HTML5_CSS3/Group 1067.svg'

class Panel1 extends React.Component {
    render(){
        return(
            <div className="row panel-1">
                <MainCard
                    message1="Obtén una cotización"
                    message2="(en el plazo de una hora)"
                    emailTitle="Correo electrónico"
                    descripTitle="¿Qué estás buscando?"
                    boxMessage="Necesito un desarrollador web fullstack, con experiencia en PHP y Javascript. Él/Ella tiene que ser muy bueno resolviendo problemas y que le guste el trabajo en equipo."
                    btnMessage="Enviar"
                    linkButton="#"
                />
                <div className="container text-center text-white panel-1-padding">
                    <h4 className="my-2 text-upper">C ó m o f u n c i o n a</h4>
                    <h1 className="my-2">Te lo ponemos <span className="text-white text-line">muy fácil</span></h1>
                </div>
                <Panel1Content
                    arrowImage1={arrowImage1}
                    arrowImage2={arrowImage3}
                    arrowImage3={arrowImage3}
                    arrowImage4={arrowImage4}
                    circleImage1={circleImage1}
                    circleImage2={circleImage2}
                    circleImage3={circleImage3}
                />
            </div>
        )
    }
}

export default Panel1;