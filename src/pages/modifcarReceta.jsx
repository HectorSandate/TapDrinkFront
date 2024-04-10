import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../css/modificarForm.css'; // Asegúrate de ajustar el nombre del archivo de estilos según sea necesario.

function ModificarRecetaForm() {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    procedimiento: [],
    duracion: "",
    categoria: "",
  });

  useEffect(() => {
    fetch(`https://taplibkback.onrender.com/api/recetas/active/${recipeId}`)
      .then((response) => response.json())
      .then((data) => {
        const procedimientoArray = JSON.parse(data.procedimiento);
        setFormData({
          ...data,
          procedimiento: procedimientoArray,
          imagen: null,
        });
      })
      .catch((error) => console.error("Error al cargar la receta:", error));
  }, [recipeId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStepChange = (index, e) => {
    const updatedProcedimiento = [...formData.procedimiento];
    updatedProcedimiento[index] = {
      ...updatedProcedimiento[index],
      [e.target.name]: e.target.value,
    };
    setFormData({ ...formData, procedimiento: updatedProcedimiento });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const procedimientoJSON = JSON.stringify(formData.procedimiento);
    const formDataToSend = new FormData();
    formDataToSend.append("nombre", formData.nombre);
    formDataToSend.append("procedimiento", procedimientoJSON);
    formDataToSend.append("duracion", formData.duracion);
    formDataToSend.append("categoria", formData.categoria);

    try {
      const response = await fetch(`https://taplibkback.onrender.com/api/recetas/${recipeId}`, {
        method: "PUT",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Receta modificada con éxito");
        navigate("/");
      } else {
        alert("Error al modificar la receta");
      }
    } catch (error) {
      console.error("Error al modificar la receta:", error);
      alert("Error al modificar la receta");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block title-style">
              Nombre de la receta
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="mt-1 block w-full inputs-style"
            />
          </div>
          <div>
            <label htmlFor="duracion" className="block title-style">
              Duración
            </label>
            <input
              type="text"
              name="duracion"
              value={formData.duracion}
              onChange={handleChange}
              className="mt-1 block w-full inputs-style"
            />
          </div>
          <div>
            <label htmlFor="categoria" className="block title-style">
              Categoría
            </label>
            <input
              type="text"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              className="mt-1 block w-full inputs-style"
            />
          </div>
          <div>
            <label className="block title-style">Procedimiento</label>
            {formData.procedimiento.map((paso, index) => (
              <div key={index} className="mb-2">
                <label htmlFor={`paso-${index}`} className="block title-style">
                  Paso {index + 1}
                </label>
                <input
                  type="text"
                  name="paso"
                  value={paso.paso}
                  onChange={(e) => handleStepChange(index, e)}
                  className="mt-1 block w-full inputs-style"
                />
                <input
                  type="text"
                  name="licor"
                  value={paso.licor}
                  onChange={(e) => handleStepChange(index, e)}
                  className="mt-4  block w-full inputs-style"
                />
                <input
                  type="number"
                  name="cantidad"
                  value={paso.cantidad}
                  onChange={(e) => handleStepChange(index, e)}
                  className="mt-1 block w-full inputs-style"
                />
              </div>
            ))}
          </div>
          <Button type="submit" variant="primary" className="post-button">
            Guardar cambios
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ModificarRecetaForm;
