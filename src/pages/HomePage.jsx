import React from "react";
import BarNavi from "../components/HomeNav";
import "../css/HomePage.css";
//import { Link } from "react-router-dom";
import BebidaFormulario from "../components/HomeSearch";
import RecipeCard from '../components/Recipe';
import imagen1 from '../assets/images/coctel1.jpeg';


function HomePage() {
  const recipes = [
    {
      id: 1,
      title: 'Mojito',
      imageUrl: imagen1,
      description: 'Una bebida en base a tequila y limon con un toque de hierbabuena',
    },
    {
      id: 2,
      title: 'Mojito',
      imageUrl: imagen1,
      description: 'Una bebida en base a tequila y limon con un toque de hierbabuena',
    },
    {
      id: 3,
      title: 'Mojito',
      imageUrl: imagen1,
      description: 'Una bebida en base a tequila y limon con un toque de hierbabuena',
    },
  ];

  const handleRecipeClick = (recipeId) => {
    // Implementa la lógica para mostrar los detalles de la receta
    console.log(`Ver detalles de la receta ${recipeId}`);
  };

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
              <div className="col-md-4" key={recipe.id}>
                <RecipeCard
                  imageUrl={recipe.imageUrl}
                  title={recipe.title}
                  description={recipe.description}
                  onClick={() => handleRecipeClick(recipe.id)}
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