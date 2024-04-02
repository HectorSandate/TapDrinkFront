import express from "express";
import session from "express-session";
import mongoStore from "connect-mongodb-session";

//Se especifica la ruta con la cual se va a cinectar con MongoDB
const MONGO_URL = "mongodb://127.0.0.1:27017";

const app = express();

// Configuración del middleware de sesión
//Middle ware, es decir una funcion que tiene acceso tanto al req como al res
app.use(
  session({
    //clave segura que ayuda a prevenir ataques
    secret: "bravitos123", // Cambia esto con una clave segura -  cifra la parte de las cookies
    resave: true, //Indica si se guarda la sesion en el almacen de sesiones
    saveUninitialized: true, //indica si se guarda una sesion incluso si no se modifico
    store: new mongoStore({
      url: MONGO_URL,
    }),
  })
);

app.get("/", (req, res) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
  res.send(`hello world 5a: ${req.session.cuenta}`);
});

// Función anónima para indicar al servidor el puerto que va a estar escuchando
app.listen(3000, () => {
  console.log("Upp");
});
