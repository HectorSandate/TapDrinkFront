import React, { useState } from 'react';
import searchSVG from '../assets/icons/search.svg'; // Importa el archivo SVG
import filterOffSVG from '../assets/icons/filterOff.svg'; // Importa el archivo SVG

function BebidaFormulario({ onFilter, onClearFilter }) {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función de filtro pasando el nombre y la categoría seleccionada
    onFilter(nombre, categoria);
  };

  const handleClearFilter = () => {
    // Limpiar los estados de nombre y categoría
    setNombre('');
    setCategoria('');
    // Llama a la función de limpiar filtro
    onClearFilter();
  };

  return (
    <div className="container mx-auto mt-4s p-4">
      <div className="flex flex-col items-center pr-60"> {/* Se ha añadido 'items-center' para centrar los elementos */}
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold mb-2 mx-auto">Búsqueda de Bebidas</h2>
          <h5 className="text-lg mb-4">Encuentra tu bebida favorita</h5>
        </div>
      </div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 justify-center items-center"> {/* Se han añadido 'justify-center' y 'items-center' para centrar los elementos */}
              <input
                className="p-2 border border-gray-500 rounded text-black"
                placeholder="Nombre del Cóctel"
                value={nombre}
                onChange={handleNombreChange}
              />
              <select
                className="p-2 border border-gray-500 rounded bg-white text-black"  
                aria-label="Filtrar"
                value={categoria}
                onChange={handleCategoriaChange}
              >
                <option value="">Filtrar por categoría</option>
                <option value="Sin alcohol">Sin alcohol</option>
                <option value="Con alcohol">Con alcohol</option>
                {/* Agrega otras opciones de categoría según sea necesario */}
              </select>
              <div className="flex justify-center gap-3 items-center"> {/* Se ha añadido 'flex' para ajustar el espacio entre los botones */}
                <button
                  type="submit"
                  className="p-2 bg-yellow-500 rounded w-28 text-white hover:bg-yellow-600 flex items-center justify-center"
                >
                  <img src={searchSVG} alt="Buscar" className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleClearFilter}
                  className="p-2 bg-gray-500 rounded w-28 text-white hover:bg-gray-600 flex items-center justify-center"
                >
                  <img src={filterOffSVG} alt="Limpiar filtro" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BebidaFormulario;
