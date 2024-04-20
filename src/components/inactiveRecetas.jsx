import React, { useEffect, useState } from "react";
import axios from "axios";

function InactiveRecetas() {
  const [recetas, setRecetas] = useState([]);
  const [inactiveSuccess, setInactiveSuccess] = useState(false);
  const [inactiveError, setInactiveError] = useState(false);

  useEffect(() => {
    fetchRecetas();
  }, [inactiveSuccess, inactiveError]);

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
      setInactiveSuccess(true);
      setInactiveError(false);
    } catch (error) {
      setInactiveError(true);
      setInactiveSuccess(false);
      console.error("Error activating recipe:", error);
    }
  };

  if (recetas.length === 0) {
    return (
      <div>
      <h2 className="mb-5 text-5xl font-bold text-black">No hay recetas inactivas!</h2>
          {inactiveSuccess && (
            <div role="alert" className="alert alert-success bg-success text-white h-15 w-60">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Activada Exitosamente</span>
            </div>
          )}
          {inactiveError && (
            <div role="alert" className="alert alert-error bg-error text-white h-15 w-60">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Error al activar</span>
            </div>
          )}
    </div>
    );  
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <h2 className="mb-5 text-black">Recetas Inactivas</h2>
      {inactiveSuccess && (
            <div role="alert" className="alert alert-success bg-success h-15 w-60">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Activada Exitosamente</span>
            </div>
          )}
          {inactiveError && (
            <div role="alert" className="alert alert-error bg-error h-15 w-60">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Error al activar</span>
            </div>
          )}
      {recetas.map((receta) => (
        <div className="bg-gray-100 p-4" key={receta._id}>
          <h3 className="font-bold text-black ">{receta.nombre}</h3>
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
