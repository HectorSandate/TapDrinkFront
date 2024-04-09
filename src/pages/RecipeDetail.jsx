import React, { useState, useEffect } from "react";
import BarNavi from "../components/HomeNav";
import RecipeCard from '../components/RecipeCard'; // Importa el componente RecipeCard
import "../css/recipeDetails.css";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); // Obtener el ID de la receta de los parámetros de la ruta
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://taplibkback.onrender.com/api/recetas/active/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log("Data from API:", data);
        setRecipe(data);
      })
      .catch(error => console.error("Error fetching recipe:", error));
  }, [id]); // Asegúrate de que useEffect se ejecute cada vez que cambie el ID


  return (
    <>
      <div className="bar-navigator-container">
        <BarNavi />
      </div>
      <div className="home-page-container black-background">
        <div className="container">
          <div className="row">
            {recipe && // Verificar si la receta está cargada antes de mostrarla
              <div className="col-md-12 ">
                <RecipeCard recipe={recipe} />
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
