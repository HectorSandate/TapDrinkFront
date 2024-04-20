import React, { useState, useEffect } from "react";
import BarNavi from "../components/HomeNav";
import RecipeCard from '../components/RecipeCard'; // Importa el componente RecipeCard
import "../css/recipeDetails.css";
import { LampContainer } from "../components/cartaPrueba/ui/lamp.tsx";
import { motion } from "framer-motion";
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
      
      <div className="home-page-container black-background">
        <div className="overlay">
        <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            ></motion.h1>
          </LampContainer>
          <div className="overlay-content">
            {recipe && // Verificar si la receta está cargada antes de mostrarla
              <div className="col-md-12 ">
                <RecipeCard recipe={recipe} />
              </div>
            }
          </div>
          <div className="bar-navigator-container">
        <BarNavi />
      </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
