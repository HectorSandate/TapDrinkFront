import mongoose from "mongoose";

const barSchema = new mongoose.Schema({
    nombreBar: {
    type: String,
    required: true,
    trim: true,
  },

  direccion: {
    type: String,
    required: true,
    unique: true,
  },

  estado: {
    type: Boolean, // Cambiado de isActive a estado
    required: true,
  },
});

//Es para especificarle a mongoose cual es nuestro modelo
export default mongoose.model("Bar", barSchema);
