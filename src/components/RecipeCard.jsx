import React from "react";

function RecipeCard({ recipe }) {
  // Parsea la cadena JSON del procedimiento en un array de pasos
  const procedimientoSteps = JSON.parse(recipe.procedimiento);

  return (
    <div className="card">
      {recipe.image && recipe.image.secure_url && // Verifica si la receta tiene una imagen y si tiene la propiedad 'secure_url'
        <img src={recipe.image.secure_url} className="card-img-top" alt="Recipe" />
      }
      <div className="card-body">
        <h5 className="card-title">{recipe.nombre}</h5>
        <p className="card-text">Procedimiento:</p>
        <ol>
          {procedimientoSteps.map((paso, index) => (
            <li key={index}>
              <p><strong>Paso {index + 1}:</strong> {paso.paso}</p>
              {paso.licor && <p><strong>Licor:</strong> {paso.licor}</p>}
              {paso.cantidad && <p><strong>Cantidad:</strong> {paso.cantidad} ml</p>}
            </li>
          ))}
        </ol>
        <p className="card-text">Duración: {recipe.duracion}</p>
        <p className="card-text">Categoría: {recipe.categoria}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
