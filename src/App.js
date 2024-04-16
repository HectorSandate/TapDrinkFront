import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";

import Profile from "./components/Profile";

import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Home from "./pages/HomePage";
import Principal from "./pages/PaginaPrincipal";
import User from "./pages/user.info";

import RegisterRecipe from "./pages/RegisterRecipe";
import RecipeDetail from "./pages/RecipeDetail";
import ModificarRecetaForm from "./pages/modifcarReceta";
import Inactive from "./pages/Inactive";

import RegisterLicor from "./pages/RegisterLicor";
import Licores from "./pages/LicorPage";
import LicorDetail from "./pages/LicorDetail";
import ModificarLicorForm from "./pages/modificarLicor";
import { AuthProvider } from "./components/context/AuthContext";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Router>
          <AuthProvider>
            {" "}
            {/* Envuelve tus rutas con AuthProvider */}
            <Routes>
              <Route exact path="/" element={<Principal />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/user" element={<User />} />

              <Route path="/recetas" element={<RegisterRecipe />} />
              <Route path="/detallesReceta/:id" element={<RecipeDetail />} />
              <Route
                path="/modificarReceta/:recipeId"
                element={<ModificarRecetaForm />}
              />

              <Route path="/inactivos" element={<Inactive />} />

              <Route path="/agregarLicor" element={<RegisterLicor />} />
              <Route path="/verLicor" element={<Licores />} />
              <Route path="/detallesLicor/:id" element={<LicorDetail />} />
              <Route
                path="/editLicor/:licorId"
                element={<ModificarLicorForm />}
              />

              <Route path="/profile" element={<Profile />} />
            </Routes>
          </AuthProvider>{" "}
          {/* Envuelve tus rutas con AuthProvider */}
        </Router>
      </HashRouter>
    </div>
  );
}

export default App;
