import React from 'react';
import FooterContact from './FooterContact';
import mailIcon from '../img/Proyecto HTML5_CSS3 (2)/Vector-1.svg';
import locationIcon from '../img/Proyecto HTML5_CSS3 (2)/Vector-2.svg';
import phoneIcon from '../img/Proyecto HTML5_CSS3 (2)/Vector.svg';
import downloadIcon from '../img/Proyecto HTML5_CSS3 (2)/DownloadSimple.svg';

class Footer extends React.Component {
    render(){
        const {linkedinIcon, facebookIcon, instagramIcon, company} = this.props;
        return(
            <div className="row footer py-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col1 text-center">
                            <img className="img-fluid d-inline-block mx-2" src={linkedinIcon} alt="linkedin icon"/>
                            <img className="img-fluid d-inline-block mx-2" src={facebookIcon} alt="facebook icon"/>
                            <img className="img-fluid d-inline-block mx-2" src={instagramIcon} alt="instagram icon"/>
                        </div>
                        <div className="col-md-4 mt-auto hidden-md-down">
                            <small className="text-white">{company}</small>
                        </div>
                        <div className="col-md-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <FooterContact
                                            img={mailIcon}
                                            imgAlt="mail icon"
                                            title="info@develroot.com.ve"
                                            classRequired=""
                                        />
                                        <FooterContact
                                            img={locationIcon}
                                            imgAlt="location icon"
                                            title="Develroot C.A. NE 6301, VE"
                                            classRequired=""
                                        />
                                        <FooterContact
                                            img={phoneIcon}
                                            imgAlt="phone icon"
                                            title="+58 (295) 2677936"
                                            classRequired=""
                                        />
                                        <FooterContact
                                            img={downloadIcon}
                                            imgAlt="download icon"
                                            title="Descargar folleto"
                                            classRequired="text-line"
                                        />
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="col-md-4 hidden-md-up mt-3 text-center">
                            <small>© 2021 Develroot C.A. Derechos reservados.</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;