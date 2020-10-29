import React from 'react';
import Imagenes from './Imagenes';

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
 
export default ListadoImagenes;