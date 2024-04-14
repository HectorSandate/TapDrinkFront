import React from 'react';

function BebidaFormulario() {
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
          <form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pr-56">
              <input
                className="p-2 border border-gray-500 rounded"
                placeholder="Nombre del Cóctel"
              />
              <select
                className="p-2 border border-gray-500 rounded bg-white text-black"  
                aria-label="Filtrar"
              >
                <option>Filtrar</option>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
              </select>
              <button
                className="p-2 bg-yellow-500 rounded text-white hover:bg-yellow-600"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BebidaFormulario;
