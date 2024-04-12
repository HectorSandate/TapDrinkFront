import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeCard({ recipeId, imageUrl, title, description, onDelete, onClick, onPublish }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const navigate = useNavigate();

  const togglePopover = () => setIsPopoverOpen(!isPopoverOpen);

  const handleModifyClick = () => {
    navigate(`/modificarReceta/${recipeId}`);
  };

  return (
    <div className="card relative">
      <img src={imageUrl} className="card-img-top recipe-image" alt="Recipe" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" onClick={() => onClick(recipeId)}>Ver receta</button>
        <button className="btn btn-secondary mr-2" onClick={handleModifyClick}>Modificar</button>
        <button className="btn btn-danger ml-2" onClick={togglePopover}>Eliminar</button>
        <button className="btn btn-info ml-2" onClick={onPublish}>Publicar Procedimiento</button>
        {isPopoverOpen && (
          <div className="absolute z-10 w-44 bg-white shadow-lg rounded-lg right-0 mt-2">
            <div className="p-4 flex flex-col">
              <button className="btn btn-secondary mb-2" onClick={() => onDelete(recipeId, 'temporary')}>Baja Temporal</button>
              <button className="btn btn-danger" onClick={() => onDelete(recipeId, 'permanent')}>Baja Permanente</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
