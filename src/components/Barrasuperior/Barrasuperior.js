import React from "react";
import logo from "./imagenes/logo.jpg"
//import "~bootstrap/scss/bootstrap";
import { Navbar, Nav, Container,} from "react-bootstrap"

const Barrasuperior = () => {

    return (
        <div className="nav" width="120" height="100">
                <img src={logo} alt= " " width="120" height="100" />

<Navbar className="nav" collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Inicio</Nav.Link>
      <Nav.Link href="#pricing">Actividades</Nav.Link>
      <Nav.Link href="#pricing">Traslados</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider /> */}
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      {/* </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Nosotros</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>




                {/* <Nav.Link href="#features">Inicio</Nav.Link>
                <Nav.Link href="#pricing">actividades</Nav.Link>
                <Nav.Link href="#features">traslados</Nav.Link>
                <Nav.Link href="#pricing">nosotros</Nav.Link>
                <Nav.Link href="#pricing">contacto</Nav.Link> */}
               
     
    </div>    
   

    )
}

export default Barrasuperior;