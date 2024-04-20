import React, { useEffect, useState } from "react";
import axios from "axios";

function InactiveRecetas() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    fetchRecetas();
  }, []);

  const fetchRecetas = async () => {
    try {
      const res = await axios.get("https://taplibkback.onrender.com/api/inactive");
      setRecetas(res.data.recetas);
    } catch (error) {
      console.error("Error fetching inactive recipes:", error);
      setRecetas([]);
    }
  };

  const activateReceta = async (id) => {
    try {
      await axios.put(`https://taplibkback.onrender.com/api/recetas/activate/${id}`);
      // Elimina la receta activada del estado
      const updatedRecetas = recetas.filter(receta => receta._id !== id);
      setRecetas(updatedRecetas);
    } catch (error) {
      console.error("Error activating recipe:", error);
    }
  };

  if (recetas.length === 0) {
    return <h2 className="mb-5 text-5xl font-bold text-black">No hay recetas inactivas!</h2>
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <h2 className="text-black">Recetas Inactivas</h2>
      {recetas.map((receta) => (
        <div className="bg-gray-100 p-4" key={receta._id}>
          <h3 className="font-bold text-black">{receta.nombre}</h3>
          <p className="text-black">{receta.categoria}</p>
          <button
            className="bg-blue-500 text-white p-2 mt-2"
            onClick={() => activateReceta(receta._id)}
          >
            Activar
          </button>
        </div>
      ))}
    </div>
  );
}

export default InactiveRecetas;
