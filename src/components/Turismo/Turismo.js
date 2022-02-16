import React from "react"
import './Turismo.css'
import {  Card } from "react-bootstrap"
import caminata1 from "./Imagenes/caminata.jpg"
import { FcFlashOn } from "react-icons/fc";
//import turismo from './Imagenes/turismo.png'
import fondo from './Imagenes/aventura.1.jpeg'


const Turismo = () => {

    return (
<div className="imagenfondo" style={{
            backgroundImage: `url(${caminata1})`, backgroundRepeat: 'no-repeat', color: 'blue'}}>
                
                  <Card className="CARDFONDO">
                    <Card.Img className="img1" variant="top" src={caminata1}/>
                    <Card.Body className="body">
                    <div className="titulo">
                    <a href="/Actividades"><p>PARQUE NACIONAL TIERRA DEL FUEGO</p></a>
                    </div>    
                    <div className="from">
                    <p> <FcFlashOn/>from  ARS$10000</p>
                    </div>
                    </Card.Body>
                    </Card>  
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/> 
                    <br/>
                    <br/>
                    <br/>
                    <br/>        
             <div className="caminatafondo" style={{
                 backgroundImage: `url(${fondo})`,backgroundRepeat: 'no-repeat', width: '100%', height: '310px',}}>
                  <Card className="CARDAVEN">
                    <Card.Img className="imgaven" variant="top" src={caminata1}/>
                    <Card.Body className="body">
                    <div className="tituloaven">
                    <a href="/Actividades"><p>LAGUNA ESMERALDA</p></a>
                    </div>    
                    <div className="fromaven">
                    <p> <FcFlashOn/>from  ARS$10000</p>
                    </div>
                    <div className="arg">
                    
                    </div>   
                    </Card.Body>
                </Card>  
             </div>  
            

         </div> 
        // <div className="turismo9" style={{backgroundImage:`url(${fondo})`}}>
             
        //          <Card className="CARD">
        //             <Card.Img className="img1" variant="top" src={caminata1}/>
        //             <Card.Body className="body">
        //             <div className="titulo">
        //             <a href="/Actividades"><p>PARQUE NACIONAL TIERRA DEL FUEGO</p></a>
        //             </div>    
        //             <div className="from">
        //             <p> <FcFlashOn/>from  ARS$10000</p>
        //             </div>
        //             </Card.Body>
        //         </Card> 
            
        //     <br/>
        //     <br/>
        //      <div className="aventura" style={{backgroundImage:`url(${fondo})`}}> 
        //           <Card className="CARDAVEN">
        //             <Card.Img className="imgaven" variant="top" src={caminata1}/>
        //             <Card.Body className="body">
        //             <div className="tituloaven">
        //             <a href="/Actividades"><p>LAGUNA ESMERALDA</p></a>
        //             </div>    
        //             <div className="fromaven">
        //             <p> <FcFlashOn/>from  ARS$10000</p>
        //             </div>
        //             <div className="arg">
        //             <p>ARS</p>
        //             </div>   
        //             </Card.Body>
        //         </Card> 
        //     </div> 
            

        // </div>   
      

    
 
    )
 }


export default Turismo