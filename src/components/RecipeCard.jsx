import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  // Parsea la cadena JSON del procedimiento en un array de pasos
  const procedimientoSteps = JSON.parse(recipe.procedimiento);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden text-white p-20">
      <div className="container px-5 py-24 mx-auto text-white">
        <div className="lg:w-4/5 mx-auto flex flex-wrap text-white">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 text-white">
            <div className="flex items-center mb-4">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={handleGoBack}
              >
                <FaArrowRight className="h-6 w-6 transform rotate-180 text-yellow-500" />

              </button>
              <h2 className="text-sm title-font text-gray-500 tracking-widest text-white ml-4">
                RECIPE
              </h2>
            </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 text-white">
              {recipe.nombre}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1 text-white">
                Description
              </a>
            </div>
            <p className="leading-relaxed mb-4 text-white">{recipe.descripcion}</p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500 text-white">Duration</span>
              <span className="ml-auto text-gray-900 text-white">{recipe.duracion}</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500 text-white">Category</span>
              <span className="ml-auto text-gray-900 text-white">{recipe.categoria}</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500 text-white text-white">Ingredients</span>
              <span className="ml-auto text-gray-900 text-white">
                {procedimientoSteps.map((paso, index) => (
                  <div key={index}>
                    {paso.licor && <p>{paso.licor} - {paso.cantidad} ml</p>}
                  </div>
                ))}
              </span>
            </div>
          </div>
          {recipe.image && recipe.image.secure_url && (
            <img
              alt="recipe"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={recipe.image.secure_url}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default RecipeCard;
