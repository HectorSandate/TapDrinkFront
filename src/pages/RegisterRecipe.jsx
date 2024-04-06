import React from "react";
import BarNavi from "../components/HomeNav";
import "../css/HomePage.css";
import RecetaForm from "../components/RecipeForm";


function RegisterRecipe() {

  return (
    <>
      <div className="bar-navigator-container ">
        <BarNavi />
      </div>
      <div className="home-page-container black-background">
          <div className="search-page">
            <RecetaForm />
          </div>
      </div>
    </>
  );
}

export default RegisterRecipe;