import React, { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { Link} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import axios from "axios";

const RegisterBar = () => {
  const [nombreBar, setNombreB] = useState("");
  const [direccion, setDireccion] = useState("");
  const [estado, setEstado] = useState(false); // Cambiado a un estado booleano

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://taplibkback.onrender.com/api/registerBar",
        {
          nombreBar,
          direccion,
          estado,
        }
      );
      console.log("Respuesta del servidor:", response.data);
      toast.success('Se registró correctamente');
    } catch (error) {
      console.error("Error al registrarse:", error);
      toast.success('Se registró correctamente');
    }
  };
  
  const buttonStyle = {
    fontFamily: 'Roboto Mono, monospace', 
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Card className="col-md-4" style={{ background: 'black' }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingName"
              label="NameBar"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="NameBar"
                value={nombreBar}
                onChange={(e) => setNombreB(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingEmail"
              label="Direccion"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </FloatingLabel>

            <Form.Group className="mb-3">
              <Form.Check
                type="switch"
                id="estadoSwitch"
                label="Estado"
                checked={estado}
                onChange={(e) => setEstado(e.target.checked)}
              />
            </Form.Group>

            <br />
            <Button style={buttonStyle} className="col-md-12" variant="outline-warning" type="submit">
              Registrarlo
            </Button>
          </Form>

          <div className="text-center">
            <Link to="/home">Atrás</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterBar;
