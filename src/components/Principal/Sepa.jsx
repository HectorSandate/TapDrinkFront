import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';


const Sepa = () => {
  // Referencia para controlar el Slider
  const sliderRef = useRef();

  // Configuraciones para el Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false // Ocultamos las flechas predeterminadas
  };

  // Función para avanzar al próximo slide
  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="bg-white" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
      <div className="container mx-auto px-6 py-12 text-center">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">No sabo</h2>
            <span className="block w-20 h-1 bg-yellow-500 mx-auto mb-8"></span>
            <img src="/images/bebidas.png" alt="About" className="mx-auto mb-8" style={{ maxWidth: '300px' }} />
            <p className="text-gray-600 text-lg mb-8">
                Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable 
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Idonou</h2>
            <span className="block w-20 h-1 bg-yellow-500 mx-auto mb-8"></span>
            <img src="/images/bebidas.png" alt="About" className="mx-auto mb-8" style={{ maxWidth: '300px' }} />
            <p className="text-gray-600 text-lg mb-8">
                Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable 
            </p>
          </div>
        </Slider>
        <button onClick={next} className="bg-yellow-500 p-4 rounded-full inline-flex items-center justify-center mt-4">
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Sepa;