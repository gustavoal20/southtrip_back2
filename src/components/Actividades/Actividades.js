import React from "react";
import './Actividades.css';
import caminata from './Imagenes/caminata.jpeg'
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoCircleSlash } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import { Card, Form, ListGroup, Button } from "react-bootstrap";
import ubicacion from './Imagenes/ubicacion.jpeg'
import {FcCheckmark } from "react-icons/fc";

const Actividades = () => {

    return (

        <div className="Actividades">

          <div className="img">
          <img src={caminata}  alt=""/>
          </div>   

            <br/>
            <br/>
          <div className="caminata"> 
          <h3>CAMINATA</h3>
          </div> 

          <div className="lineacami">
         <hr/>
       </div> 

      <div className="info__container">
      <div className="informacion__travesia">
          <div className="iconos"><p><AiOutlineClockCircle/> Duración: </p><p> 10hs</p> </div>
          <div className="iconos2"><p><GoCircleSlash/> Cancelacion:</p> <p>no se cansela</p></div>
          <div className="iconos3"><p><GrGroup/> Maxi de personas:</p> <p> 20 </p></div>
      </div>
          <div className="card__presios">
            <Card className="card1" style={{ width: '18rem' }}>
                <Card.Header >AR$5.100,00</Card.Header>
                <ListGroup variant="flush">
                  
                    <ListGroup.Item>Fecha</ListGroup.Item>
                    <ListGroup.Item>Adultos</ListGroup.Item>
                    <ListGroup.Item ><Button className="botonacts" href="/Confirmar" variant="primary" type="submit">
            reservar </Button></ListGroup.Item>
                </ListGroup>
                
            </Card>
          </div>
          <br/>
          
          
        </div>
         
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="lineacami">
         <hr/>
         <br/>
         </div> 
          <div className="descripcion"><h3>DESCRIPCION</h3></div>

          <div className="caminata2"> 
          
          <br/>
          <p>De la mano de Southtrip te invitamos a recorrer la Laguna Esmeralda. Un lugar que despertará tu espíritu aventurero.</p>

          <p>Te proponemos vivir la naturaleza en una experiencia que nos llevará a descubrir lindos paisajes.</p>

         <p>La Laguna cuenta con 72 mil hectáreas en las que se conservan más de 450 especies de flora y fauna autóctonas.</p>

        <br/>
         <h5>Tips South para esta actividad:</h5>
         <br/>
       <ul><li><p>Recomendamos llevar ropa cómoda, pantalón largo y abrigo, zapatos deportivos.</p></li> </ul>
       <ul><li><p>Llevar identificación personal, dinero en efectivo, agua mineral.</p></li> </ul>
       <ul><li><p>No olvidar los anteojos de sol y protección solar.</p></li> </ul>
       <ul><li><p>Plan familiar ideal, que requiere actividad física moderada* </p></li> </ul>
         </div>
        
        <hr className="linea"/> 
        <br/>
        <div className="caminata3"> 
          <h3>INCLUYE</h3>
          <br/>
          <p><FcCheckmark/> Trekking guiado.</p>         
          <p><FcCheckmark/> .</p>
          <p><FcCheckmark/> Agua mineral.</p>
        </div>
       <div className="linea">
         <hr/>
       </div> 

        <div className="ubicacion">
        <h3>UBICACION</h3>
        <img className="imgubi" src={ubicacion} width="20%"/>
        </div>
        </div>



    )
}

export default Actividades;