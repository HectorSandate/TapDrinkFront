import React, { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { Link} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import axios from "axios";

const RegisterLic = () => {
  const [nombreLicor, setNombreL] = useState("");
  const [mililitros, setMililitros] = useState("");
  const [estado, setEstado] = useState(false); // Cambiado a un estado booleano

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://taplibkback.onrender.com/api/ingresarLicor",
        {
            nombreLicor,
            mililitros,
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
              label="NameLicor"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="NameLicor"
                value={nombreLicor}
                onChange={(e) => setNombreL(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingEmail"
              label="mililitros"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="mililitros"
                value={mililitros}
                onChange={(e) => setMililitros(e.target.value)}
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

export default RegisterLic;
