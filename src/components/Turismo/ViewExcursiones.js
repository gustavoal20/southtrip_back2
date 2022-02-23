import React from "react"
//import './Turismo.css'
//import turismo from './Imagenes/turismo.png'
import fondo1 from './Imagenes/aventura.1.jpeg'
import fondo2 from './Imagenes/caminata.jpg'
import Excursion1 from "./Excursion1";
import Excursion2 from "./Excursion2";
import './ViewExcursiones.css'


const ViewExcursiones = () => {

    return (
        <div >
        <div >
            <Excursion1 />
        </div>
        <div >
            <Excursion2 />    
        </div> 
    

    </div>
 
    )
 }


export default ViewExcursiones;
