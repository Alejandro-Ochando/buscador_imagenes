import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [ search, saveSearch ] = useState('');
  const [ images, saveImages ] = useState([]);
  //Paginador
  const [ actualPage, saveActualPage ] = useState(1);
  const [ totalPages, saveTotalPages ] = useState(1);

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
      </div>
    </div>
  ); 
}

export default App;
