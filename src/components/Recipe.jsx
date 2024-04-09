import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeCard({ recipeId, imageUrl, title, onDelete , onClick}) {
  const navigate = useNavigate();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const togglePopover = () => setIsPopoverOpen(!isPopoverOpen); 


  const handleMod = (recipeId) => {
    navigate(`/detallesReceta/${recipeId}`);
  };

  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="Recipe" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Dropdown as={ButtonGroup}>
          <Button variant="info" onClick={() => onClick(recipeId)}>Ver receta</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
          <Dropdown.Menu className="">
            <Dropdown.Item onClick={handleMod}>Modificar</Dropdown.Item>
            <Dropdown.Item onClick={togglePopover}>Eliminar</Dropdown.Item>
            {isPopoverOpen && (
              <div className="absolute z-10 w-44 bg-white shadow-lg rounded-lg right-0 mt-2">
                <div className="p-4 flex flex-col">
                  <button className="btn btn-secondary mb-2" onClick={() => onDelete(recipeId, 'temporary')}>Baja Temporal</button>
                  <button className="btn btn-danger" onClick={() => onDelete(recipeId, 'permanent')}>Baja Permanente</button>
                </div>
              </div>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default RecipeCard;

