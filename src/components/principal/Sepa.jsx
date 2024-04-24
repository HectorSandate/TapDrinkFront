import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonioBarAlan = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="bg-white" style={{ backgroundImage: 'url(/path-to-your-background-image)' }}>
      <div className="container mx-auto px-6 py-12 text-center">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Experiencia Innovadora en Bar Alan</h2>
            <span className="block w-20 h-1 bg-yellow-500 mx-auto mb-8"></span>
            <img src="https://assets-global.website-files.com/5e86c7170f1ab21474c3f2a4/5f2f7679afe8e66610b51428_Cocktail%20drink%20styling_1.JPG" alt="Creative Drink" className="mx-auto mb-8" style={{ maxWidth: '300px' }} />
            <p className="text-gray-600 text-lg mb-8">
              "Incorporar TapDrink a nuestro bar transformó completamente la manera en que servimos nuestras bebidas. El nivel de precisión y la capacidad de personalización han sido fundamentales para mejorar nuestro servicio y satisfacción del cliente."
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Calidad Constante en Cada Orden</h2>
            <span className="block w-20 h-1 bg-yellow-500 mx-auto mb-8"></span>
            <img src="https://wildpackbev.com/wp-content/uploads/2022/03/shutterstock_1931592266-scaled.jpg" alt="Quality Drink" className="mx-auto mb-8" style={{ maxWidth: '300px' }} />
            <p className="text-gray-600 text-lg mb-8">
              "Cada cóctel servido ahora tiene la misma alta calidad gracias a TapDrink. Nuestros clientes notan y aprecian la consistencia, lo que ha llevado a un aumento en la fidelidad de nuestros visitantes."
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Eficiencia en el Servicio</h2>
            <span className="block w-20 h-1 bg-yellow-500 mx-auto mb-8"></span>
            <img src="https://knots.io/wp-content/uploads/2023/06/efficiency_quality_customer_service.png" alt="Efficient Service" className="mx-auto mb-8" style={{ maxWidth: '300px' }} />
            <p className="text-gray-600 text-lg mb-8">
              "La eficiencia del servicio ha mejorado significativamente. Menos tiempo esperando para los clientes y más tiempo disfrutando de sus bebidas, todo gracias a la tecnología de TapDrink."
            </p>
          </div>
        </Slider>
        <button onClick={() => sliderRef.current.slickNext()} className="bg-yellow-500 p-4 rounded-full inline-flex items-center justify-center mt-4">
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default TestimonioBarAlan;
