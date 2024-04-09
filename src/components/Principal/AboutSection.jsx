import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import abutus from "../../assets/images/Pagina Principal/aboutus.png";

const AboutSection = () => {
  return (
    // Uso de Flexbox para centrar el contenido
    <div
      className="bg-white flex items-center justify-center"
      style={{
        minHeight: "100vh", // Asegura que la sección ocupe al menos todo el alto del viewport
        minWidth: "100vw", // Asegura que la sección ocupe al menos todo el ancho del viewport
        backgroundSize: "cover", // Que la imagen de fondo cubra toda la sección
        backgroundPosition: "center", // Centra la imagen de fondo
      }}
    >
      {/* Contenedor para el contenido interno con un máximo ancho y padding para respirar */}
      <div className="container mx-auto px-6 py-12 text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Sobre Nosotros
        </h2>
        <span className="block w-20 h-1 bg-yellow-500 mx-auto mb-8"></span>
       
        <p className="text-gray-600 text-lg mb-8">
          Virginia, looked up one of the more obscure Latin words, consectetur,
          from a Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable Virginia, looked up
          one of the more obscure Latin words, consectetur, from a Lorem Ipsum
          passage, and going through the cites of the word in classical
          literature, discovered the undoubtable
        </p>
        <button className="bg-yellow-500 p-4 rounded-full inline-flex items-center justify-center">
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
