import React from 'react';
import './Imagenes.css';
import './Iconos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faDownload } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

//Iconos
const like = <FontAwesomeIcon icon={faHeart} />
const visit = <FontAwesomeIcon icon={faEye} />
const download = <FontAwesomeIcon icon={faDownload} />

const Imagenes = ({ image }) => {
    const {largeImageURL, likes, previewURL, tags, views, downloads } = image;

   
    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"  />
                <div className="row card-body">
                    <div className="col-5 pr-0">
                        <p className="card-text font-weight-bold">{likes} {like} </p>
                    </div>
                    <div className="col-7 pl-0">
                    <p className="card-text font-weight-bold text-right">{downloads} {download}</p>
                    </div>    
                    <div className="col-12 mt-3">
                    <p className="card-text font-weight-bold">{views} {visit}</p>
                    
                    </div>      
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

Imagenes.propTypes = {
    image: PropTypes.object.isRequired
};

export default Imagenes;