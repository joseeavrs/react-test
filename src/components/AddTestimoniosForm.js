import React from 'react';

class AddTestimoniosForm extends React.Component {

    state = {};

    handleSubmit = e =>{
        e.preventDefault();
    }

    render(){

        const {onChange, form} = this.props;

        return(
            <div className="container text-justify">
                <form 
                    className="form-group"
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group">
                        <label>Titulo</label>
                        <input className="form-control" type="text" placeholder="Mi titulo de testimonio..." name="title" onChange={onChange} value={form.title}/>
                    </div>
                    <div className="form-group">
                        <label>Mensaje</label>
                        <textarea className="form-control" placeholder="Este es el mensaje del testimonio =)" name="message" onChange={onChange} value={form.message}/>
                    </div>
                    <div className="form-group mt-3 text-right">
                        <button type="submit" className="btn btn-gradient btn-lg text-white" onClick={this.handleClick}>Añadir</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTestimoniosForm;