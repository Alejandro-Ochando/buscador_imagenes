import React from 'react';
import './Imagenes.css';
import './Iconos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons'

//Iconos
const like = <FontAwesomeIcon icon={faHeart} />
const visit = <FontAwesomeIcon icon={faEye} />

const Imagenes = ({ image }) => {
    const {largeImageURL, likes, previewURL, tags, views } = image;

   
    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"  />
                <div className="card-body">
                    <p className="card-text font-weight-bold">{likes} {like} </p>
                    <p className="card-text font-weight-bold">{views} {visit}</p>
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