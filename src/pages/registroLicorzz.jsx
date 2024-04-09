import React, { useState } from 'react';

const LicorFormPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombreLicor: '',
    mililitros: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: e.target.files[0],
    }));
  };

  // Aquí va la función para enviar los datos al servidor (API)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataForAPI = new FormData();
    formDataForAPI.append('nombreLicor', formData.nombreLicor);
    formDataForAPI.append('mililitros', formData.mililitros);
    if (formData.image) {
      formDataForAPI.append('image', formData.image);
    }
    
    try {
      // Ajustar URL según configuración
      const response = await fetch('https://taplibkback.onrender.com/api/ingresarLicor', {
        method: 'POST',
        body: formDataForAPI,
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const result = await response.json();
      console.log(result);
      // Reset form or show success message
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        Registrar Licor
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white shadow-md rounded p-4 w-96">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block">Nombre del Licor</label>
              <input
                type="text"
                name="nombreLicor"
                value={formData.nombreLicor}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block">Mililitros</label>
              <input
                type="text"
                name="mililitros"
                value={formData.mililitros}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block">Imagen</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div className="mt-4">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LicorFormPopover;
