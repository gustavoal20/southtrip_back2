import React from "react";
import { Carousel } from 'react-bootstrap';
import './carousel.css';
//import image1 from '../../img/1.jpg';
import portada1 from "./imagenes/portada1.jpg";
import portada2 from "./imagenes/portada2.jpg";
import portada3 from "./imagenes/portada3.jpg";
//import "./Portada.css"

const Portada = () => {

    return (
    <div className="portada">
        {/* <img src={portada} alt= " " /> */}
        <Carousel>
            <Carousel.Item interval={3000}>
                <img height={500} alt="..." src={portada1} class="d-block w-100"/>
                <Carousel.Caption>
                    <h2 class="font-weight-bold mt-2">
                        <span>Descubrí Ushuaia,</span> 
                        <span> El fin del Mundo</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img height={500} alt="..." src={portada2} class="d-block w-100"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img height={500} alt="..." src={portada3} class="d-block w-100"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>   
       
        
    </div>
    

    )
}

export default Portada