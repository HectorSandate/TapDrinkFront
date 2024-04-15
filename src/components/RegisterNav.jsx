import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../assets/images/logo-horizontal.png';
import { useNavigate } from 'react-router-dom'; 
import '../css/forms.css';

function BarNavi() {
  const navigate = useNavigate();
  // Estado para controlar la transparencia de la barra de navegación
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  // Efecto para establecer la transparencia al montar el componente
  useEffect(() => {
    setIsNavbarTransparent(true);
  }, []);

  const botonesStyle = {
    fontFamily: 'Roboto Mono, monospace', 
  };

  const handleLogin= () => {
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className={`${isNavbarTransparent ? 'bg-transparent' : ''}`}>
      <Container>
        <Navbar.Brand href="/">
        <img
            src={logo}
            width="150"
            height="130"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={botonesStyle}>
          <Nav className="d-flex">
            <Button variant="warning" className="mr-2 custom-button" style={botonesStyle}  onClick={handleLogin}>Iniciar sesion</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarNavi;