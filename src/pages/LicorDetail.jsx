import React, { useState, useEffect } from "react";
import BarNavi from "../components/HomeNav";
import LicorCardDetail from "../components/LicorCard";
import "../css/recipeDetails.css";
import { useParams } from "react-router-dom";

function LicorDetail() {
    const { id } = useParams();
    const [licor, setLicor] = useState(null); // Cambiar el nombre de la variable de licor a singular
  
    useEffect(() => {
      fetch(`https://taplibkback.onrender.com/api/active/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log("Data from API:", data);
          setLicor(data.licor); // Acceder a la propiedad 'licor' del objeto de respuesta
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
              {licor && // Verificar si el licor está cargado antes de mostrarlo
                <div className="col-md-12 mt-5">
                  <LicorCardDetail licor={licor} />
                </div>
              }
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default LicorDetail;