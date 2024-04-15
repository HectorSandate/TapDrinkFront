// Importaciones esenciales
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from "../components/cartaPrueba/ui/3d-card.tsx";

function RecipeCard({ recipeId, imageUrl, title, description, onDelete, onClick }) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const navigate = useNavigate();
    const modalRef = useRef(null);

    const togglePopover = () => setIsModalOpen(!isModalOpen);

    const handleModifyClick = () => {
        navigate(`/modificarReceta/${recipeId}`);
    };

    const handleDeleteTemp = () => {
        onDelete(recipeId, 'temporary');
        setIsModalOpen(false);
    };

    const handleDeletePerm = () => {
        setIsModalOpen(false);
        setIsConfirmModalOpen(true);
    };

    const handleConfirmDeletePerm = () => {
        onDelete(recipeId, 'permanent');
        setIsConfirmModalOpen(false);
    };

    const handleCloseConfirmModal = () => {
        setIsConfirmModalOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
                setIsConfirmModalOpen(false); // Close the confirmation modal if open
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <CardContainer className="inter-var">
                <CardBody className="card relative bg-gray-50 dark:bg-black rounded-xl border p-6">
                    <CardItem translateZ="100" className="w-full">
                        <img src={imageUrl} className="card-img-top object-cover rounded-xl h-60 w-full" alt="Recipe" />
                    </CardItem>
                    <CardItem as="h5" translateZ="50" className="card-title text-xl font-bold text-neutral-600 dark:text-white">
                        {title}
                    </CardItem>
                    <CardItem as="p" translateZ="60" className="card-text text-neutral-500 text-sm dark:text font-bold">
                        {description}
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black txt-xs font-bold" onClick={() => onClick(recipeId)}>
                            Ir
                        </CardItem>
                        <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black txt-xs font-bold" onClick={handleModifyClick}>
                            Modificar
                        </CardItem>
                        <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-red-600 dark:bg-yellow-500 text-white dark:text-black txt-xs font-bold" onClick={togglePopover}>
                            Eliminar
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
            {isModalOpen && (
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-900 bg-opacity-70 z-50 flex justify-center items-center">
                    <div ref={modalRef} className="bg-white p-12 rounded-lg max-w-md">
                        <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-12">Eliminar receta</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-12">¿Estás seguro de que deseas eliminar esta receta?</p>
                        <button onClick={handleDeleteTemp} className="block bg-red-600 text-white px-5 py-2.5 rounded-lg mr-3 focus:outline-none focus:ring-4 focus:ring-red-300">Baja Temporal</button>
                        <button onClick={handleDeletePerm} className="block bg-red-600 text-white px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-300 mt-3">Baja Permanente</button>
                    </div>
                </div>
            )}
            {isConfirmModalOpen && (
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-900 bg-opacity-70 z-50 flex justify-center items-center">
                    <div className="bg-white p-12 rounded-lg max-w-md">
                        <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-5">Confirmar eliminación</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-5">Esta acción eliminará la receta de forma temporal. ¿Estás seguro?</p>
                        <button onClick={handleConfirmDeletePerm} className="block bg-red-600 text-white px-5 py-2.5 rounded-lg mr-3 focus:outline-none focus:ring-4 focus:ring-red-300">Sí, eliminar permanentemente</button>
                        <button onClick={handleCloseConfirmModal} className="block bg-gray-200 text-black px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-300 mt-3">Cancelar</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default RecipeCard;
