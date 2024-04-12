import React, { useState, useEffect } from "react";
import BarNavi from "../components/HomeNav";
import "../css/HomePage.css";
import { useNavigate } from "react-router-dom";
import LicorCard from "../components/Licor";

function Licores() {
  const navigate = useNavigate();
  const [licor, setLicor] = useState([]);

  useEffect(() => {
    fetch("https://taplibkback.onrender.com/api/licores/active")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from API:", data);
        if (Array.isArray(data.licor)) {
          setLicor(data.licor);
        } else {
          console.error("Licor array not found in data:", data);
        }
      })
      .catch((error) => console.error("Error al traer los licores:", error));
  }, []);

  const handleRecipeClick = (licorId) => {
    navigate(`/detallesLicor/${licorId}`);
  };

  const handleEdit = (licorId) => {
    navigate(`/editLicor/${licorId}`);
  };  

  const handleDelete = (licorId, type) => {
    if (type === "temporary") {
      // Llama a la API para desactivar la receta
      fetch(`https://taplibkback.onrender.com/api/recetas/${licorId}/deactivate`, { method: "PUT" })
        .then((res) => res.json())
        .then(() => {
          // Actualiza tu estado o UI aquí
          console.log("Licor desactivada");
        });
    } else if (type === "permanent") {
      // Llama a la API para eliminar la receta permanentemente
      fetch(`https://taplibkback.onrender.com/api/recetas/${licorId}`, { method: "DELETE" })
        .then((res) => res.json())
        .then(() => {
          // Actualiza tu estado o UI aquí
          console.log("Licor eliminada permanentemente");
        });
    }
  };

  if (licor.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className="bar-navigator-container ">
        <BarNavi />
      </div>
      <div className="home-page-container black-background">
        <div className="search-page">
        </div>
        <div className="container">
          <div className="row">
            {licor.map((licor) => (
              <div className="col-md-4" key={licor._id}>
                <LicorCard
                  licorId={licor._id}
                  imageUrl={licor.image.secure_url}
                  title={licor.nombreLicor}
                  description={licor.mililitros} // o cualquier otra propiedad para 'description'
                  onClick={handleRecipeClick}
                  onDelete={handleDelete}
                  onEdit={handleEdit} // Pasar la función de eliminación
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Licores;