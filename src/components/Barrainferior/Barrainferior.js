import React from "react";
import logo from "./imagenes/logo.jpg";
//import { FaInstagram } from 'react-icons/fa';
import { BsPinMap } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
//import { BsPinMap } from 'react-icons/bs';
import "./Barrainferior.css"

const Barrainferior = () => {

    return (
    <div className="barra">
    <a href="/">
        <img src={logo} alt= " " />
        </a>   
        <div className="barra__inferior">
            <p> <BsPinMap/> Rivadavia 234, ushuaia city</p>
            <p> <BsTelephone/> +54 267 456321</p>
            <p> <FiMail/> info@southrip.com.ar</p>
            <p> <BsWhatsapp/> +3462304065</p>
            <p>  ©Copyright 2022 Southrip</p>


        </div>    
       
        
        
    </div>
    

    )
}
export default Barrainferior