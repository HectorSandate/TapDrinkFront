import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import axios from "axios";

const UsersAc = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get("https://taplibkback.onrender.com/api/users/active");
      setUserData(response.data.users); // Actualizar el estado con los usuarios activos
    } catch (error) {
      console.error("Error al obtener datos:", error);
      toast.error("Error al obtener datos");
    }
    setLoading(false);
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
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <br />
            <Button className="col-md-12" variant="outline-warning" type="submit">
              {loading ? "Cargando..." : "Mostrar"}
            </Button>
          </Form>
          {userData && (
            <div>
              <h2>Usuarios Activos:</h2>
              <ul>
                {userData.map((user, index) => (
                  <li key={index}>
                    <p>Nombre: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Contraseña: {user.password}</p>
                    <p>Activo: {user.isActive ? "Sí" : "No"}</p>
                    <p>Fecha de Creación: {new Date(user.createdAt).toLocaleString()}</p>
                    <p>Fecha de Desactivación: {user.deactivatedAt ? new Date(user.deactivatedAt).toLocaleString() : "N/A"}</p>
                    {/* Agregar más campos según la estructura de usuario */}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="text-center">
            <Link to="/home">Atrás</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UsersAc;
