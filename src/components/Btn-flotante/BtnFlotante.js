import React from 'react';
import './Btn.css';
import whatsapp from './wapp2.png';

const BtnFlotante = () => {
    return(
        <div class="fl-fl float-tw">
            <a href="" target="_blank">
                <img src={whatsapp} class="d-inline-block align-top" alt="Logo"/>
            </a>
            
        </div>
    )
}

export default BtnFlotante;
//style={{backgroundColor: "#0077d7"}}