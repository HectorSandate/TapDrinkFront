import mongoose from "mongoose";

const licorSchema = new mongoose.Schema({
    nombreLicor: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  mililitros: {
    type: String,
    required: true,
  },

  estado: {
    type: Boolean,
    required: true,
  },
});

//Es para especificarle a mongoose cual es nuestro modelo
export default mongoose.model("Licor", licorSchema);
