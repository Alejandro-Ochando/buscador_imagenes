import React, { useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  const [ search, saveSearch ] = useState('');

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center" >Buscador de Imagenes</p>
        <Formulario 
          saveSearch={saveSearch}
        />
      </div>
    </div>
  ); 
}

export default App;
