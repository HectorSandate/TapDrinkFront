// import React, { useState } from 'react';
// import axios from 'axios';

// const RecetaForm = () => {
//   const [formData, setFormData] = useState({
//     nombre: '',
//     ingredientes: '',
//     procedimiento: '',
//     duracion: '',
//     image: null,
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append('nombre', formData.nombre);
//     data.append('ingredientes', formData.ingredientes);
//     data.append('procedimiento', formData.procedimiento);
//     data.append('duracion', formData.duracion);
//     data.append('image', formData.image);

//     try {
//       const response = await fetch('https://taplibkback.onrender.com/api/recetas', {
//         method: 'POST',
//         body: data,
//       });
//       const responseData = await response.json();
//       console.log(responseData);
//       // Manejo de la respuesta
//     } catch (error) {
//       console.error(error);
//       // Manejo de errores
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//       <div className="mb-4">
//         <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre</label>
//         <input type="text" id="nombre" name="nombre" className="w-full border border-gray-300 rounded-md py-2 px-3" onChange={handleInputChange} />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="ingredientes" className="block text-gray-700 font-bold mb-2">Ingredientes</label>
//         <textarea id="ingredientes" name="ingredientes" className="w-full border border-gray-300 rounded-md py-2 px-3" onChange={handleInputChange}></textarea>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="procedimiento" className="block text-gray-700 font-bold mb-2">Procedimiento</label>
//         <textarea id="procedimiento" name="procedimiento" className="w-full border border-gray-300 rounded-md py-2 px-3" onChange={handleInputChange}></textarea>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="duracion" className="block text-gray-700 font-bold mb-2">Duración</label>
//         <input type="text" id="duracion" name="duracion" className="w-full border border-gray-300 rounded-md py-2 px-3" onChange={handleInputChange} />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Imagen</label>
//         <input type="file" id="image" name="image" className="w-full border border-gray-300 rounded-md py-2 px-3" onChange={handleImageChange} />
//       </div>
//       <div className="text-center">
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar Receta</button>
//       </div>
//     </form>
//   );
// };

// export default RecetaForm;


// RecetaForm.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function RecetaForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    ingredientes: '',
    procedimiento: [],
    duracion: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStep = () => {
    setFormData({
      ...formData,
      procedimiento: [...formData.procedimiento, { paso: '', licor: '', cantidad: '' }],
    });
  };

  const handleRemoveStep = (index) => {
    const updatedProcedimiento = [...formData.procedimiento];
    updatedProcedimiento.splice(index, 1);
    setFormData({ ...formData, procedimiento: updatedProcedimiento });
  };

  const handleStepChange = (index, e) => {
    const updatedProcedimiento = [...formData.procedimiento];
    updatedProcedimiento[index][e.target.name] = e.target.value;
    setFormData({ ...formData, procedimiento: updatedProcedimiento });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('nombre', formData.nombre);
    data.append('ingredientes', formData.ingredientes);
    data.append('procedimiento', JSON.stringify(formData.procedimiento)); // Convert to string to send complex data
    data.append('duracion', formData.duracion);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      const response = await fetch('https://taplibkback.onrender.com/api/recetas', {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert('Receta enviada con éxito');
      } else {
        alert('Error al enviar la receta');
      }
    } catch (error) {
      console.error('Error al enviar la receta:', error);
      alert('Error al enviar la receta');
    }
  };

  const botonesStyle = {
    fontFamily: 'Roboto Mono, monospace', 
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="block title-style">Nombre de la receta</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="mt-1 block px-3 py-2 rounded-md inputs-style w-30" />
      </div>
      <div>
        <label htmlFor="duracion" className="block title-style">Duración</label>
        <input type="text" name="duracion" value={formData.duracion} onChange={handleChange} className="mt-1 block px-3 py-2 rounded-md inputs-style w-30" />
      </div>
      <div className="space-y-3">
        <label className="block title-style">Procedimiento</label>
        {formData.procedimiento.map((paso, index) => (
          <div key={index} className="flex space-x-2">
            <input type="text" name="paso" placeholder="Paso" value={paso.paso} onChange={(e) => handleStepChange(index, e)} className="px-3 py-2 rounded-md inputs-style" />
            <input type="text" name="licor" placeholder="Licor" value={paso.licor} onChange={(e) => handleStepChange(index, e)} className="px-3 py-2 rounded-md inputs-style" />
            <input type="number" name="cantidad" placeholder="Cantidad (ml)" value={paso.cantidad} onChange={(e) => handleStepChange(index, e)} className="px-3 py-2 rounded-md inputs-style" />
            <Button type="button" onClick={() => handleRemoveStep(index)} variant="danger" className="px-3 py-2 delete-button rounded-md" style={botonesStyle}>Eliminar</Button>
          </div>
        ))}
        <Button type="button" onClick={handleAddStep} className="mt-2 px-3 py-2 add-button rounded-md" variant="info" style={botonesStyle}>Agregar otro paso</Button>
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block mb-2">Imagen</label>
        <input type="file" id="image" name="image" className="w-full border border-gray-300 rounded-md py-2 px-3" onChange={handleImageChange} />
      </div>
      <Button type="submit" className="px-3 py-2 post-button rounded-md" variant="success" style={botonesStyle}>Enviar receta</Button>
    </form>
  );
}

export default RecetaForm;
