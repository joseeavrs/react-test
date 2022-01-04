import React from 'react';
import { Link} from 'react-router-dom';



class Nav extends React.Component {

    /* constructor(props){
        super(props);
        this.state={
            brandImage:props.brandImage
        }
    }

    componentDidMount(props){
        setTimeout(()=>{
            this.setState({
                brandImage: 'https://neoschool.dev/img/favicon.png'
            });
        },5000);
    } */

    render(){

        const {brandImage, brandLogo, menuIcon} = this.props;

        return(
            <div className="row bg-white">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-6">
                            <div className="container">
                                <Link to="/home">
                                    <img 
                                        className="hidden-md-down"
                                        src={brandImage}
                                        alt="navbar brand"
                                    />
                                    <img
                                        className="hidden-md-up"
                                        src={brandLogo}
                                        alt="develroot logo"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-6 text-right ml-auto">
                            <div className="container">
                                <a href="#/" className="btn btn-lg btn-secondary hidden-md-down">Contáctanos</a>
                                <img
                                    className="img-fluid hidden-md-up" 
                                    src={menuIcon}
                                    alt="menu"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;