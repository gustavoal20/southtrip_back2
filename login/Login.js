import React from "react";
import {Form, Button, Card} from "react-bootstrap";
import "./Login.css"

const Login = () => {

    return (
<div className="Login">
    <Card>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su usuario" />
            <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="mostrar" />
        </Form.Group> */}
        <div className="Button">
        <Button  variant="primary" type="submit">
            Ingresar
        </Button>
        </div>
        </Form>
     </Card>
</div>
 )
}
export default Login