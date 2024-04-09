import React, { useState, useEffect } from "react";
import BarNavi from "../components/HomeNav";
import RecipeCard from '../components/RecipeCard'; // Importa el componente RecipeCard
import "../css/HomePage.css";

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null); // Cambiado de array a objeto único
  const recipeId = "your_recipe_id_here"; // ID de la receta deseada

  useEffect(() => {
    fetch(`https://taplibkback.onrender.com/api/recetas/active/${recipeId}`) // Modificado para obtener solo la receta con el ID específico
      .then(response => response.json())
      .then(data => {
        console.log("Data from API:", data);
        setRecipe(data); // Establecer la receta obtenida del backend
      })
      .catch(error => console.error("Error fetching recipe:", error));
  }, [recipeId]);

  return (
    <>
      <div className="bar-navigator-container">
        <BarNavi />
      </div>
      <div className="details-page-container black-background">
        <div className="container">
          <div className="row">
            {recipe && // Verificar si la receta está cargada antes de mostrarla
              <div className="col-md-12 recipe-card">
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
