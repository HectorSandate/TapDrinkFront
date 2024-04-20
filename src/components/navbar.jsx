import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/iconOther.png";
import '../css/forms.css';

function BarNavigator() {
  const navigate = useNavigate();

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
        <Navbar.Brand>
          <img
            src={logo}
            width="160"
            height="120"
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