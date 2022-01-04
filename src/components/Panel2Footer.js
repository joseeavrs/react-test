import React from 'react';
import Panel2Cards from './Panel2Cards';
import imageCard1 from '../img/devs_icon.svg';
import imageCard2 from '../img/designers_icon.svg';
import imageCard3 from '../img/leaders_icon.svg';

class Panel2Footer extends React.Component {
    render(){
        return(
            <div className="container pt-3">
                <div className="container">
                    <div className="row">
                        <Panel2Cards
                            cardClass="card-2"
                            img={imageCard1}
                            imgAlt="code </>"
                            title="Desarrolladores"
                            message1="Ofrece soluciones de ingeniería de alta calidad: "
                            message2="ingenieros, programadores, codificadores, arquitectos y más."
                        />
                        <Panel2Cards
                            cardClass="card-3"
                            img={imageCard2}
                            imgAlt="light"
                            title="Diseñadores"
                            message1="Crea una experiencia de diseño"
                            message2="expertos en diseño de interfaz de usuario, experiencia visual e interacción."
                        />
                        <Panel2Cards
                            cardClass="card-2"
                            img={imageCard3}
                            imgAlt="leaders icon"
                            title="Líderes de equipo"
                            message1="Ejecuta proyectos críticos con líderes de equipo experimentados y"
                            message2="expertos en diseño de inteconstruye tu camino hacia el éxito."
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel2Footer;