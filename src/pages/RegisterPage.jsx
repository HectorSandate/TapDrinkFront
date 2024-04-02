// LoginPage.js
import React from 'react';
import BarNavi from '../components/RegisterNav';
import '../css/RegisterPage.css';
import Carrousel from '../components/LoginCarrousel';
import Register from '../components/RegisterForm';
import { ToastContainer } from 'react-bootstrap';


function RegisterPage() {
  return (
    <>
      <div className='bar-navigator-container'>
        <BarNavi />
      </div>
      <div className='register-page-container black-background'>
        <div className='register-form-container'>
        <ToastContainer/>
          <Register />
        </div>
        <div className='register-carrousel-container'>
          <Carrousel />
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
