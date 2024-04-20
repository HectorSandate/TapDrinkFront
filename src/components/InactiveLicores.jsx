import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InactiveLicores({ onActivate }) {
  const [licor, setLicores] = useState([]);
  const [inactiveSuccess, setInactiveSuccess] = useState(false);
  const [inactiveError, setInactiveError] = useState(false);

 
  useEffect(() => {
    fetchLicores();
  }, [inactiveSuccess, inactiveError]);

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
      setInactiveSuccess(true);
    } catch (error) {
      setInactiveError(true);
      console.error("Error activating licor:", error);
    }
  };

  if (licor.length === 0) {
    return (
      <div>
      <h2 className="mb-5 text-5xl font-bold text-black">No hay licores inactivos!</h2>
          {inactiveSuccess && (
            <div role="alert" className="alert alert-success bg-success text-white h-15 w-60">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Activado Exitosamente</span>
            </div>
          )}
          {inactiveError && (
            <div role="alert" className="alert alert-error bg-error text-white h-15 w-60">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Error al activar</span>
            </div>
          )}
    </div>
    );  
      
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
