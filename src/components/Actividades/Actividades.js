import React from "react";
import './Actividades.css';
import caminata from './Imagenes/caminata.jpeg'
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoCircleSlash } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import { Card, Form, ListGroup, Button } from "react-bootstrap";
import ubicacion from './Imagenes/ubicacion.jpeg'


const Actividades = () => {

    return (

        <div className="Actividades">

          <div className="img">
          <img src={caminata}  alt=""/>
          </div>   

            <br/>
            <br/>
          <div className="caminata"> 
          <h2>CAMINATA</h2>
          </div> 

          <div className="card">
            <Card style={{ width: '18rem' }}>
                <Card.Header>AR$5.100,00</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item ><Button className="boton"  variant="primary" type="submit">
            reservar ahora</Button></ListGroup.Item>
                </ListGroup>
            </Card>
          </div>
          <br/>
          
        
          <div className="iconos">
          <p><AiOutlineClockCircle/> Duracion: 10hs</p>
          <p><GoCircleSlash/> Cancelacion: no se cansela</p>
          <p><GrGroup/> Maxi de personas: 20 </p>
          </div>
        


          <br/>
          <br/>
         
          <div className="caminata2"> 
          <h2>DESCRIPCION</h2>
          <br/>
          <p>De la mano de ANDES TRUCK te invitamos a recorrer la Reserva Natural Villavicencio. Un lugar que despertará tu espíritu aventurero.</p>

          <p>Te proponemos vivir la naturaleza en una experiencia que nos llevará a descubrir increíbles quebradas y parajes protegidos.</p>

         <p>La reserva cuenta con 72 mil hectáreas en las que se conservan más de 450 especies de flora y fauna autóctonas.</p>

        <br/>
         <h5>Tips Kahuak para esta actividad:</h5>
         <br/>
         <p>Recomendamos llevar ropa cómoda, pantalón largo y abrigo, zapatos deportivos.</p>
         <p>Llevar identificación personal, dinero en efectivo, agua mineral.</p>
         <p>No olvidar los anteojos de sol y protección solar.</p>
         <p>Plan familiar ideal, que requiere actividad física moderada* </p>
         </div>
        
          <hr className="linea"/>

        <div className="caminata2"> 
          <h2>INCLUYE</h2>
          <br/>
          <p> Minitrekking guiado a las minas.</p>         
          <p>Casco y seguro.</p>
          <p>Agua mineral.</p>
        </div>
        <hr/>

        <div className="ubicacion">
        <h2>UBICACION</h2>
        <img className="imgubi" src={ubicacion} width="20%"/>
        </div>
        </div>



    )
}

export default Actividades;