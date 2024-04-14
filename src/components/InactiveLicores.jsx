import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InactiveLicores() {
  const [licores, setLicores] = useState([]);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [activatingLicorId, setActivatingLicorId] = useState(null);

  useEffect(() => {
    // Cargar licores inactivos
    const fetchLicores = async () => {
      const res = await axios.get('https://taplibkback.onrender.com/api/inactive/licors');
      setLicores(res.data.licores);
    };

    fetchLicores();
  }, []);

  // Función para abrir el modal y establecer el ID del licor
  const openModal = (id) => {
    setShowModal(true);
    setActivatingLicorId(id);
  };

  // Función para cerrar el modal y restablecer el ID del licor
  const closeModal = () => {
    setShowModal(false);
    setActivatingLicorId(null);
  };

  // Función para activar licor
  const activateLicor = async (id) => {
    try {
      const res = await axios.put(`https://taplibkback.onrender.com/api/activate/licor/${id}`);
      setMessage(res.data.message); // Establecer el mensaje de éxito
      setLicores(licores.filter(licor => licor._id !== id)); // Actualizar el estado para reflejar el cambio
      closeModal(); // Cerrar el modal después de activar el licor
    } catch (error) {
      console.error(error);
      setMessage('Error al activar el licor.'); // Establecer un mensaje de error en caso de fallo
    }
  };

  return (
    <div>
      {message && <p className="text-green-500 mb-4">{message}</p>} {/* Mostrar el mensaje si existe */}
      <div className="grid grid-cols-3 gap-4">
        {licores.map((licor) => (
          <div className="bg-gray-100 p-4" key={licor._id}>
            <h3 className="font-bold">{licor.nombreLicor}</h3>
            <p>{licor.mililitros} ml</p>
            <button
              className="bg-blue-500 text-white p-2 mt-2"
              onClick={() => openModal(licor._id)} // Abrir el modal al hacer clic en el botón
            >
              Activar
            </button>
          </div>
        ))}
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full p-4">
              <div className="mb-4">
                <p>¿Estás seguro de que deseas activar este licor?</p>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => activateLicor(activatingLicorId)} // Confirmar la activación del licor
                >
                  Sí, activar
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={closeModal} // Cerrar el modal sin activar el licor
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InactiveLicores;
