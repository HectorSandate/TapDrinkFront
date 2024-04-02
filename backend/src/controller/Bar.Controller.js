import Bar from '../models/Bar.Model.js'

export const registerBar = async (req, res) => {
    const { nombreBar, direccion, estado } = req.body;
  
    try {
      // Validate input
      if(!nombreBar) {
        return res.status(400).json({message: 'Ingrese nombre del bar'})
      }
  
      const barExists = await Bar.findOne({direccion});
  
      if(barExists) {
        return res.status(400).json({message: 'bar ya registrado'})  
      }
  
      // Crear nuevo bar
      const bar = await Bar.create({
        nombreBar, 
        direccion,
        estado
      });

      console.log(bar);

      res.status(201).json({
        message: 'Bar Ingresado con exito',
        token
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Server error'});
    }
  
  }
  
  // Baja lógica de un bar
export const deactivateBar = async (req, res) => {
  try {
    const barId = req.params.barId; // Obtener el ID del bar de los parámetros de la ruta

    // Actualizar el campo isActive a false
    const updatedBar = await Bar.findByIdAndUpdate(barId, { isActive: false }, { new: true });

    res.status(200).json({ message: 'Bar desactivado exitosamente', bar: updatedBar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};


// Obtener bares activos
export const getActiveBars = async (req, res) => {
  try {
    // Obtener bares activos (donde estado es true)
    const activeBars = await Bar.find({ estado: true }); // Cambiado de isActive a estado

    console.log("Bares activos:", activeBars);
    
    res.status(200).json({ bars: activeBars });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Eliminar permanentemente un bar
export const deleteBar = async (req, res) => {
  try {
    const barId = req.params.barId; // Obtener el ID del bar de los parámetros de la ruta

    // Eliminar el bar de la base de datos
    await Bar.findByIdAndDelete(barId);

    res.status(200).json({ message: 'Bar eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};