import React from 'react';
import AddTestimoniosForm from '../components/AddTestimoniosForm';
import Panel3Cards from '../components/Panel3Cards';

class AddTestimonios extends React.Component {

    state = {
        form: {
            message: '',
            title: '' 
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]:e.target.value
            }
            
        })
    }

    render(){
        return(
            <div className="row panel-1">
                <div className="col-sm-12 col-md-10 mx-auto">
                    <div className="card card-1 shadow-card">
                        <div className="card-body">
                            <div className="row mt-3 mb-5">
                                <div className="col-md-6 mx-auto">
                                    <Panel3Cards {...this.state.form}/>
                                </div>
                                <div className="col-md-6 mx-auto">
                                    <AddTestimoniosForm
                                        onChange={this.handleChange}
                                        form={this.state.form}
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

export default AddTestimonios;