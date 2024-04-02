// isActive.middleware.js
export const isActiveMiddleware = (req, res, next) => {
    const model = req.model; // Obtenemos el modelo desde la solicitud
    const documentId = req.params.documentId; // Obtenemos el ID del documento desde los parámetros de la ruta
  
    // Buscamos el documento por su ID
    model.findById(documentId)
      .then((document) => {
        if (!document) {
          return res.status(404).json({ message: 'Documento no encontrado' });
        }
  
        // Verificamos si el documento está activo
        if (!document.isActive) {
          return res.status(400).json({ message: 'Documento inactivo' });
        }
  
        // Si el documento está activo, lo adjuntamos a la solicitud y continuamos con el siguiente middleware
        req.document = document;
        next();
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
      });
  };