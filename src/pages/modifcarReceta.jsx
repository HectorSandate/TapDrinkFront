import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../css/modificarForm.css';
import { Label } from "../components/cartaPrueba/ui/label";
import { Input } from "../components/cartaPrueba/ui/input";


function ModificarRecetaForm({ recipeId, closeModal }) {
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
        closeModal();
        navigate("/home");
      } else {
        alert("Error al modificar la receta");
      }
    } catch (error) {
      console.error("Error al modificar la receta:", error);
      alert("Error al modificar la receta");
    }
  };


  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-Input bg-black dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Editar Receta
      </h2>
      <form onSubmit={handleSubmit} className="my-8 space-y-6">
        <div>
          <Label htmlFor="nombre" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">
            Nombre de la receta
          </Label>
          <Input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
          />
        </div>
        <div>
          <Label htmlFor="duracion" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">
            Duración
          </Label>
          <Input
            type="text"
            name="duracion"
            value={formData.duracion}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
          />
        </div>
        <div>
          <Label htmlFor="categoria" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">
            Categoría
          </Label>
          <Input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
          />
        </div>
        <div>
          <Label className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">Procedimiento</Label>
          {formData.procedimiento.map((paso, index) => (
            <div key={index} className="mb-4">
              <Label htmlFor={`paso-${index}`} className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">
                Paso {index + 1}
              </Label>
              <Input
                type="text"
                name="paso"
                value={paso.paso}
                onChange={(e) => handleStepChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
              />
              <Input
                type="text"
                name="licor"
                value={paso.licor}
                onChange={(e) => handleStepChange(index, e)}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
              />
              <Input
                type="number"
                name="cantidad"
                value={paso.cantidad}
                onChange={(e) => handleStepChange(index, e)}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
 
 
}  


export default ModificarRecetaForm;



