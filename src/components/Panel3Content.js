import React from 'react';
import Panel3Cards from './Panel3Cards';
import btnPlus from '../img/images.png';
import { Link } from 'react-router-dom';

class Panel3Content extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:[
                {
                    "id": "1",
                    "message":'"Son un equipo equilibrado, lo que  favorece la resolución de problemas teniendo conversaciones difícil"',
                    "title":"Desarrollo de aplicación para franquicia de gimnasios."
        
                },
                {
                    "id": "2",
                    "message":'"Están dispuestos a comprometerse con un problema hasta resolverlo, en lugar de esperar a que les digan qué hacer".',
                    "title": "Desarrollo de software para una casa de apuestas."
                },
                {
                    "id": "3",
                    "message":'"El proyecto costó aproximadamente la mitad de lo que habría costado si hubiéramos contratado a ingenieros locales".',
                    "title": "Aplicación web para empresa de préstamos."
                },
                {
                    "id": "4",
                    "message":'"El equipo de Develroot fue ingenioso, sin miedo a los problemas y bloqueos, creativo, profesional y rápido".',
                    "title": "Desarrollo de producto para plataforma educativa en línea."
                }
            ]
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="container">
                            <div className="row">
                                {
                                    this.state.data.map((testimonio)=>{
                                        return(
                                            <Panel3Cards
                                                key={testimonio.id}
                                                message={testimonio.message}
                                                title={testimonio.title}
                                            />
                                        )
                                    })
                                } 
                            </div>
                        </div>
                        <div className="container">
                            <div className="row pt-5">
                                <Link to="/add/testimonio" className="mx-auto text-center">
                                    <img src={btnPlus} className="img-fluid" height="5"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel3Content;