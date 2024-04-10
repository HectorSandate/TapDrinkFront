import React, { useEffect, useState } from "react";
import axios from "axios";

function InactiveRecetas() {
  const [recetas, setRecetas] = useState([]);
  //RECETAS ---------------------------------------------------------------------------------------------------
  useEffect(() => {
    // Cargar recetas inactivas
    const fetchRecetas = async () => {
      const res = await axios.get(
        "https://taplibkback.onrender.com/api/inactive"
      );
      setRecetas(res.data.recetas);
    };

    fetchRecetas();
  }, []);

  // Función para activar receta
  const activateReceta = async (id) => {
    await axios.put(
      `https://taplibkback.onrender.com/api/recetas/activate/${id}`
    );
    // Actualizar el estado para reflejar el cambio
    setRecetas(recetas.filter((receta) => receta._id !== id));
  };

  

  return (
    <div className="grid grid-cols-3 gap-4">
    <h2>Recetas</h2>
      {recetas.map((receta) => (
        <div className="bg-gray-100 p-4" key={receta._id}>
          <h3 className="font-bold">{receta.nombre}</h3>
          <p>{receta.categoria}</p>
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
