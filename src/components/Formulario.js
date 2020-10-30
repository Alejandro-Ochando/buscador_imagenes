import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({ saveSearch }) => {
    
    const [ term, saveTerm ] = useState('');
    const [ error, saveError ] = useState(false);
    
    const handlerSubmit = e => {
        e.preventDefault();
        
        //Validación
        if( term.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);
        saveSearch(term);
    }

    return ( 
        <form
            onSubmit={handlerSubmit}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ej: fútbol"
                        onChange={ e => saveTerm(e.target.value)}
                    />
                </div>   
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        vale="Buscar"
                    />
                </div>   
            </div>
            {error ? <Error mensaje="Agrega un término de búsqueda" /> : null }
        </form>
     );
}

Formulario.propTypes = {
    saveSearch: PropTypes.func.isRequired
};

export default Formulario;