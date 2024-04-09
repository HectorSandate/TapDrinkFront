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
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/recetas" element={<RegisterRecipe />} />
        <Route path="/detallesReceta/:id" element={<RecipeDetail />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/modificarReceta/:recipeId" element={<ModificarRecetaForm />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
