import React from "react";
import imagen2 from "../../assets/images/Pagina Principal/hero2.gif"; // Ruta de la imagen de fondo

const PaymentComponent = () => {
  return (
    <section
      className="bg-white dark:bg-gray-900"
      style={{
        backgroundImage: `url(${imagen2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        
        top: 0,
        left: 0,
      }}
    >
      <div className="grid max-w-screen-xl px-20 py-60  lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Descubre todo tipo de bebidas
          </h1>
          <p className="inline-flex items-center justify-center px-12 py-40 mr-3 text-lg font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            "TapDrink: Siente el ritmo, disfruta el sabor, con solo un toque..."
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-12 text-base font-medium text-center text-white rounded-lg bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PaymentComponent;
