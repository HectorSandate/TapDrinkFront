import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../css/modificarForm.css';
import { Label } from "../components/cartaPrueba/ui/label";
import { Input } from "../components/cartaPrueba/ui/input";


function ModificarLicorForm() {
  const { licorId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombreLicor: '',
    mililitros: '',
  });

  useEffect(() => {
    const fetchLicor = async () => {
      try {
        const response = await fetch(`https://taplibkback.onrender.com/api/active/${licorId}`);
        if (!response.ok) {
          throw new Error("Error al cargar el licor");
        }
        const data = await response.json();
        setFormData({
          nombreLicor: data.licor.nombreLicor,
          mililitros: data.licor.mililitros,
        });
      } catch (error) {
        console.error("Error al cargar el licor:", error);
      }
    };

    fetchLicor();
  }, [licorId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("nombreLicor", formData.nombreLicor);
    formDataToSend.append("mililitros", formData.mililitros);

    try {
      const response = await fetch(`https://taplibkback.onrender.com/api/licor/modificar/${licorId}`, {
        method: "PUT",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Licor modificado con éxito");
        navigate("/home");
      } else {
        alert("Error al modificar el licor");
      }
    } catch (error) {
      console.error("Error al modificar el licor:", error);
      alert("Error al modificar el licor");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nombreLicor" className="block title-style">
              Nombre del licor
            </Label>
            <Input
              type="text"
              name="nombreLicor"
              value={formData.nombreLicor}
              onChange={handleChange}
              className="mt-1 block w-full Inputs-style"
            />
          </div>
          <div>
            <Label htmlFor="mililitros" className="block title-style">
                Mililitros
            </Label>
            <Input
              type="text"
              name="mililitros"
              value={formData.mililitros}
              onChange={handleChange}
              className="mt-1 block w-full Inputs-style"
            />
          </div>
          <Button type="submit" variant="primary" className="post-button">
            Guardar cambios
          </Button>
        </form>
      </div>
    </div>
  );
}



export default ModificarLicorForm;
 