import React, { useState, useEffect } from 'react';
import { Label } from './cartaPrueba/ui/label.tsx';
import { Input } from './cartaPrueba/ui/input.tsx';

const LicorFormPopover = () => {
  const [formData, setFormData] = useState({
    nombreLicor: '',
    mililitros: '',
    image: null,
  });
  const [licorSuccess, setLicorSuccess] = useState(false);
  const [licorError, setLicorError] = useState(false);


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
      setLicorSuccess(true);
    } catch (error) {
      setLicorError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    validateForm(); // Verificar el formulario cada vez que cambien los datos
  }, [formData, licorSuccess, licorError]);

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-Input bg-black dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Licor Nuevo</h2>
          <form onSubmit={handleSubmit} className="my-8 space-y-6">
          {licorSuccess && (
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
                <div role="alert" className="alert alert-success bg-success text-white h-15 w-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Licor Agregado Exitosamente</span>
                </div>
            </div> 
            )}
            {licorError && (
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
                <div role="alert" className="alert alert-error bg-error text-white h-15 w-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Error al ingresar licor</span>
                </div>
              </div>
            )}
            <div>
              <Label className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">Nombre del Licor</Label>
              <Input
                type="text"
                name="nombreLicor"
                value={formData.nombreLicor}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">Mililitros</Label>
              <Input
                type="text"
                name="mililitros"
                value={formData.mililitros}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">Imagen</Label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="file-input file-input-bordered file-input-warning w-full max-w-xs"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] ${formValid ? 'hover:from-blue-700' : 'opacity-50 cursor-not-allowed'}`} 
                disabled={!formValid} // Deshabilitar el botón si el formulario no es válido
              >
                Guardar
              </button>
            </div>
          </form>
    </div>
  );
};

export default LicorFormPopover;
