import { Router } from "express";
import {
  login,
  register,
  deactivateUser,
  getActiveUsers,
} from "../controller/auth.controller.js";
import {
  registerBar,
  deactivateBar,
  getActiveBars,
  deleteBar,
} from "../controller/Bar.Controller.js";
import {
  ingresarLicor,
  deactivateLicor,
  getActiveLicores,
  deleteLicor,
} from "../controller/Licor.Controller.js";
import {
  ingresarReceta,
  deactivateReceta,
  getActiveRecetas,
  deleteReceta,
  updateReceta,
} from "../controller/Receta.Controller.js";

const router = Router();
//REGISTER-----------------------------------------
//Login y register rutas
router.post("/login", login);
router.post("/register", register);
//  ruta para desactivar un usuario
router.put("/users/:userId/deactivate", deactivateUser);
//  ruta para obtener usuarios activos
router.get("/users/active", getActiveUsers);


//BAR -------------------------------------------------------
//Bar Register
router.post("/registerBar", registerBar);
//Baja logica del bar
router.put("/bars/:barId/deactivate", deactivateBar);
//Desplegar bar activos
router.get("/bars/active", getActiveBars);
//eliminacion del bar
router.delete("/bars/:barId", deleteBar);

//LICORES-------------------------------------------------------
//ingresar licor
router.post("/ingresarLicor", ingresarLicor);
//Baja logica del licor 
router.put('/licores/:licorId/deactivate', deactivateLicor);
//desplegar licores activos
router.get('/licores/active', getActiveLicores);
//eliminar licor
router.delete('/licores/:licorId', deleteLicor);



// RECETA--------------------------------------------------------
//Ingresar receta
router.post("/recetas", ingresarReceta);
//Baja logica de receta
router.put('/recetas/:recetaId/deactivate', deactivateReceta);
//Desplegar recetas activas
router.get('/recetas/active', getActiveRecetas);
//Eliminar receta
router.delete('/recetas/:recetaId', deleteReceta);
//Modificar receta
router.put('/recetas/:recetaId', updateReceta);


export default router;
