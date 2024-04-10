import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Image} from "react-bootstrap";
//, Button, NavDropdown, Form
import logo from '../assets/images/logo-horizontal.png';
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import '../css/HomeNav.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

const HomeBar = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  useEffect(() => {
  setIsNavbarTransparent();
  }, []);

 

  return (
    <Navbar expand={false} className={`${isNavbarTransparent ? 'bg-transparent' : ''}`}>
      <Container fluid>
          <Navbar.Brand href="#">
              <Image alt="logo" src={logo} className="logoStyle align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle className='color-toggle' aria-controls={`offcanvasNavbar-expand-false`} >
          <MenuIcon/>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-false`}
          aria-labelledby={`offcanvasNavbarLabel-expand-false`}
          placement="end"
        >
          <Offcanvas.Header className="offcanvas-header" closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link href="/user">Perfil</Nav.Link>
              <Nav.Link href="/recetas">Ingresar Receta</Nav.Link>
              <Nav.Link href="/profile">Ingresar Receta</Nav.Link>
              <Nav.Link href="/">Log out</Nav.Link>
              {/* <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-false`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default HomeBar;
