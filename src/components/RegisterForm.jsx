import React, { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import axios from "axios";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Verifica que la contraseña y su confirmación coincidan
      if (password !== confirmPassword) {
        toast.warn('La contraseña y su confirmación no coinciden.');
        return;
      }
      const response = await axios.post(
        // "https://taplibkback.onrender.com/api/register",
        "http://localhost:4000/api/register",
        {
          name,
          email,
          password,
        }
      );
      console.log("Respuesta del servidor:", response.data);
      toast.success('Se registro correctamente');
      navigate("/");
    } catch (error) {
      console.error("Error al registrarse:", error);
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          toast.error(data.message);
        } else {
          toast.error("Error al registrarse. Por favor, verifica tus datos.");
        }
      } else {
        toast.error("Error al comunicarse con el servidor.");
      }
    }
  };
  
   const cardHeaderStyle = {
    color: '#FFF711',
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '30px',
  };

  const cardTextStyle = {
    color: '#FFFFFF',
    fontFamily: 'Roboto Mono, monospace', 
    fontSize: '20px',
  };

  const buttonStyle = {
    fontFamily: 'Roboto Mono, monospace', 
  };
  const separatorStyle = {
    margin: '20px 0',
    color: '#808080',
  };

  const registerTextStyle = {
    color: '#FFFFFF',
    fontFamily: 'Roboto Mono, monospace', 
    fontSize: '16px',
  };

  const linkStyle = {
    color: '#FFFF00', 
    textDecoration: 'underline', 
    cursor: 'pointer',
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
      <Card.Header className="text-center" style={cardHeaderStyle}>TapDrink</Card.Header>
      <Card.Text className="text-center" style={cardTextStyle}>
        Welcome Back!
      </Card.Text>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingName"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>

          {/* Campo para el email */}
          <FloatingLabel
            controlId="floatingEmail"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>

          {/* Campo para la contraseña */}
          <FloatingLabel 
            controlId="floatingPassword" 
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel controlId="confirmPassword" label="Confirmar Password">
            <Form.Control
              type="password"
              placeholder="Confirmar Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FloatingLabel>

          <br />
          <Button style={buttonStyle} className="col-md-12" variant="outline-warning" type="submit">
            Registrarse
          </Button>
        </Form>
        <hr style={separatorStyle} />

        <div className="text-center" style={registerTextStyle}>
          Ya tienes una cuenta?
        </div>

        <div className="text-center">
          <Link to="/" style={linkStyle}>
            Inicia sesion aquí
          </Link>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Register;
