// Importaciones esenciales
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from "../components/cartaPrueba/ui/3d-card.tsx";

function RecipeCard({ recipeId, imageUrl, title, description, onDelete, onClick }) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const navigate = useNavigate();

    const togglePopover = () => setIsPopoverOpen(!isPopoverOpen);

    const handleModifyClick = () => {
        navigate(`/modificarReceta/${recipeId}`);
    };

    return (
        <CardContainer className="inter-var">
            <CardBody className="card relative bg-gray-50 dark:bg-black rounded-xl border p-6">
                <CardItem translateZ="100" className="w-full">
                    <img src={imageUrl} className="card-img-top object-cover rounded-xl h-60 w-full" alt="Recipe" />
                </CardItem>
                <CardItem as="h5" translateZ="50" className="card-title text-xl font-bold text-neutral-600 dark:text-white">
                    {title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="card-text text-neutral-500 text-sm dark:text font-bold" >
                    {description}
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem translateZ={20} as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black txt-xs font-bold"
                        onClick={() => onClick(recipeId)}>
                        Ir
                    </CardItem>
                    <CardItem translateZ={20} as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black txt-xs font-bold"
                        onClick={handleModifyClick}>
                        Modificar
                    </CardItem>
                    <CardItem translateZ={20} as="button"
                        className="px-4 py-2 rounded-xl bg-red-600 dark:bg-red-200 text-white dark:text-black txt-xs font-bold"
                        onClick={togglePopover}>
                        Eliminar
                    </CardItem>
                </div>
                {isPopoverOpen && (
                    <div className="absolute z-10 w-44 bg-white shadow-lg rounded-lg right-0 mt-2 p-4 flex flex-col">
                        <button className="px-4 py-2 mb-2 rounded bg-gray-200 text-black text-xs"
                                onClick={() => onDelete(recipeId, 'temporary')}>Baja Temporal</button>
                        <button className="px-4 py-2 rounded bg-red-600 text-white text-xs"
                                onClick={() => onDelete(recipeId, 'permanent')}>Baja Permanente</button>
                    </div>
                )}
            </CardBody>
        </CardContainer>
    );
}

export default RecipeCard;
