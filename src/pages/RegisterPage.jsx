// LoginPage.js
import React from 'react';
import BarNavi from '../components/RegisterNav';
import '../css/RegisterPage.css';
import Register from '../components/RegisterForm';
import { ToastContainer } from 'react-bootstrap';
import imgs1 from '../assets/images/cocteles.png';


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
        <div className='coctel-img-container'>
          <img src={imgs1} alt="coctel" className='coctel-img'/>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
