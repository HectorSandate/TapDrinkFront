import React, { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import '../css/forms.css';

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
        "https://taplibkback.onrender.com/api/register",
        {
          name,
          email,
          password,
        }
      );
      console.log("Respuesta del servidor:", response.data);
      toast.success('Se registró correctamente');
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

  const headerStyle = {
    color: '#FFF711',
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '30px',
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
        <Card.Header className="text-center"  style={headerStyle}>TapDrink</Card.Header>
        <Card.Text className="text-center card-text-style">Welcome Back!</Card.Text>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
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
            <Button className="col-md-12 custom-button" style={buttonStyle} variant="warning" type="submit">
              Registrarse
            </Button>
          </Form>
          <hr className="separator-style" />

          <div className="text-center register-text-style">Ya tienes una cuenta?</div>

          <div className="text-center">
            <Link to="/" className="link-style">Inicia sesión aquí</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;