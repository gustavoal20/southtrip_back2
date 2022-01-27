import React from 'react';
import Actividades from '../components/Actividades/Actividades';
import Barrainferior from '../components/Barrainferior/Barrainferior';
import Barrasuperior from '../components/Barrasuperior/Barrasuperior';


const ActividadesViews = (props) => {
  return (
    <div>
      <Barrasuperior />
        <dr/>
        <Actividades />
        <br/>
        <dr/>
      <Barrainferior />

    </div>
  );
}

export default ActividadesViews;

