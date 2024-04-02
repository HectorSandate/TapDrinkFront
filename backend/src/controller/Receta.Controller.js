import Receta from '../models/Receta.Model.js';


//  INNGRESAR RECETA
export const ingresarReceta = async (req, res) => {
  const { nombre, ingredientes, procedimiento, duracion, isActive = true } = req.body;

  try {
    // Validate input
    if (!nombre) {
      return res.status(400).json({ message: 'Ingrese nombre de la receta' });
    }
    if (!ingredientes) {
      return res.status(400).json({ message: 'Ingrese los ingredientes' });
    }

    const recetaExists = await Receta.findOne({ nombre });

    if (recetaExists) {
      return res.status(400).json({ message: 'Receta ya registrada' });
    }

    // Crear nueva receta
    const receta = await Receta.create({
      nombre,
      ingredientes,
      procedimiento,
      duracion,
      isActive
    });

    console.log(receta);

    res.status(201).json({
      message: 'Receta ingresada con éxito',
      receta
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};
// BAJA LÓGICA DE RECETA
export const deactivateReceta = async (req, res) => {
  try {
    const recetaId = req.params.recetaId; // Obtener el ID de la receta de los parámetros de la ruta

    // Actualizar el campo isActive a false
    const updatedReceta = await Receta.findByIdAndUpdate(recetaId, { isActive: false }, { new: true });

    res.status(200).json({ message: 'Receta desactivada exitosamente', receta: updatedReceta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// RECETAS ACTIVAS
export const getActiveRecetas = async (req, res) => {
  try {
    // Obtener recetas activas (donde isActive es true)
    const activeRecetas = await Receta.find({ isActive: true });

    res.status(200).json({ recetas: activeRecetas });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// ELIMINAR RECETA PERMANENTEMENTE
export const deleteReceta = async (req, res) => {
  try {
    const recetaId = req.params.recetaId; // Obtener el ID de la receta de los parámetros de la ruta

    // Eliminar la receta de la base de datos
    await Receta.findByIdAndDelete(recetaId);

    res.status(200).json({ message: 'Receta eliminada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// ACTUALIZAR RECETA
export const updateReceta = async (req, res) => {
  try {
    const recetaId = req.params.recetaId; // Obtener el ID de la receta de los parámetros de la ruta
    const { nombre, ingredientes, procedimiento, duracion } = req.body;

    // Actualizar la receta en la base de datos
    const updatedReceta = await Receta.findByIdAndUpdate(
      recetaId,
      { nombre, ingredientes, procedimiento, duracion },
      { new: true }
    );

    res.status(200).json({ message: 'Receta actualizada exitosamente', receta: updatedReceta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};