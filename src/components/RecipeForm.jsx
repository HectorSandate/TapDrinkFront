import "../css/RecipeForm.css";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function RecetaForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    ingredientes: "",
    procedimiento: [],
    duracion: "",
    image: "",
    categoria: "",
  });

  // Nuevo estado para almacenar licores
  const [licor, setLicores] = useState([]);

  // Cargar licores al montar el componente
  useEffect(() => {
    fetch("https://taplibkback.onrender.com/api/licores/active")
      .then((response) => response.json())
      .then((data) => setLicores(data.licor))
      .catch((error) => console.error("Error al cargar licores:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStep = () => {
    setFormData({
      ...formData,
      procedimiento: [
        ...formData.procedimiento,
        { paso: "", licor: "", cantidad: "" },
      ],
    });
  };

  const handleRemoveStep = (index) => {
    const updatedProcedimiento = [...formData.procedimiento];
    updatedProcedimiento.splice(index, 1);
    setFormData({ ...formData, procedimiento: updatedProcedimiento });
  };

  const handleStepChange = (index, e) => {
    const updatedProcedimiento = [...formData.procedimiento];
    updatedProcedimiento[index][e.target.name] = e.target.value;
    setFormData({ ...formData, procedimiento: updatedProcedimiento });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nombre", formData.nombre);
    data.append("ingredientes", formData.ingredientes);
    data.append("procedimiento", JSON.stringify(formData.procedimiento));
    data.append("duracion", formData.duracion);
    data.append("categoria", formData.categoria);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await fetch(
        "https://taplibkback.onrender.com/api/recetas",
        {
          method: "POST",
          body: data,
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert("Receta enviada con éxito");
      } else {
        alert("Error al enviar la receta");
      }
    } catch (error) {
      console.error("Error al enviar la receta:", error);
      alert("Error al enviar la receta");
    }
  };

  const botonesStyle = {
    fontFamily: "Roboto Mono, monospace",
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-4">
        <div>
          <label htmlFor="nombre" className="block title-style">
            Nombre de la receta
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="mt-1 block px-3 py-2 rounded-md inputs-style"
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
            className="mt-1 block px-3 py-2 rounded-md inputs-style"
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
            className="mt-1 block px-2 py-2 rounded-md inputs-style"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="block title-style">Procedimiento</label>
        {formData.procedimiento.map((paso, index) => (
          <div key={index} className="flex space-x-2">
            <input
              type="text"
              name="paso"
              placeholder="Paso"
              value={paso.paso}
              onChange={(e) => handleStepChange(index, e)}
              className="px-3 py-2 rounded-md inputs-style"
            />

            {/* Cambiado de <input> a <select> */}
            <select
              name="licor"
              value={paso.licor}
              onChange={(e) => handleStepChange(index, e)}
              className="px-3 py-2 rounded-md inputs-style"
            >
              <option value="">Selecciona un licor</option>
              {licor.map((licor) => (
                <option key={licor._id} value={licor.nombreLicor}>
                  {licor.nombreLicor}
                </option>
              ))}
            </select>

            <input
              type="number"
              name="cantidad"
              placeholder="Cantidad (ml)"
              value={paso.cantidad}
              onChange={(e) => handleStepChange(index, e)}
              className="px-3 py-2 rounded-md inputs-style"
            />
            <Button
              type="button"
              onClick={() => handleRemoveStep(index)}
              variant="danger"
              className="px-3 py-2 delete-button rounded-md"
              style={botonesStyle}
            >
              Eliminar
            </Button>
          </div>
        ))}

        <Button
          type="button"
          onClick={handleAddStep}
          className="mt-2 px-3 py-2 add-button rounded-md"
          variant="info"
          style={botonesStyle}
        >
          Agregar otro paso
        </Button>
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block mb-2">
          Imagen
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="img-style rounded-md py-2 px-3"
          onChange={handleImageChange}
        />
      </div>
      <Button
        type="submit"
        className="px-3 py-2 post-button rounded-md"
        variant="success"
        style={botonesStyle}
      >
        Enviar receta
      </Button>
    </form>
  );
}

export default RecetaForm;
