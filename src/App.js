import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Home from './pages/HomePage';
import User from './pages/user.info';
import RegisterRecipe from './pages/RegisterRecipe';
import RecipeDetail from './pages/RecipeDetail';
import Principal from './pages/PaginaPrincipal'
import ModificarRecetaForm from './pages/modifcarReceta'
import Inactive from './pages/Inactive'

import Profile from './components/Profile';
import { UserProvider } from "./components/context/UserContext";
function App() {
  return (
    <div className="app">
      <UserProvider>
      <Router>
        <Routes>
          
        <Route exact path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/recetas" element={<RegisterRecipe />} />
        <Route path="/detallesReceta/:id" element={<RecipeDetail />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/modificarReceta/:recipeId" element={<ModificarRecetaForm />} />
        <Route path="/inactivos" element={<Inactive />} />

        <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      </UserProvider>
    </div>
    
  );
}

export default App;