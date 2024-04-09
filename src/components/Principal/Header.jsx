import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/images/header.png';

const Header = () => {
  return (
    <header
      className="flex justify-between items-center p-4 h-16"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h1 className="text-3xl font-bold text-white">TapDrink</h1>
      <div className="flex items-center">
        <a href="/login" className="flex items-center text-white mr-6 hover:text-yellow-500">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Login
        </a>
        <button className="text-white mr-6 hover:text-yellow-500">
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
        </button>
        <button className="text-white hover:text-yellow-500">
          <FontAwesomeIcon icon={faBars} className="mr-2" />
        </button>
      </div>
    </header>
  );
};

export default Header;


  
