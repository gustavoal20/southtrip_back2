import React from 'react';
import '../index.css';
import Barrasuperior from '../components/Barrasuperior/Barrasuperior';
import Portada from '../components/Portada/Portada';
import Texto from '../components/Texto/Texto';
import Excursiones from '../components/Excursiones/Excursiones';
import Instagram from '../components/Instagram/Instagram';
import Transporte from '../components/Transporte/Transporte';
import Barrainferior from '../components/Barrainferior/Barrainferior';
import BtnFlotante from '../components/Btn-flotante/BtnFlotante';


const HomeView = (props) => {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Carousel />
    //   <BtnFlotante />
    //   <div style={{backgroundColor: '#f5f5f5'}} className="">
    //     <div className="mr-5 ml-5" >
    //       <Noticia1 />
    //       <Noticia2 />
    //     </div>
    //     <BtnVerMas/>
    //   </div>
    //   <Agenda />
    //   <NavbarInferior />

    // </div>
    <div>
      <Barrasuperior/>
      <Portada/>
      <br/>
      <br/>
      <BtnFlotante/>
      <Texto/>
      <br/>
      <br/>
      <Transporte/>
      <Excursiones/>
      <br/>
      <br/>
      <br/>
      <Instagram/>
      <br/>
      <br/>
      <Barrainferior/>
    </div>

  );
}

export default HomeView;