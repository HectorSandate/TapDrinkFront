import React, { useState } from 'react';
import pfp from '../assets/images/pinfuino.jpeg';
import { useAuth } from './context/AuthContext';
import Modal from "../components/modal/Modal.jsx";
import UserUpdate from "./userUpdate.jsx";
import '../css/card.css';


import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";

const UserPage = () => {
  const { user, logout } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModalOpen(!isModalOpen);
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
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
