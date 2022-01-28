import React from "react";
import logo from "./imagenes/logo.jpg"
//import "~bootstrap/scss/bootstrap";
import { Navbar, Nav, Container,} from "react-bootstrap"

const Barrasuperior = () => {

    return (
        // <div className="nav">
        //   <Navbar className="nav" collapseOnSelect expand="lg" bg="light" variant="light">
        //     <Container>
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //     <Navbar.Collapse id="responsive-navbar-nav">
        //       <a class="navbar-brand" href="/home">
        //         <img src={logo} width="80" height="80" alt=""/>
        //       </a>
        //       <Nav className="me-auto">
        //         <Nav.Link href="#features">Inicio</Nav.Link>
        //         <Nav.Link href="#pricing">Actividades</Nav.Link>
        //         <Nav.Link href="#pricing">Traslados</Nav.Link>
        //       </Nav>
        //       <Nav>
        //         <Nav.Link href="#deets">Nosotros</Nav.Link>
        //         <Nav.Link eventKey={2} href="#memes">Contacto</Nav.Link>
        //       </Nav>
        //     </Navbar.Collapse>
        //     </Container>
        //   </Navbar>
        // </div>
        
              // <div>
              //     <nav class="navbar navbar-dark" style={{backgroundColor: "#0077d7"}}>
              //         <div class="container-fluid">
              //             <a class="navbar-brand ml-0 mt-0 mb-0" href="#">
              //                 <img src={logo} width="350" height="60"  class="d-inline-block float-left" alt="Logo"/>
              //             </a>
              //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              //                 <span class="navbar-toggler-icon"></span>
              //             </button>
              //         </div>
              //     </nav>
      
              // </div>   
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/home">
                  <img src={logo} width="100" height="80" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="/">Inicio <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/Actividades">Actividades</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#traslados">Traslados</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/Nosotros">Nosotros</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/Contacto">Contacto</a>
                    </li>
                  </ul>
                </div>
              </nav>
      
   

    )
}

export default Barrasuperior;