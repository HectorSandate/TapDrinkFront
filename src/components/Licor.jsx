// RecipeCard.js
import React, { useState } from 'react';

//imageUrl,
function LicorCard({ licorId, imageUrl, title, description, onDelete , onClick, onEdit}) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => setIsPopoverOpen(!isPopoverOpen); 

  return (
    <div className="card relative">
      <img src={imageUrl} className="card-img-top recipe-image" alt="licors" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-text">{description}</h5>
        <button className="btn btn-primary" onClick={() => onClick(licorId)}>Ver licor</button>
        <button className="btn btn-secondary mr-2" onClick={() => onEdit(licorId)}>Modificar</button>
        {/* Botón para eliminar */}
        <button className="btn btn-danger ml-2" onClick={togglePopover}>Eliminar</button>
        {/* Popover de Tailwind */}
        {isPopoverOpen && (
          <div className="absolute z-10 w-44 bg-white shadow-lg rounded-lg right-0 mt-2">
            <div className="p-4 flex flex-col">
              <button className="btn btn-secondary mb-2" onClick={() => onDelete(licorId, 'temporary')}>Baja Temporal</button>
              <button className="btn btn-danger" onClick={() => onDelete(licorId, 'permanent')}>Baja Permanente</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LicorCard;