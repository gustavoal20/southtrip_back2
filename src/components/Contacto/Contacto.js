import React from "react";

import { Form, Button, } from "react-bootstrap";
import './Contacto.css';
//import Calendar from 'react-calendar'
//import { state } from "react";
import faro from "./Imagenes/faro.jpeg"
import 'react-calendar/dist/Calendar.css';


function Form1() {
    const formRef = React.useRef();
    function handleSubmit(evt) {
      evt.preventDefault();


const formData = new FormData(formRef.current);
const values = Object.fromEntries(formData);
    }   
    return (

       
    <div className="contacto">

        <div className="textocon">
            <h3>Nos encantaría recibir tu contacto.</h3>
            <p>Envianos un mensaje y te responderemos lo antes posible!</p>
            <img className="faro__img" src={faro} width='40%' height='50%'/>

        </div>

        {/* <div className="faro">
            <img src={faro} width='50%' height='50%'/>
        </div> */}

        <div className="lineacon">
         <hr/>
        </div> 

    <div className="formulario"> 
    
    
    <Form.Control  type="text"  placeholder="Nombre *"  />
    <br/>
    {/* <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group> */}
    
    <div>
        <Form.Control type="email" placeholder="Email *" /> 
    </div>
    <br/>
    <Form.Control type="text" placeholder="Celular *" />
    <br/>
    <Form.Select aria-label="Default select example">
        <option>Seleccione</option>
        <option value="1">Turismo</option>
        <option value="2">Aventura</option>   
        <option value="2">Traslado</option>  
    </Form.Select>
    <br/>
     <div>
     <span className="wpcf7-form-control-wrap FechaViaje"><input type="date" name="FechaViaje"  className="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date form-control" aria-required="true" aria-invalid="false" placeholder="Fecha Viaje" /></span>
     {/* <Form.Control type="Calendar"/> <Calendar Selected={this.state.fecha}
        /> */}
    </div>  
   
        <br/>
        <Form.Control as="textarea" rows={7} placeholder="Consulta"/>
        <br/>
        <div className="campos">
            <p> Campos obligatorios * </p>
        </div>
        <div className="botonen">
            <Button variant="primary" >ENVIAR MENSAJE</Button>
        </div>
    
    <br/>
    <br/>
    </div>  

    </div>
    )
}


export default Form1;