import React, { useState, useRef } from 'react';
import pfp from '../assets/images/user.jpg';
import { useAuth } from './context/AuthContext';
import Modal from "../components/modal/Modal.jsx";
import UserUpdate from "./userUpdate.jsx";
import '../css/card.css';

import { useNavigate } from "react-router-dom";


import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";

const UserPage = () => {
  const { user, logout } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false); 
  const [showLogoutConfirmationModal, setShowLogoutConfirmationModal] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const toggleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModalOpen(!isModalOpen);
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
    <div className="user-size">
      <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
          <div className="text-center my-4">
            <img className="recipe-image rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4" src={pfp} alt="pfp" />
            <div className="py-2">
              <h3 className="font-bold text-3xl text-gray-600 text-black mb-1">{user ? user.name : "User"}</h3>
              <div className="inline-flex user-name dark:text-black items-center">
                <EmailIcon className="h-8 w-8 text-gray-400 dark:text-gray-600 mr-1" />
                {user ? user.email : "user@example.com"}
              </div>
            </div>
          </div>
          <div className="flex gap-2 px-2 mt-4">
            <button
              className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white hover:bg-green-800 dark:hover:bg-green-900 px-4 py-2"
              onClick={toggleModal}
            >
              Actualizar Datos
            </button>
            {isModalOpen && (
              <Modal isOpen={isModalOpen} close={toggleModal}>
                <UserUpdate />
              </Modal>
            )}
            <button
              className="flex-1 rounded-full bg-red-600 dark:bg-red-800 hover:bg-green-800 dark:hover:bg-green-900 text-white dark:text-white px-4 py-2"
              onClick={handleLogout}
            >
              Log Out
            </button>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
