import React from 'react';
import Main from '../components/Main';

import Panel1 from '../components/Panel1';
import Panel2 from '../components/./Panel2';
import Panel3 from '../components/Panel3';
import Panel4 from '../components/Panel4';

import titleImage from '../img/UVP.svg';
import rocketImage from '../img/flying_rocket.svg';


class Home extends React.Component {
    render(){
        return(
            <div>
                <Main
                    title={titleImage}
                    img={rocketImage}  
                />
                <Panel1/>
                <Panel2/>
                <Panel3/>
                <Panel4/>
            </div>
        );  
    }
}

export default Home;