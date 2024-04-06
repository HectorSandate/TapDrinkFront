import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de react-router-dom
import logo from '../assets/images/logo-horizontal.png';
import '../css/forms.css';

function BarNavigator() {
  const navigate = useNavigate(); // Obtén la función de navegación

  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  useEffect(() => {
    setIsNavbarTransparent(true);
  }, []);

  const botonesStyle = {
    fontFamily: 'Roboto Mono, monospace', 
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Navbar expand="lg" className={`${isNavbarTransparent ? 'bg-transparent' : ''}`}>
      <Container>
        <Navbar.Brand href="#home">
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
            <Button variant="warning" className="mr-2 custom-button" style={botonesStyle} onClick={handleRegister}>Registrarse</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarNavigator;