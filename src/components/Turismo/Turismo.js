import React from "react"
import './Turismo.css'
import {  Card } from "react-bootstrap"
import caminata from "./Imagenes/caminata.jpg"
import { FcFlashOn } from "react-icons/fc";


const Turismo = () => {

    return (

        <div className="turismo">
            
            <Card className="CARD">
                <Card.Img className="img" variant="top" src={caminata}/>
                <Card.Body className="body">
                <div className="titulo">
                   <a href="/Actividades"><p>PARQUE NACIONAL TIERRA DEL FUEGO</p></a>
                   
                </div>    
                <div className="from">
                <p> <FcFlashOn/>from  ARS$10000</p>
                </div>
                {/* <div className="arg">
                <p>ARS</p>
                </div>   */}
                </Card.Body>
            </Card>

            <Card className="CARDAVEN">
                <Card.Img className="imgaven" variant="top" src={caminata}/>
                <Card.Body className="body">
                <div className="tituloaven">
                   <a href="/Actividades"><p>LAGUNA ESMERALDA</p></a>
                   
                </div>    
                <div className="fromaven">
                <p> <FcFlashOn/>from  ARS$10000</p>
                </div>
                {/* <div className="arg">
                <p>ARS</p>
                </div>   */}
                </Card.Body>
            </Card>
            </div>   
      

    
 )
}


export default Turismo