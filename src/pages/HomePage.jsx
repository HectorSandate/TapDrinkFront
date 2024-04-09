import React, { useState, useEffect } from "react";
import BarNavi from "../components/HomeNav";
import "../css/HomePage.css";
import { useNavigate } from 'react-router-dom';
import BebidaFormulario from "../components/HomeSearch";
import RecipeCard from '../components/Recipe';

function HomePage() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://taplibkback.onrender.com/api/recetas/active")
      .then(response => response.json())
      .then(data => {
        console.log("Data from API:", data);
        if (Array.isArray(data.recetas)) {
          setRecipes(data.recetas);
        } else {
          console.error("Recetas array not found in data:", data);
        }
      })
      .catch(error => console.error("Error al traer las recetas:", error));
  }, []);

  const handleRecipeClick = (recipeId) => {
    navigate(`/detallesReceta/${recipeId}`);
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
                    imageUrl={recipe.image.secure_url}
                    title={recipe.nombre}
                    onClick={() => handleRecipeClick(recipe._id)}
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
