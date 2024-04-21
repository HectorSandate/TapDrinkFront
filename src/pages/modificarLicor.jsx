import React, { useState, useEffect } from "react";
import '../css/modificarForm.css';
import { Label } from "../components/cartaPrueba/ui/label";
import { Input } from "../components/cartaPrueba/ui/input";


function ModificarLicorForm({ licorId, closeModal }) {
  const [formData, setFormData] = useState({
    nombreLicor: '',
    mililitros: '',
  });

  const [licorSuccess, setLicorSuccess] = useState(false);
  const [licorError, setLicorError] = useState(false);


  // Estado para controlar si el formulario es válido
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const fetchLicor = async () => {
      try {
        const response = await fetch(`https://taplibkback.onrender.com/api/active/${licorId}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error ${response.status}: ${errorData.message}`);
        }
        const data = await response.json();
        setFormData({
          nombreLicor: data.licor.nombreLicor,
          mililitros: data.licor.mililitros,
        });
      } catch (error) {
        console.error("Error al cargar el licor:", error);
        alert(`Error al cargar el licor: ${error.message}`);
      }
    };

    fetchLicor();
  }, [licorId]);

  const validateForm = () => {
    if (
      formData.nombreLicor.trim() !== '' &&
      formData.mililitros.trim() !== ''
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  useEffect(() => {
    validateForm(); // Verificar el formulario cada vez que cambien los datos
  }, [formData, licorSuccess, licorError]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("nombreLicor", formData.nombreLicor);
    formDataToSend.append("mililitros", formData.mililitros);

    try {
      const response = await fetch(`https://taplibkback.onrender.com/api/licor/modificar/${licorId}`, {
        method: "PUT",
        body: formDataToSend,
      });

      if (response.ok) {
        setLicorSuccess(true);
      } else {
        setLicorError(true);
      }
    } catch (error) {
      console.error("Error al modificar el licor:", error);
      setLicorError(true);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-Input bg-black dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Actualizar Licor</h2>
      {licorSuccess && (
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
                <div role="alert" className="alert alert-success bg-success text-white h-15 w-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Datos Actualizados Exitosamente</span>
                </div>
            </div> 
            )}
            {licorError && (
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
                <div role="alert" className="alert alert-error bg-error text-white h-15 w-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Error al actualizar datos</span>
                </div>
              </div>
            )}
        <form onSubmit={handleSubmit} className="my-8 space-y-4">
          <div>
            <Label htmlFor="nombreLicor" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">
              Nombre del licor
            </Label>
            <Input
              type="text"
              name="nombreLicor"
              value={formData.nombreLicor}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
            />
          </div>
          <div>
            <Label htmlFor="mililitros" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">
                Mililitros
            </Label>
            <Input
              type="text"
              name="mililitros"
              value={formData.mililitros}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
            />
          </div>
          <button 
            type="submit"
            className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] ${formValid ? 'hover:from-blue-700' : 'opacity-50 cursor-not-allowed'}`} 
            disabled={!formValid}
          >
            Guardar cambios
          </button>
        </form>
    </div>


  );
}

export default ModificarLicorForm;
 