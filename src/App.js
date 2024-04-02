import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Home from './pages/HomePage';
import UsersAc from './pages/UsersActive';
import RegisterBar from './pages/RegisterBar';
import BarAc from './pages/BarActive';
import RegisterLic from './pages/RegisterLicor';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        <Route path="/users/active" element={<UsersAc />} />
        <Route path="/registerBar" element={<RegisterBar />} />
        <Route path="/bars/active" element={<BarAc />} />

        <Route path="/ingresarLicor" element={<RegisterLic />} />
        <Route path="/licores/active" element={<Home />} />

        <Route path="/recetas" element={<Home />} />
        <Route path="/recetas/active" element={<Home />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
