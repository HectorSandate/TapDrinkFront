import { useState, useRef } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import logo from "../assets/images/iconOther.png";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as RecipeIcon } from "../assets/icons/recipe.svg";
import { ReactComponent as LiquorIcon } from "../assets/icons/liquor.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/logout.svg";
import { ReactComponent as ProfileIcon } from "../assets/icons/profile.svg";
import { useAuth } from "../components/context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "../css/HomeNav.css";
import Modal from "../components/modal/Modal";
import LicorFormPopover from "../components/registroLicorzz";

const BarNavi = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showLicorModal, setShowLicorModal] = useState(false);

  const navigate = useNavigate();

  const [showLogoutConfirmationModal, setShowLogoutConfirmationModal] = useState(false);
  const modalRef = useRef(null);

  const { user } = useAuth();
  const { logout } = useAuth();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleLiquorDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openLicorModal = () => {
    setShowLicorModal(true);
  };

  const closeLicorModal = () => {
    setShowLicorModal(false);
  };

  const handleLogout = () => {
    setShowLogoutConfirmationModal(true); 
  };

  const handleCloseConfirmModal = () => {
    setShowLogoutConfirmationModal(false);
  };

  const confirmLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar
      expand={false}
      className={`${isNavbarTransparent ? "bg-transparent" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand>
          <Image alt="logo" src={logo} className="logoStyle mt-2" />
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
          className={`fixed top-5 left-2 bottom-5 rounded-lg p-1 w-1/6 overflow-y-auto transition-transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 dark:bg-gray-800`}
          tabIndex="-1"
          aria-labelledby="drawer-backdrop-label"
        >
          <h5
            id="drawer-backdrop-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            Menu
          </h5>
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
                <div className="flex items-center">
                  <HomeIcon className="w-5 h-5 mr-3" />
                  <span className="flex-1 text-left">Inicio</span>
                </div>
              </Nav.Link>
            </li>
            {user && user.nivel !== "user" && (
              <li>
                <Nav.Link
                  href="/recetas"
                  className="flex items-center p-2 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group "
                >
                  <div className="flex items-center">
                    <RecipeIcon className="w-5 h-5 mr-3" />
                    <span className="flex-1 text-left">Ingresar Receta</span>
                  </div>
                </Nav.Link>
              </li>
            )}

            {user && user.nivel !== "user" && (
              <li>
                <button
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  onClick={toggleLiquorDropdown}
                >
                  <LiquorIcon className="w-5 h-5" />
                  <span className="flex-1 ms-3 text-left">Licor</span>
                  <svg
                    className="w-4 h-4 transform transition-transform"
                    style={{ rotate: isOpen ? "180deg" : "0deg" }}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.5 2L7.5 7L12.5 2"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <ul className="pl-4">
                    <li>
                      <Nav.Link
                        href="#"
                        className="text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
                        onClick={openLicorModal}
                      >
                        Agregar Licor
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        href="/verLicor"
                        className="text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Ver Licores
                      </Nav.Link>
                    </li>
                  </ul>
                )}
              </li>
            )}

            <li>
              <Nav.Link
                href="/user"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center">
                  <ProfileIcon className="w-5 h-5 mr-3 " />
                  <span className="flex-1 text-left">Perfil</span>
                </div>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={handleLogout}
              >
                <div className="flex items-center">
                  <LogoutIcon className="w-5 h-5 mr-3" />
                  <span className="flex-1 text-left">Log out</span>
                </div>
              </Nav.Link>
            </li>

            <li className="mt-auto">
              <div className="flex -space-x-1 pl-4 overflow-hidden">
                <img
                  className="mt-[450px] inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                {user && (
                  <div className="mt-[450px] pl-4 text-gray-900 rounded-lg dark:text-white">
                    <p>
                      Bienvenido, {user.name} - Nivel: {user.nivel}
                    </p>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </Container>

      {showLogoutConfirmationModal && (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-900 bg-opacity-70 z-50 flex justify-center items-center">
          <div ref={modalRef} className="bg-white p-12 rounded-lg max-w-md">
            <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-12">
              Cerrar Sesión
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-12">
              Al confirmar saldrás de tu sesión. ¿Estás seguro?
            </p>
            <button
              onClick={confirmLogout} 
              className="block bg-red-600 text-white px-5 py-2.5 rounded-lg mr-3 focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              Si, cerrar sesión
            </button>
            <button
              onClick={handleCloseConfirmModal}
              className="block bg-gray-200 text-black px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-300 mt-3"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <Modal isOpen={showLicorModal} close={closeLicorModal}>
        <LicorFormPopover />
      </Modal>
    </Navbar>
  );
};

export default BarNavi;
