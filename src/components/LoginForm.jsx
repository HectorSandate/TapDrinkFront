import React, { useState, useEffect } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../components/context/AuthContext';
import "../css/forms.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isButtonPressed, setIsButtonPressed] = useState(false); // Nuevo estado para controlar si el botón ha sido presionado

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Cambiar el estado de "botón presionado" después de 2 segundos
    if (isButtonPressed) {
      const timeout = setTimeout(() => {
        setIsButtonPressed(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isButtonPressed]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsButtonPressed(true); // Cambiar el estado de "botón presionado" al enviar el formulario
      const response = await axios.post("https://taplibkback.onrender.com/api/login", {
        email,
        password,
      });
      if (response.data) {
        const { token, userId, name, nivel } = response.data;
        console.log("Received token:", token);  
        console.log("Received user ID:", userId);
        console.log("Received user ID:", name);
        console.log("Received user ID:", nivel);  
        
        login({ token, userId, email, name,  nivel });  
        setLoginSuccess(true);
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setLoginError(true);
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          console.log(data.message);
        } else {
          console.log("Error al iniciar sesión. Por favor, verifica tus datos.");
          setLoginError(true);
        }
      } else {
        console.log("Error al comunicarse con el servidor.");
        alert(`Error del servidor`)
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    setIsButtonDisabled(!(email.trim() && password.trim()) || isButtonPressed); // Desactivar el botón si los campos están vacíos o el botón ha sido presionado recientemente
  };


  return (
    <div>
      <Card className="max-w-md mx-auto bg-black">
        <Card.Header className="text-center text-warning font-roboto-mono text-3xl">TapDrink</Card.Header>
        <Card.Text className="text-center card-text-style">¡Bienvenido de nuevo!</Card.Text>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingemail" label="Email" className="mb-3">
              <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Contraseña">
              <Form.Control type="password" placeholder="Contraseña" name="password" value={password} onChange={handleInputChange} />
            </FloatingLabel>
            <br />
            <Button className="col-md-12 custom-button btn btn-warning font-roboto-mono" type="submit" disabled={isButtonDisabled}>Iniciar Sesión</Button> {/* Agregar la propiedad 'disabled' */}
          </Form>
          <hr className="separator-style" />
          <div className="text-center register-text-style text-white font-roboto-mono text-base">¿Aún no tienes cuenta?</div>
          <div className="text-center">
            <Link to="/register" className="link-style text-yellow-500 underline cursor-pointer hover:text-warning">Regístrate aquí</Link>
          </div>
        </Card.Body>
      </Card>
      {loginSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div role="alert" className="alert alert-success bg-success text-white h-15 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Login Exitoso</span>
          </div>
        </div>
      )}
      {loginError && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div role="alert" className="alert alert-error bg-error text-white h-15 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error al Logear</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
