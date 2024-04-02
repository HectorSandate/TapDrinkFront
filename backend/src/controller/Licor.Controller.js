import Licor from "../models/Licor.Model.js";

export const ingresarLicor = async (req, res) => {
  const { nombreLicor, mililitros, estado } = req.body;

  try {
    // Validate input
    if (!nombreLicor) {
      return res.status(400).json({ message: "Ingrese nombre del bar" });
    }
    if (!mililitros) {
      return res.status(400).json({ message: "Ingrese los mililitros" });
    }

    const barExists = await Bar.findOne({ nombreLicor });

    if (barExists) {
      return res.status(400).json({ message: "Licor ya registrado" });
    }

    // Crear nuevo bar
    const licor = await Licor.create({
      nombreLicor,
      mililitros,
      estado,
    });

    console.log(licor);

    res.status(201).json({
      message: "Licor Ingresado con exito",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
// Baja lógica de un licor
export const deactivateLicor = async (req, res) => {
  try {
    const licorId = req.params.licorId; // Obtener el ID del licor de los parámetros de la ruta

    // Actualizar el campo isActive a false
    const updatedLicor = await Licor.findByIdAndUpdate(
      licorId,
      { isActive: false },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Licor desactivado exitosamente", licor: updatedLicor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// Obtener licores activos
export const getActiveLicores = async (req, res) => {
  try {
    // Obtener licores activos (donde isActive es true)
    const activeLicores = await Licor.find({ isActive: true });

    res.status(200).json({ licores: activeLicores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// Eliminar permanentemente un licor
export const deleteLicor = async (req, res) => {
  try {
    const licorId = req.params.licorId; // Obtener el ID del licor de los parámetros de la ruta

    // Eliminar el licor de la base de datos
    await Licor.findByIdAndDelete(licorId);

    res.status(200).json({ message: "Licor eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};
