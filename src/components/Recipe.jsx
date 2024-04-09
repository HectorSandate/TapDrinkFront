// RecipeCard.js
import React from 'react';

function RecipeCard({ imageUrl, title, description, onClick }) {

  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="Recipe" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" onClick={onClick}>Ver receta</button>
      </div>
    </div>
  );
}

export default RecipeCard;
