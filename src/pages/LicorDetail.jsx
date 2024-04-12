import React, { useState, useEffect } from "react";
import BarNavi from "../components/HomeNav";
import LicorCardDetail from "../components/LicorCard";
import "../css/recipeDetails.css";
import { useParams } from "react-router-dom";

function LicorDetail() {
  const { id } = useParams(); // Obtener el ID de la receta de los parámetros de la ruta
  const [licores, setLicor] = useState(null);

  useEffect(() => {
    fetch(`https://taplibkback.onrender.com/api/active/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log("Data from API:", data);
        setLicor(data);
      })
      .catch(error => console.error("Error fetching licor:", error));
  }, [id]);


  return (
    <>
      <div className="bar-navigator-container">
        <BarNavi />
      </div>
      <div className="home-page-container black-background">
        <div className="container">
          <div className="row mt-5">
            {licores && // Verificar si la receta está cargada antes de mostrarla
              <div className="col-md-12 mt-5">
                <LicorCardDetail licor={licores} />
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default LicorDetail;
