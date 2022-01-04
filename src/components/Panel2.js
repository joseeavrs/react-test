import React from 'react';
import Panel2Header from './Panel2Header';
import centerImage from '../img/Frame.svg';
import Panel2Delimiter from './Panel2Delimiter';
import Panel2Footer from './Panel2Footer';

class Panel2 extends React.Component {
    render(){
        return(
            <div className="row py-5">
                <div className="col-12">
                   <Panel2Header
                        centerImage={centerImage}
                   />
                   <Panel2Delimiter
                        title="N u e s t r o s t a l e n t o s"
                        message1="Expertos en la materia"
                        message2="Te presentaremos candidatos en poco tiempo. Ya lo verás."
                   />
                   <Panel2Footer/>
                </div>
            </div>
        );
    }
}

export default Panel2;