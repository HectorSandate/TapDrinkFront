import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InactiveLicores({ onActivate }) {
  const [licor, setLicores] = useState([]);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [activatingLicorId, setActivatingLicorId] = useState(null);

 
  useEffect(() => {
    fetchLicores();
  }, []);

  const fetchLicores = async () => {
    try {
      const res = await axios.get("https://taplibkback.onrender.com/api/inactive/licors");
      setLicores(res.data.licor);
    } catch (error) {
      console.error("Error fetching inactive licores:", error);
      setLicores([]);
    }
  };

  const activateLicor = async (id) => {
    try {
      await axios.put(`https://taplibkback.onrender.com/api/activate/licor/${id}`);
      // Elimina el licor activada del estado
      const updateLicores = licor.filter(licor => licor._id !== id);
      setLicores(updateLicores);
    } catch (error) {
      console.error("Error activating recipe:", error);
    }
  };

  if (licor.length === 0) {
    return <h2 className="mb-5 text-5xl font-bold text-black">No hay licores inactivos!</h2>
      
  }
  
  

  return (
    <div className="grid grid-cols-3 gap-4">
      <h2 className='text-black'>Licores Inactivos</h2>
      {licor.map((licor) => (
        <div className="bg-gray-100 p-4" key={licor._id}>
          <h3 className="font-bold text-black">{licor.nombreLicor}</h3>
          <p className="text-black">{licor.mililitros}</p>
          <button
            className="bg-blue-500 text-white p-2 mt-2"
            onClick={() => activateLicor(licor._id)}
          >
            Activar
          </button>
        </div>
      ))}
    </div>
  );
}


export default InactiveLicores;
