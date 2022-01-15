import React from 'react'
import { Card, CardGroup,Button, } from 'react-bootstrap'
import { AiFillInstagram } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import logo from "./imagenes/logo.jpg";
import turismo1 from "./imagenes/turismo.1.jpeg";
import turismo2 from "./imagenes/turismo.2.jpeg";
import turismo3 from "./imagenes/turismo.3.jpeg";
import turismo4 from "./imagenes/turismo.4.jpeg";
import aventura from "./imagenes/aventura.1.jpeg";
import "./Instagram.css"
//import {Link} from "react"

function Instagram() {
    return (
    <div>
<div className='boton'>
  <AiFillInstagram/>  <a href='https://www.instagram.com/southtripushuaia/' > southtripushuaia</a> 

</div>

          <div className='instagram'>
       
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={turismo1} height="500" width="300" />
                    <Card.Body>
                    </Card.Body>
                
                </Card>
                <Card>
                    <Card.Img variant="top" src={logo}  height="500" width="300"/>
                    <Card.Body>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={turismo2} height="500" width="300" />
                    <Card.Body>
                    </Card.Body>

                </Card>
            </CardGroup>
          </div>


          <div className='instagram2'>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={turismo3}  height="500" width="300"  />
                    <Card.Body>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src={turismo4}  height="500" width="300"  />
                    <Card.Body>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src={aventura}  height="500" width="300" />
                    <Card.Body>
                    </Card.Body>
                </Card>
            </CardGroup>
       
         </div>  

       <div>
           <a href='https://www.instagram.com'><img src="https://www.instagram.com/p/CXeP89gp_lO"></img> </a>
       </div>

            {/* <iframe width="300" height="300" src='https://www.instagram.com/p/CYPXEJ_qkFa/embed' frameborder="0"></iframe> 
            <iframe width="300" height="300" src='https://www.instagram.com/p/CXeP89gp_lO/embed' frameborder="0"></iframe>
            <iframe width="300" height="300" src='https://www.instagram.com/p/CXWqSL5J35J/embed' frameborder="0"></iframe> 
            <iframe width="300" height="300" src='https://www.instagram.com/p/CXNC9vwsTYR/embed' frameborder="0"></iframe>   */}
        
        <div className='boton2'>
        <Button href="https://www.instagram.com/southtripushuaia/"> <BsInstagram/> Siguenos en instagram</Button>
        </div> 
</div>


    )
}

export default Instagram
