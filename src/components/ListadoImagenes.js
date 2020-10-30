import React from 'react';
import Imagenes from './Imagenes';
import PropTypes from 'prop-types';

const ListadoImagenes = ({ images }) => {
    return ( 
        <div className="col-12 p-5 row">
            {images.map( image => (
               <Imagenes 
                    key={image.id}
                    image={image}
               /> 
            ))}
        </div>
     );
}

ListadoImagenes.propTypes = {
    images: PropTypes.array.isRequired
};

export default ListadoImagenes;