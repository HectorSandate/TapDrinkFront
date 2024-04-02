import React, { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(
        "http://localhost:4000/api/login",
        {
          email,
          password,
        }
      );
      console.log("Respuesta del servidor:", response.data);
      toast.success('Incio de sesion exitoso');
      navigate("/home");
    } catch (error) {
      console.error("Error al logearse:", error);
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          toast.error(data.message);
        } else {
          toast.error("Error al logearse. Por favor, verifica tus datos.");
        }
      } else {
        toast.error("Error al comunicarse con el servidor.");
      }
    }
  };

  const cardHeaderStyle = {
    color: "#FFF711",
    fontFamily: "Roboto Mono, monospace",
    fontSize: "30px",
  };

  const cardTextStyle = {
    color: "#FFFFFF",
    fontFamily: "Roboto Mono, monospace",
    fontSize: "20px",
  };

  const buttonStyle = {
    fontFamily: "Roboto Mono, monospace",
  };

  const separatorStyle = {
    margin: "20px 0",
    color: "#808080",
  };

  const registerTextStyle = {
    color: "#FFFFFF",
    fontFamily: "Roboto Mono, monospace",
    fontSize: "16px",
  };

  const linkStyle = {
    color: "#FFFF00",
    textDecoration: "underline",
    cursor: "pointer",
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
    <Card className="col-md-4" style={{ background: "black" }}>
      <Card.Header className="text-center" style={cardHeaderStyle}>
        TapDrink
      </Card.Header>
      <Card.Text className="text-center" style={cardTextStyle}>
        Welcome Back!
      </Card.Text>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingemail" label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          <br />
          <Button style={buttonStyle} className="col-md-12" variant="outline-warning" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
        <hr style={separatorStyle} />

        <div className="text-center" style={registerTextStyle}>
          Aún no tienes cuenta?
        </div>

        <div className="text-center">
          <Link to="/register" style={linkStyle}>
            Regístrate aquí
          </Link>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Login;
