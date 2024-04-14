import React, { useState, useEffect, useContext } from "react";
import BarNavi from "../components/HomeNav";
import "../css/HomePage.css";
import { useNavigate } from "react-router-dom";
import BebidaFormulario from "../components/HomeSearch";
import RecipeCard from "../components/Recipe";
import { UserContext } from "../components/context/UserContext.jsx";

import { motion } from "framer-motion";
import { LampContainer } from "../components/cartaPrueba/ui/lamp.tsx";



function HomePage() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const { userData } = useContext(UserContext);

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
  }, []); // Solo se ejecuta una vez al montar el componente
  
  useEffect(() => {
    if (userData !== undefined) { // Verifica si userData no es undefined
      console.log("Datos del contexto después de iniciar sesión:", userData);
    }
  }, [userData]); // Se ejecuta cuando userData cambia
  const handleRecipeClick = (recipeId) => {
    navigate(`/detallesReceta/${recipeId}`);
  };

  // const handleEdit = (recipeId) => {
  //   navigate(`/editReceta/${recipeId}`);
  // };

  const handleDelete = (recipeId, type) => {
    if (type === "temporary") {
      // Llama a la API para desactivar la receta
      fetch(
        `https://taplibkback.onrender.com/api/recetas/${recipeId}/deactivate`,
        { method: "PUT" }
      )
        .then((res) => res.json())
        .then(() => {
          // Actualiza tu estado o UI aquí
          console.log("Receta desactivada");
        });
    } else if (type === "permanent") {
      // Llama a la API para eliminar la receta permanentemente
      fetch(`https://taplibkback.onrender.com/api/recetas/${recipeId}`, {
        method: "DELETE",
      })
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
      <div className="home-page-container black-background">
        <div className="overlay-container">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: Infinity,  // Aquí se establece la duración como Infinity
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            ></motion.h1>
          </LampContainer>

          <div className="overlay-content">
            <div className="search-page">
              <BebidaFormulario />
            </div>
            <div className="recipe-grid">
            {recipes.slice(0, 3).map((recipe) => (
                <div key={recipe._id}>
                  <RecipeCard
                    recipeId={recipe._id}
                    imageUrl={recipe.image.secure_url}
                    title={recipe.nombre}
                    description={recipe.duracion}
                    onClick={handleRecipeClick}
                    onDelete={handleDelete}
                  />
                </div>
              ))}
            </div>
            <div className="bar-navigator-container">
              <BarNavi />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;