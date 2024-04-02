import mongoose from "mongoose";
import { createDateMiddleware, deactivateDateMiddleware } from '../middleware/createDateMiddleware.js'

const recetaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  ingredientes: {
    type: String,
    required: true,
  },

  procedimiento: {
    type: String,
    required: true,
  },

  duracion: {
    type: String,
    required: true,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: { type: Date },

  deactivatedAt: { type: Date },
});
createDateMiddleware(recetaSchema);
deactivateDateMiddleware(recetaSchema);
//Es para especificarle a mongoose cual es nuestro modelo
export default mongoose.model("Receta", recetaSchema);
