import React from "react";
import Hero from "../components/principal/herosection";
import AboutSection from "../components/principal/AboutSection";
import MisionVision from "../components/principal/MisionVision";
import Testimonio from "../components/principal/Sepa";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import getDrink from '../assets/images/Pagina Principal/getDrink.png'
import footer from '../assets/images/Pagina Principal/footer.png'
import FooterPAge from "../components/principal/Footer"; // Asegúrate de que el nombre del archivo y la exportación coincidan.

function Principal() {

  return (
    <div>
      <Hero />
      <AboutSection/>
      <div style={{ textAlign: 'center' }}>
        <img src={getDrink} alt="Get Drink" />
      </div>
      <MisionVision/>
      <Testimonio/>
      <div style={{ textAlign: 'center' }}>
        <img src={footer} alt="Footer" /> {/* Ajusta el atributo alt según corresponda */}
      </div>
      <FooterPAge /> 
    </div>
  );
}

export default Principal;
