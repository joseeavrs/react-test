import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

import brandImage from '../img/navbar_brand.svg';
import brandLogo from '../img/develroot_logo.svg';
import menuIcon from '../img/Vector.svg';

import linkedinIcon from '../img/linkedin 2.svg';
import facebookIcon from '../img/facebook 2.svg';
import instagramIcon from '../img/instagram 2.svg';

class Layout extends React.Component {
    
    render(){
        const {ComponentEl} = this.props;
        return(
            <div className="ray-grid">
                <div className="container-fluid">
                    <Nav
                        brandImage={brandImage}
                        brandLogo={brandLogo}
                        menuIcon={menuIcon}
                    />
                    <ComponentEl/>
                    <Footer
                        linkedinIcon={linkedinIcon}
                        facebookIcon={facebookIcon}
                        instagramIcon={instagramIcon}
                        company="© 2021 Develroot C.A. Derechos reservados."
                    />
                </div>
            </div>   
        );
    }
}

export default Layout;