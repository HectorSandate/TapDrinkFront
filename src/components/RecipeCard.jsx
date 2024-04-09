import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className="card">
      {recipe.image && recipe.image.secure_url && // Verifica si la receta tiene una imagen y si tiene la propiedad 'secure_url'
        <img src={recipe.image.secure_url} className="card-img-top" alt="Recipe" />
      }
      <div className="card-body">
        <p className="card-title">Nombre :{recipe.nombre}</p>
        <p className="card-text">Procedimiento:</p>
        {recipe.procedimiento ? ( // Verifica si recipe.procedimiento está definido
          <ol>
            {recipe.procedimiento.map((paso, index) => (
              <li key={index}>
                <p><strong>Paso {index + 1}:</strong> {paso.paso}</p>
                {paso.licor && <p><strong>Licor:</strong> {paso.licor}</p>}
                {paso.cantidad && <p><strong>Cantidad:</strong> {paso.cantidad} ml</p>}
              </li>
            ))}
          </ol>
        ) : (
          <p>No hay procedimiento disponible.</p>
        )}
        <p className="card-text">Duración: {recipe.duracion}</p>
        <p className="card-text">Categoría: {recipe.categoria}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
