import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InactiveLicores() {
  const [licores, setLicores] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Cargar licores inactivos
    const fetchLicores = async () => {
      const res = await axios.get('https://taplibkback.onrender.com/api/inactive/licors');
      setLicores(res.data.licores);
    };

    fetchLicores();
  }, []);

  // Función para activar licor
  const activateLicor = async (id) => {
    try {
      const res = await axios.put(`https://taplibkback.onrender.com/api/activate/licor/${id}`);
      setMessage(res.data.message); // Establecer el mensaje de éxito
      setLicores(licores.filter(licor => licor._id !== id)); // Actualizar el estado para reflejar el cambio
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
              onClick={() => activateLicor(licor._id)}
            >
              Activar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InactiveLicores;
