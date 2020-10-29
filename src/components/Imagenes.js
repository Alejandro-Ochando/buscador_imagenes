import React from 'react';
import './Imagenes.css';


const Imagenes = ({ image }) => {
    const {largeImageURL, likes, previewURL, tags, views } = image;
    

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"  />
                <div className="card-body">
                    <p className="card-text">{likes} Likes</p>
                    <p className="card-text">{views} Visitas</p>
                </div>
                <div className="card-footer">
                    <a
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >Ver Imagen</a>
                </div>
            </div>
        </div>
     );
}
 
export default Imagenes;