import React, { useState, useEffect } from "react";
import BarNavi from "../components/HomeNav.jsx";
import "../css/HomePage.css";
import { useNavigate } from "react-router-dom";
import LicorCard from "../components/Licor";
import { PinContainer } from "../components/cartaPrueba/ui/3d-pin.tsx";
import Modal from "../components/modal/Modal.jsx";
import InactiveLicores from "../components/InactiveLicores.jsx";
import { LampContainer } from "../components/cartaPrueba/ui/lamp.tsx";
import { motion } from "framer-motion";

function Licores() {
  const navigate = useNavigate();
  const [licor, setLicor] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (e) => {
    e.preventDefault(); // Prevenir la navegación del <a> si existe
    e.stopPropagation(); // Detener la propagación para evitar efectos secundarios
    setModalOpen(!isModalOpen);
  };
  useEffect(() => {
    fetch("https://taplibkback.onrender.com/api/licores/active")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from API:", data);
        if (Array.isArray(data.licor)) {
          setLicor(data.licor);
        } else {
          console.error("Licor array not found in data:", data);
        }
      })
      .catch((error) => console.error("Error al traer los licores:", error));
  }, []);

  const handleRecipeClick = (licorId) => {
    navigate(`/detallesLicor/${licorId}`);
  };

  const handleEdit = (licorId) => {
    navigate(`/editLicor/${licorId}`);
  };

  const handleDelete = (licorId, type) => {
    if (type === "temporary") {
      // Llama a la API para desactivar la receta
      fetch(
        `https://taplibkback.onrender.com/api/licores/${licorId}/deactivate`,
        { method: "PUT" }
      )
        .then((res) => res.json())
        .then(() => {
          // Actualiza tu estado o UI aquí
          alert("Licor desactivado");
          console.log(licorId);
          console.log("Licor desactivada");
        });
    } else if (type === "permanent") {
      // Llama a la API para eliminar la receta permanentemente
      fetch(`https://taplibkback.onrender.com/api/licores/${licorId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          // Actualiza tu estado o UI aquí
          alert("Licor eliminado permanentemente");
          console.log(licorId);
          console.log("Licor eliminada permanentemente");
        });
    }
  };

  if (licor.length === 0) {
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
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            ></motion.h1>
          </LampContainer>
          <div className="h-[40rem] w-full flex items-center justify-center"></div>
          <div className="overlay-content">
            <div className="search-page"></div>
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
            <div className="container">
              <div className="row">
                {licor.map((licor) => (
                  <div className="col-md-4" key={licor._id}>
                    <LicorCard
                      licorId={licor._id}
                      imageUrl={licor.image.secure_url}
                      title={licor.nombreLicor}
                      description={licor.mililitros} // o cualquier otra propiedad para 'description'
                      onClick={handleRecipeClick}
                      onDelete={handleDelete}
                      onEdit={handleEdit} // Pasar la función de eliminación
                    />
                  </div>
                ))}
              </div>
              {isModalOpen && (
                <Modal isOpen={isModalOpen} close={toggleModal}>
                  <InactiveLicores />
                </Modal>
              )}
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

export default Licores;
