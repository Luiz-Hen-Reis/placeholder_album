import { useState } from 'react';
import { API } from './API';
import * as C from './App.styles';
import { Routers } from './routers/Routers';

const App = () => {

  return (
    <div>
        <C.Header>
          Galeria de Fotos
        </C.Header>   
        <C.Container>
          <Routers />
        </C.Container>
        <C.Footer>
        <a href="https://github.com/Luiz-Hen-Reis" target="_blank">Luiz-Hen-Reis</a> 
        <br />
        Todos os Direitos Reservados.
        </C.Footer> 
    </div>
  )
}

export default App;