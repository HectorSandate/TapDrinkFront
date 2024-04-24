import React from "react";
import imagen2 from "../../assets/images/Pagina Principal/hero2.gif";

const PaymentComponent = () => {
  return (
    <section
      className="bg-white dark:bg-gray-900 relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imagen2})` }}
    >
      <div className="grid max-w-screen-xl mx-auto px-4 py-20 md:px-10 md:py-32 lg:py-40 lg:px-20 lg:grid-cols-12 gap-8">
        <div className="col-span-full lg:col-span-7 place-self-center">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight mb-12">
            Descubre todo tipo de bebidas
          </h1>
          <p className="text-white text-lg font-medium bg-opacity-50 rounded-lg px-6 py-10 md:py-20 mr-3 text-center">
            "TapDrink: Siente el ritmo, disfruta el sabor, con solo un toque..."
          </p>
          <a
            href="/#/login"
            className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900 text-white rounded-lg px-5 py-3 text-sm md:text-base font-medium mt-5 transition duration-150 ease-in-out"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PaymentComponent;
