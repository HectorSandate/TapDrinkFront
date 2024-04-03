// LoginPage.js

import React from "react";
import BarNavi from "../components/HomeNav";
import "../css/HomePage.css";
import { Link } from "react-router-dom";
import BebidaFormulario from "../components/HomeSearch";
// import HomeCarrousel from '../components/HomeCarousel';

const linkStyle = {
  color: "grey",
  textDecoration: "underline",
  cursor: "pointer",
  fontFamily: "Roboto Mono, monospace",
  fontSize: "16px",
};

function HomePage() {
  return (
    <>
      <div className="bar-navigator-container ">
        <BarNavi />
      </div>
      <div className="home-page-container black-background">



          <div className="search-page">
            <BebidaFormulario />
          </div>


        <div className="text-center mt-48">
          <Link to="/users/active" style={linkStyle}>
            Ver usuarios activos
          </Link>
        </div>
        <div className="text-center">
          <Link to="/registerBar" style={linkStyle}>
            Registrar un bar
          </Link>
        </div>
        <div className="text-center">
          <Link to="/bars/active" style={linkStyle}>
            Ver bares activos
          </Link>
        </div>
        {/* <div className="text-center">
          <Link to="/ingresarLicor" style={linkStyle}>
            Registrar un licor
          </Link>
        </div>
        <div className="text-center">
          <Link to="/licores/active" style={linkStyle}>
            Ver licores activos
          </Link>
        </div>
        <div className="text-center">
          <Link to="/recetas" style={linkStyle}>
            Registrar receta
          </Link>
        </div>
        <div className="text-center">
          <Link to="/recetas/active" style={linkStyle}>
            Ver recetas activas
          </Link>
        </div> */}
      </div>
    </>
  );
}

export default HomePage;
