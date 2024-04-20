import React, { useState, useEffect } from "react";
import BarNavi from "../components/HomeNav";
import mqtt from "mqtt";
import { useNavigate } from "react-router-dom";
import BebidaFormulario from "../components/HomeSearch";
import RecipeCard from "../components/Recipe";
import { motion } from "framer-motion";
import { LampContainer } from "../components/cartaPrueba/ui/lamp.tsx";
import { PinContainer } from "../components/cartaPrueba/ui/3d-pin.tsx";
import { useAuth } from "../components/context/AuthContext.jsx";
import Modal from "../components/modal/Modal.jsx";
import InactiveRecetas from "../components/inactiveRecetas.jsx";
import ModificarRecetaForm from "./modifcarReceta.jsx";

function HomePage() {
  const { user } = useAuth(); // Usando el contexto para obtener la información del usuario
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [client, setClient] = useState(null);

  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleModifyClick = (recipeId) => {
    setSelectedRecipeId(recipeId);
    setIsModifyModalOpen(true);
  };

  const closeModifyModal = () => {
    setIsModifyModalOpen(false);
    setSelectedRecipeId(null);
  };

  useEffect(() => {
    // Connect to a secure WebSocket endpoint (WSS) instead of an insecure one
    const mqttClient = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
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

  const publishProcedimiento = (procedimiento) => {
    if (client) {
      client.publish("recetas/procedimiento", procedimiento);
    }
  };

  const toggleModal = (e) => {
    e.preventDefault(); // Prevenir la navegación del <a> si existe
    e.stopPropagation(); // Detener la propagación para evitar efectos secundarios
    setModalOpen(!isModalOpen);
  };

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

  const handleDelete = (recipeId, type) => {
    const url = `https://taplibkback.onrender.com/api/recetas/${recipeId}${
      type === "temporary" ? "/deactivate" : ""
    }`;
    fetch(url, {
      method: type === "temporary" ? "PUT" : "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        // Filtra la receta eliminada del estado local para actualizar la UI inmediatamente
        const updatedRecipes = recipes.filter(
          (recipe) => recipe._id !== recipeId
        );
        setRecipes(updatedRecipes); // Actualiza el estado con el nuevo array de recetas
        console.log(
          type === "temporary"
            ? "Receta desactivada"
            : "Receta eliminada permanentemente"
        );
      })
      .catch((error) => console.error("Error al modificar la receta:", error));
  };

  const handleFilter = (nombre, categoria) => {
    let url = "https://taplibkback.onrender.com/api/recetas/active";
    if (nombre) {
      url += `/nombre/${nombre}`;
    } else if (categoria) {
      url += `/categoria/${categoria}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from API:", data);
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          console.error("Recetas array not found in data:", data);
        }
      })
      .catch((error) => console.error("Error al traer las recetas:", error));
  };

  const handleClearFilter = () => {
    // Llama a la API para obtener todas las recetas nuevamente
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
  };

  // if (recipes.length === 0) {
  //   return <p>Cargando...</p>;
  // }
  console.log(user);

  return (
    <>
      <div className="home-page-container black-background">
        <div className="overlay-container">
          <LampContainer className="h-screen w-screen">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            ></motion.h1>
          </LampContainer>

          <div className="overlay-content">
            <div className="search-page">
              {user && (
                <div>
                  <p>
                    Bienvenido, {user.name} NIvel: {user.nivel}
                  </p>
                </div>
              )}
              {user && user.nivel !== "user" && (
                <div>
                  <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                  >
                    <div
                      onClick={toggleModal}
                      className="flex basis-full flex-col p-1 tracking-left text-slate-200/50 sm:basis-1/2 w-[15rem] h-[10rem]"
                    >
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        Inactivos
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500">
                          Desplegar elementos inactivos
                        </span>
                      </div>
                      <div className="flex flex-auto w-full rounded-lg mt-4 bg-gradient-to-br from-yellow-500 via-white-500 to-orange-500" />
                    </div>
                  </PinContainer>
                </div>
              )}

              <BebidaFormulario
                onFilter={handleFilter}
                onClearFilter={handleClearFilter}
              />
            </div>
            <div className="recipe-grid">
              {recipes.slice(0, 3).map((recipe) => (
                <div key={recipe._id}>
                  <RecipeCard
                    recipeId={recipe._id}
                    imageUrl={recipe.image.secure_url}
                    title={recipe.nombre}
                    description={recipe.duracion}
                    onModify={handleModifyClick} // Agrega esta línea
                    onDelete={handleDelete}
                    onPublish={() => publishProcedimiento(recipe.procedimiento)}
                  />
                </div>
              ))}
            </div>
            {isModifyModalOpen && (
              <Modal isOpen={isModifyModalOpen} close={closeModifyModal}>
                <ModificarRecetaForm recipeId={selectedRecipeId} />
              </Modal>
            )}
            ,
            {isModalOpen && (
              <Modal isOpen={isModalOpen} close={toggleModal}>
                <InactiveRecetas />
              </Modal>
            )}
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
