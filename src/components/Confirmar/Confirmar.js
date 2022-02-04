import React from "react";
import './Confirmar.css'
import {Form, Card} from 'react-bootstrap'
import caminata from './Imagenes/caminata.jpg'

const Confirmar = () => {
    return(

    <div className="confirmar">
            <div className="linearoja">
                <hr/>
            </div>
            <div className="reserva">
                <h2>Su reserva</h2>
            </div>
            
        <div>
            <h2 className="facturacion">
                Detalles de facturación
            </h2>
            <div className="lineafacturacion">
                <hr/>
            </div>
        </div>
        <div className="cardreserva">
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                <img className="cardcaminata" src={caminata}></img>
                
                    <Card.Title className="parque">Parque nacional Tierra del Fuego</Card.Title>
                    
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                        <br/> 
                        <br/>
                        <div className="lineaparque">
                        <hr/>
                        </div>
                        <br/>
                        <br/>                       
                        <div className="total">
                        <p className="precio">AR$1000</p>
                        <p >Total:</p>
                        </div>
                        </Card.Text>
                </Card.Body>
            </Card>
            </div>
        <div className="formularionombre"> 
        <p>Nombre *</p>
        <Form.Control  type="text"  placeholder="Nombre *"  />
         </div>
        <br/>
        <div className="formularioalpellido"> 
            <p>Apellido *</p>
        <Form.Control  type="text"  placeholder="Apellido *"  />
        </div>
        <br/>
        <div className="formularioemail">
        <p>Dirección de correo electrónico *</p>
        <Form.Control type="email" placeholder="Email *" /> 
        </div>
        <br/>
        <div className="pais">
            <p>País *</p>
        <Form.Select aria-label="Default select example">
        <option>Seleccione pais</option>
        <option value="1">Argentina</option>
        <option value="2">Uruguay</option>   
        <option value="2">Brasil</option>  
        </Form.Select>
        </div>
        <br/>
        <div className="formulariodireccion">
            <p>Dirección *</p>
        <Form.Control  type="text"  placeholder="Provincia/Nombre y numero de calle"  />
        </div>
        <br/>
        <div className="formulariohotel">
            <p>Dirección Ushuaia *</p>
        <Form.Control  type="text"  placeholder="Hotel/Alojamiento"  />
        
        </div>
        <br/>
        <div className="formulariotelefono">
            <p>Celular *</p>
        <Form.Control  type="text"  placeholder="Celular *"  />
        
        </div>
    </div>
    )
}

export default Confirmar