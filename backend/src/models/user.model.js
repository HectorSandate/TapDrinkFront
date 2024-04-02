import mongoose from "mongoose";
import { createDateMiddleware, deactivateDateMiddleware } from '../middleware/createDateMiddleware.js'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
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

createDateMiddleware(userSchema);
deactivateDateMiddleware(userSchema);
//Es para especificarle a mongoose cual es nuestro modelo
export default mongoose.model("User", userSchema);
