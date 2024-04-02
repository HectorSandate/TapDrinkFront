import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import axios from "axios";

const BarAc = () => {
  const [barData, setBarData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/api/bars/active");
      setBarData(response.data.bars); // Actualizar el estado con los bares activos
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
          {barData && (
            <div>
              <h2>Bares Activos:</h2>
              <ul>
                {barData.map((bar, index) => (
                  <li key={index}>
                    <p>Nombre: {bar.nombreBar}</p>
                    <p>Dirección: {bar.direccion}</p>
                    <p>Activo: {bar.estado ? "Sí" : "No"}</p>
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

export default BarAc;
