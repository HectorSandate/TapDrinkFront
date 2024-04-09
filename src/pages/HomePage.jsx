import React, { useState, useEffect } from "react";
import BarNavi from "../components/HomeNav";
import "../css/HomePage.css";
import { useNavigate } from "react-router-dom";
import BebidaFormulario from "../components/HomeSearch";
import RecipeCard from "../components/Recipe";

function HomePage() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://taplibkback.onrender.com/api/recetas/active")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from API:", data);
        if (Array.isArray(data.recetas)) {
          setRecipes(data.recetas);
        } else {
          console.error("Recetas array not found in data:", data);
        }
      })
      .catch((error) => console.error("Error al traer las recetas:", error));
  }, []);

  const handleRecipeClick = (recipeId) => {
    navigate(`/detallesReceta/${recipeId}`);
  };

  const handleEdit = (recipeId) => {
    navigate(`/editReceta/${recipeId}`);
  };  

  const handleDelete = (recipeId, type) => {
    if (type === "temporary") {
      // Llama a la API para desactivar la receta
      fetch(`https://taplibkback.onrender.com/api/recetas/${recipeId}/deactivate`, { method: "PUT" })
        .then((res) => res.json())
        .then(() => {
          // Actualiza tu estado o UI aquí
          console.log("Receta desactivada");
        });
    } else if (type === "permanent") {
      // Llama a la API para eliminar la receta permanentemente
      fetch(`https://taplibkback.onrender.com/api/recetas/${recipeId}`, { method: "DELETE" })
        .then((res) => res.json())
        .then(() => {
          // Actualiza tu estado o UI aquí
          console.log("Receta eliminada permanentemente");
        });
    }
  };

  if (recipes.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className="bar-navigator-container ">
        <BarNavi />
      </div>
      <div className="home-page-container black-background">
        <div className="search-page">
          <BebidaFormulario />
        </div>
        <div className="container">
          <div className="row">
            {recipes.map((recipe) => (
              <div className="col-md-4" key={recipe._id}>
                <RecipeCard
                  recipeId={recipe._id}
                  imageUrl={recipe.image.secure_url}
                  title={recipe.nombre}
                  description={recipe.duracion} // o cualquier otra propiedad para 'description'
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

export default HomePage;
