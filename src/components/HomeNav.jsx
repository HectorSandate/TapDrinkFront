import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import logo from '../assets/images/logo-horizontal.png';
import menu from '../assets/icons/menu.svg';
import user from '../assets/icons/user.svg';
import '../css/HomeNav.css';

const HomeBar = () => {
  // Estado para controlar la transparencia de la barra de navegación
  //, abrirDrawer, setAbrirDrawer
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  useEffect(() => {
  setIsNavbarTransparent();
  }, []);

  // const toggleDrawer = () => {
  //   setAbrirDrawer(!abrirDrawer);
  // };

// bg="primary" data-bs-theme="dark" 
  return (
    <Navbar  expand="lg" className={`${isNavbarTransparent ? 'bg-transparent' : ''}`}>
      <Container>

        <Navbar.Brand>
            <Image src={menu} alt="Menu" />
        </Navbar.Brand> 

        <Navbar.Brand href="#home">
            <Image
              alt="logo"
              src={logo}
              className="logoStyle align-top"
            />
          </Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link>
            <Image src={user} alt="User" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HomeBar;
