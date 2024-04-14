// Login.jsx
import React, { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useAuth } from '../components/context/AuthContext';
import "../css/forms.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://taplibkback.onrender.com/api/login", {
        email,
        password,
      });
      if (response.data) {
        const { token, userId, name, nivel } = response.data;
        console.log("Received token:", token);  // Imprime el token recibido
        console.log("Received user ID:", userId);
        console.log("Received user ID:", name);
        console.log("Received user ID:", nivel);  // Imprime el ID del usuario recibido
        
        login({ token, userId, email, name,  nivel });  // Asumiendo que quieres almacenar el email también
        toast.success("Inicio de sesión exitoso");
        navigate("/home");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          toast.error(data.message);
        } else {
          toast.error("Error al iniciar sesión. Por favor, verifica tus datos.");
        }
      } else {
        toast.error("Error al comunicarse con el servidor.");
      }
    }
  };

  const headerStyle = { color: "#FFF711", fontFamily: "Roboto Mono, monospace", fontSize: "30px" };
  const buttonStyle = { fontFamily: "Roboto Mono, monospace" };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      <Card className="col-md-4" style={{ background: "black" }}>
        <Card.Header className="text-center" style={headerStyle}>TapDrink</Card.Header>
        <Card.Text className="text-center card-text-style">¡Bienvenido de nuevo!</Card.Text>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingemail" label="Email" className="mb-3">
              <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Contraseña">
              <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FloatingLabel>
            <br />
            <Button className="col-md-12 custom-button" variant="warning" style={buttonStyle} type="submit">Iniciar Sesión</Button>
          </Form>
          <hr className="separator-style" />
          <div className="text-center register-text-style">¿Aún no tienes cuenta?</div>
          <div className="text-center">
            <Link to="/register" className="link-style">Regístrate aquí</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
