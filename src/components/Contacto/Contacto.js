import React, { useRef } from "react";
import emailjs from 'emailjs-com';
//import { Form, Button } from "react-bootstrap";
import './Contacto.css';
//import Calendar from 'react-calendar'
//import { state } from "react";
import faro from "./Imagenes/faro.jpeg"
import 'react-calendar/dist/Calendar.css';


function Form1() {
    const formRef = React.useRef();
    const form = useRef();
    function handleSubmit(evt) {
      evt.preventDefault();


        const formData = new FormData(formRef.current);
        const values = Object.fromEntries(formData);
    }
    
    function sendEmail(e) {
        
        e.preventDefault();
    
        emailjs.sendForm('service_vwkeiyg','template_south',e.target,'user_F3pz7nP42GBciRSB1PDDg')
          .then((result) => {
              alert('Mensaje Enviado!');
              console.log(result.text);
          }, (error) => {
              alert('Error al enviar el mensaje!');
              console.log(error.text);
          });
          e.target.reset();
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

                <form ref={form} onSubmit={sendEmail}>
                    
                    <input className="form-control" type="text"  placeholder="Nombre *" name="name" required/>
                    <br/>
                    <input className="form-control" type="email" placeholder="Email *" name="email" required/>
                    <br/>
                    <input className="form-control" type="number" placeholder="Celular *" name="phone" required/>
                    <br/>
                    <input class="dropdown " aria-label="Default select example" name="value" required />
                        {/* <option>Seleccione</option>
                        <option value="1">Turismo</option>
                        <option value="2">Aventura</option>   
                        <option value="2">Traslado</option> /> */}
                    
                    <br/>

                    <input type="date" name="date"  className="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date form-control" aria-required="true" aria-invalid="false" placeholder="Fecha Viaje" required/>
                    <br/>
                    <textarea className="form-control" as="textarea" rows={7} placeholder="Consulta" name="message" required/>
                    <div className="campos">
                        <p> Campos obligatorios * </p>
                    </div>
                    <div className="button">
                        <input className="btn btn-primary" type="submit" value="ENVIAR MENSAJE" />
                    </div>
                </form>
            
                {/* <Form.Control  type="text"  placeholder="Nombre *" name="name" required/>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group> 
                
                <div>
                    <Form.Control type="email" placeholder="Email *" name="email" required/> 
                </div>
                <br/>
                <Form.Control type="number" placeholder="Celular *" name="phone" required/>
                <br/>
                <Form.Select aria-label="Default select example" name="value" required>
                    <option>Seleccione</option>
                    <option value="1">Turismo</option>
                    <option value="2">Aventura</option>   
                    <option value="2">Traslado</option>  
                </Form.Select>
                <br/>
                <div>
                    <span className="wpcf7-form-control-wrap FechaViaje"><input type="date" name="date"  className="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date form-control" aria-required="true" aria-invalid="false" placeholder="Fecha Viaje" required/></span>
                    {/* <Form.Control type="Calendar"/> <Calendar Selected={this.state.fecha}/> */}
                {/* </div>  
            
                <br/>
                <Form.Control as="textarea" rows={7} placeholder="Consulta" name="message" required/>
                <br/>
                <div className="campos">
                    <p> Campos obligatorios * </p>
                </div>
                <div className="button">
                    <Button variant="primary" id="button" >ENVIAR MENSAJE</Button>
                </div>  */} 
            
                <br/>
                <br/>
            </div>

            
        
            
        </div>
    )
}


export default Form1;


// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

// const Form1 = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_vwkeiyg','template_south',e.target,'user_F3pz7nP42GBciRSB1PDDg')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="name" />
//       <label>Email</label>
//       <input type="email" name="email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default Form1;
