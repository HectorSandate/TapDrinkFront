import React, { useState, useEffect } from 'react';

const LicorFormPopover = () => {
  const [formData, setFormData] = useState({
    nombreLicor: '',
    mililitros: '',
    image: null,
  });

  // Estado para controlar si el formulario es válido
  const [formValid, setFormValid] = useState(false);

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

  // Función para verificar si el formulario es válido
const validateForm = () => {
  if (
    formData.nombreLicor.trim() !== '' &&
    formData.mililitros.trim() !== '' &&
    formData.image !== null
  ) {
    setFormValid(true);
  } else {
    setFormValid(false);
  }
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

  useEffect(() => {
    validateForm(); // Verificar el formulario cada vez que cambien los datos
  }, [formData]);

  return (
    <div>
        <div className="shadow-md rounded p-4 w-96 licor-style">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block">Nombre del Licor</label>
              <input
                type="text"
                name="nombreLicor"
                value={formData.nombreLicor}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full text-black"
              />
            </div>
            <div>
              <label className="block">Mililitros</label>
              <input
                type="text"
                name="mililitros"
                value={formData.mililitros}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full text-black"
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
              <button
                type="submit"
                className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ${formValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                disabled={!formValid} // Deshabilitar el botón si el formulario no es válido
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default LicorFormPopover;
