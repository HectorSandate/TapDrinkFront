import { useState } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import logo from "../assets/images/logo-horizontal.png";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as RecipeIcon } from "../assets/icons/recipe.svg";
import { ReactComponent as LiquorIcon } from "../assets/icons/liquor.svg"; // Asumiendo que tienes un ícono para licor
import { ReactComponent as LogoutIcon } from "../assets/icons/logout.svg";
import { ReactComponent as ProfileIcon } from "../assets/icons/profile.svg";
import "../css/HomeNav.css";
import { useAuth } from './context/AuthContext'; // Asegúrate de proporcionar la ruta correcta al contexto de autenticación

const BarNavi = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el desplegable de licor.

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleLiquorDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar expand={false} className={`${isNavbarTransparent ? "bg-transparent" : ""}`}>
      <Container fluid>
        <Navbar.Brand href="#">
          <Image alt="logo" src={logo} className="logoStyle align-top" />
        </Navbar.Brand>
        <button
          className="text-black font-medium rounded-lg text-sm px-5 py-1.5 ps-8 focus:outline-none"
          type="button"
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div
          id="drawer-backdrop"
          className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} w-64 dark:bg-gray-800`}
          tabIndex="-1"
          aria-labelledby="drawer-backdrop-label"
        >
          <h5 id="drawer-backdrop-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
          <button
            type="button"
            onClick={toggleDrawer}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-black"
          >
            <CloseIcon />
          </button>
          <ul className="space-y-2 font-medium">
            <li>
              <Nav.Link
                href="/home"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HomeIcon className="w-5 h-5" />
                <span className="ms-3">Inicio</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="/recetas"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <RecipeIcon className="w-5 h-5" />
                <span className="ms-3">Ingresar Receta</span>
              </Nav.Link>
            </li>
            <li>
              <button
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                onClick={toggleLiquorDropdown}
              >
                <LiquorIcon className="w-5 h-5" />
                <span className="flex-1 ms-3 text-left">Licor</span>
                <svg className="w-4 h-4 transform transition-transform" style={{ rotate: isOpen ? '180deg' : '0deg' }}>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.5 2L7.5 7L12.5 2" />
                </svg>
              </button>
              {isOpen && (
                <ul className="pl-4">
                  <li>
                    <Nav.Link href="/agregarLicor" className="text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">Agregar Licor</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/verLicor" className="text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">Ver Licores</Nav.Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Nav.Link
                href="/user"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ProfileIcon className="w-5 h-5" />
                <span className="ms-3">Perfil</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={handleLogout}
              >
                <LogoutIcon className="w-5 h-5" />
                <span className="ms-3">Log out</span>
              </Nav.Link>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

export default BarNavi;
