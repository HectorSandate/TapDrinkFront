import React, { useState, useEffect } from "react";
import mqtt from "mqtt";
import BarNavi from "../components/HomeNav";
import "../css/HomePage.css";
import { useNavigate } from "react-router-dom";
import BebidaFormulario from "../components/HomeSearch";
import RecipeCard from "../components/Recipe";

function HomePage() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [client, setClient] = useState(null);

  useEffect(() => {
    const mqttClient = mqtt.connect("http://test.mosquitto.org:8080/mqtt');");
    setClient(mqttClient);

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

    return () => {
      mqttClient.end();
    };
  }, []);

  const handleRecipeClick = (recipeId) => {
    navigate(`/detallesReceta/${recipeId}`);
  };

  const handleEdit = (recipeId) => {
    navigate(`/editReceta/${recipeId}`);
  };

  const handleDelete = (recipeId, type) => {
    if (type === "temporary") {
      fetch(`https://taplibkback.onrender.com/api/recetas/${recipeId}/deactivate`, { method: "PUT" })
        .then((res) => res.json())
        .then(() => {
          console.log("Receta desactivada");
        });
    } else if (type === "permanent") {
      fetch(`https://taplibkback.onrender.com/api/recetas/${recipeId}`, { method: "DELETE" })
        .then((res) => res.json())
        .then(() => {
          console.log("Receta eliminada permanentemente");
        });
    }
  };

  const publishProcedimiento = (procedimiento) => {
    if (client) {
      client.publish("recetas/procedimiento",procedimiento);
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
                  description={recipe.duracion}
                  onClick={handleRecipeClick}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onPublish={() => publishProcedimiento(recipe.procedimiento)}
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
