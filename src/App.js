import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons'


function App() {

  const [ search, saveSearch ] = useState('');
  const [ images, saveImages ] = useState([]);
  //Paginador
  const [ currentPage, saveCurrentPage ] = useState(1);
  const [ totalPages, saveTotalPages ] = useState(1);
  //Iconos
  const next = <FontAwesomeIcon icon={faForward} />
  const previous = <FontAwesomeIcon icon={faBackward} />


  useEffect(() => {
    
    const consultAPI = async() => {

      if(search === '') return;

      const imagesPerPage = 30;
      const key ='18907144-ac5d4537a4499596029ff3be0';
      const url=`https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${currentPage}`;

      const answer = await axios.get(url);

      saveImages(answer.data.hits);

      //Cálculo del Total de paginas
      const calculateTotalPages =Math.ceil(answer.data.totalHits / imagesPerPage);
      saveTotalPages(calculateTotalPages);

      //Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth'});

    }

    consultAPI();
  }, [search, currentPage]);

  //Delante y Atras del Paginador
  const previousPage = () => {
    const newCurrentPage = currentPage - 1;
    if(newCurrentPage === 0 ) return;
    saveCurrentPage(newCurrentPage);
  }

  const nextPage = () => {
    const newCurrentPage = currentPage + 1;
    if(newCurrentPage > totalPages ) return;
    saveCurrentPage(newCurrentPage);
  }


  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center" >Buscador de Imágenes</p>
        <Formulario 
          saveSearch={saveSearch}
        />
      </div>
      <div className=" row justify-content-center">
        <ListadoImagenes 
          images={images}
        />
        { (currentPage === 1) ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={previousPage}
          >
            {previous}  Anterior
          </button>
        )}
        { (currentPage === totalPages) ? null : (
          <button
            type="button"
            className="btn btn-info"
            onClick={nextPage}
          >
          Siguiente  {next}
          </button>
        )}
      </div>
    </div>
  ); 
}

export default App;
