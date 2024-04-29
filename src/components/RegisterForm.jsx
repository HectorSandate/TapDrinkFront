import React, { useState, useEffect } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/forms.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(!(name && email && password && confirmPassword));
  }, [name, email, password, confirmPassword, registerSuccess, registerError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Verifica que la contraseña y su confirmación coincidan
      if (password !== confirmPassword) {
        alert('La contraseña y su confirmación no coinciden.');
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
      setRegisterSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      setRegisterError(true);
      console.error("Error al registrarse:", error);
      if (error.response) {
        const { status, data } = error.response;
        setRegisterError(true);
        if (status === 401) {
          console.log(data.message);
          setRegisterError(true);
        } else {
          console.log("Error al registrarse. Por favor, verifica tus datos.");
          setRegisterError(true);
        }
      } else {
        console.log("Error al comunicarse con el servidor.");
        setRegisterError(true);
      }
    }
  };

  return (
    <div>
      <Card className="max-w-md mx-auto bg-black">
    <Card.Header className="text-center text-warning font-roboto-mono text-3xl py-1">TapDrink</Card.Header>
    <Card.Text className="text-center card-text-style text-base">¡Bienvenido de nuevo!</Card.Text>
    <Card.Body>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingName" label="Nombre" className="mb-2">
          <Form.Control type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} className="text-sm" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-2">
          <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-sm" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Contraseña" className="mb-2">
          <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="text-sm" />
        </FloatingLabel>
        <FloatingLabel controlId="confirmPassword" label="Confirmar Contraseña" className="mb-2">
          <Form.Control type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="text-sm" />
        </FloatingLabel>
        <Button className="col-md-12 custom-button btn btn-warning font-roboto-mono text-sm py-2" variant="warning" type="submit" disabled={isButtonDisabled}>
          Registrarse
        </Button>
      </Form>
      <hr className="separator-style" />
      <div className="text-center register-text-style text-white font-roboto-mono text-sm">¿Ya tienes cuenta?</div>
      <div className="text-center">
        <Link to="/login" className="link-style text-yellow-500 underline text-sm cursor-pointer hover:text-warning">
          Inicia Sesión aquí
        </Link>
      </div>
    </Card.Body>
  </Card>
      {registerSuccess && (
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
              <div role="alert" className="alert alert-success bg-success text-white h-15 w-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Registro Exitoso</span>
              </div>
            </div>
          )}
          {registerError && (
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
              <div role="alert" className="alert alert-error bg-error text-white h-15 w-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error al registrar</span>
              </div>
            </div>
          )}
    </div>
  );
};

export default Register;
