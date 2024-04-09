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
        En TapDrik, estamos comprometidos a revolucionar la industria de las bebidas a través de soluciones tecnológicas innovadoras. Como pioneros en el desarrollo de software y dispositivos dispensadores de recetas, nuestro enfoque principal es establecer un estándar global para la calidad y consistencia de las bebidas. Creemos firmemente en la importancia de ofrecer experiencias de consumo excepcionales, y es por eso que nos esforzamos por brindar a nuestros clientes las herramientas necesarias para garantizar que cada sorbo sea una delicia.

Nuestra filosofía se centra en la excelencia, la innovación y la sostenibilidad. Buscamos activamente nuevas formas de optimizar nuestras soluciones tecnológicas para satisfacer las necesidades cambiantes de la industria de bebidas, al tiempo que nos comprometemos a hacerlo de manera sostenible y responsable. En TapDrik, nos enorgullecemos de proporcionar un servicio al cliente de primer nivel, asegurando una asistencia integral para la implementación y el uso óptimo de nuestros productos.

Con una pasión por la perfección en cada detalle, estamos decididos a allanar el camino hacia un futuro donde la calidad y el sabor excepcional de las bebidas estén al alcance de todos. En cada innovación, en cada interacción y en cada sorbo, estamos forjando un nuevo estándar para la industria de las bebidas, y estamos emocionados de compartir este viaje con nuestros clientes y socios. Juntos, estamos creando un mundo donde cada bebida servida cuenta una historia de excelencia y satisfacción.
        </p>
        <button className="bg-yellow-500 p-4 rounded-full inline-flex items-center justify-center">
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
