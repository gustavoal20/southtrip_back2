import React from 'react'
import { Card, CardGroup,Button, Image, CardImg} from 'react-bootstrap'
import { AiFillInstagram } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import logo from "./imagenes/logo.jpg";
import turismo1 from "./imagenes/turismo.1.jpeg";
import turismo2 from "./imagenes/turismo.2.jpeg";
import turismo3 from "./imagenes/turismo.3.jpeg";
import turismo4 from "./imagenes/turismo.4.jpeg";
import aventura from "./imagenes/aventura.1.jpeg";
import "./Instagram.css"
import faro from "./imagenes/faro.jpeg"




//import {Link} from "react"




function Instagram() {
    return (
        


    <div className='instagram'>
        <div className='botonin'>
            <AiFillInstagram/>  <a href='https://www.instagram.com/southtripushuaia/' target="_blank"> southtripushuaia</a> 

    </div>
        {/* <div className='img__insta'>
            <img src={faro} width='50%'></img>
        </div> */}
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <a href='https://www.instagram.com/p/CZHb7w0LTTR/' target="_blank">
                    <img src={turismo1} width='100%' height='100%'></img></a>
                </div>
                <div className="col-4">
                    <img src={faro} width='100%' height='100%'/>
                </div>
                <div className="col-4">
                    <img src={faro} width='100%' height='100%'/>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img src={faro} width='100%' height='100%'/>
                </div>
                <div className="col-4">
                <img src={faro} width='100%' height='100%'/>
                </div>
                <div className="col-4">
                <img src={faro} width='100%' height='100%'/>
                </div>
            </div>
        </div>
        
        <div className='boton2'>
        <Button href="https://www.instagram.com/southtripushuaia/" target="_blank"> <BsInstagram/> Siguenos en instagram</Button>
        </div> 
</div>


    )
}

export default Instagram
