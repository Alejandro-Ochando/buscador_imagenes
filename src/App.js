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
  const [ actualPage, saveActualPage ] = useState(1);
  const [ totalPages, saveTotalPages ] = useState(1);

  const next = <FontAwesomeIcon icon={faForward} />
  const previous = <FontAwesomeIcon icon={faBackward} />

  useEffect(() => {
    
    const consultAPI = async() => {

    if(search === '') return;

    const imagesPerPage = 30;
    const key ='18907144-ac5d4537a4499596029ff3be0';
    const url=`https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;

    const answer = await axios.get(url);

    saveImages(answer.data.hits);
   
    //Calculo del Total de paginas
    const calculateTotalPages =Math.ceil(answer.data.totalHits / imagesPerPage);
    saveTotalPages(calculateTotalPages);
    }
    consultAPI();
  }, [search]);

  //Delante y Atras del Paginador
  const previousPage = () => {
    const newActualPage = actualPage - 1;
    if(newActualPage === 0 ) return;
    saveActualPage(newActualPage);
  }

  const nextPage = () => {
    const newActualPage = actualPage + 1;
    if(newActualPage > totalPages ) return;
    saveActualPage(newActualPage);
  }


  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center" >Buscador de Imagenes</p>
        <Formulario 
          saveSearch={saveSearch}
        />
      </div>

      <div className=" row justify-content-center">
        <ListadoImagenes 
          images={images}
        />
        <button
          type="button"
          className="btn btn-info mr-1"
          onClick={previousPage}
        >
          {previous}  Anterior
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={nextPage}
        >
          Siguiente  {next}
        </button>
          
      
      </div>
    </div>
  ); 
}

export default App;
