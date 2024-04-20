import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../css/modificarForm.css';
import { Label } from "../components/cartaPrueba/ui/label";
import { Input } from "../components/cartaPrueba/ui/input";


function ModificarLicorForm({ licorId, closeModal }) {
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
          const errorData = await response.json();
          throw new Error(`Error ${response.status}: ${errorData.message}`);
        }
        const data = await response.json();
        setFormData({
          nombreLicor: data.licor.nombreLicor,
          mililitros: data.licor.mililitros,
        });
      } catch (error) {
        console.error("Error al cargar el licor:", error);
        alert(`Error al cargar el licor: ${error.message}`);
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
        closeModal();
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
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-Input bg-black dark:bg-black">
      <div className="form-box">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nombreLicor" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">
              Nombre del licor
            </Label>
            <Input
              type="text"
              name="nombreLicor"
              value={formData.nombreLicor}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
            />
          </div>
          <div>
            <Label htmlFor="mililitros" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">
                Mililitros
            </Label>
            <Input
              type="text"
              name="mililitros"
              value={formData.mililitros}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
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
 