import React from 'react';
import Confirmar from '../components/Confirmar/Confirmar';
import Barrainferior from '../components/Barrainferior/Barrainferior';
import Barrasuperior from '../components/Barrasuperior/Barrasuperior';

const ConfirmarViews = (props) => {
    return (
      <div>
        <Barrasuperior />
          <dr/>
          <br/>
          <Confirmar />
          <br/>
          <dr/>
        <Barrainferior />
  
      </div>
    );
  }
  
  export default ConfirmarViews;