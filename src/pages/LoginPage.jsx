import React from 'react';
import BarNavigator from '../components/navbar';
import Login from '../components/LoginForm';
import '../css/LoginPage.css';
import { ToastContainer } from 'react-bootstrap';
import imgs1 from '../assets/images/cocteles.png';

function LoginPage() {
  return (
    <>
      <div className='bar-navigator-container'>
        <BarNavigator />
      </div>
      <div className='login-page-container black-background'>
        <ToastContainer/>
        <div className='login-form-container'>
          <Login />
        </div>
        <div className='coctel-img-container'>
          <img src={imgs1} alt="coctel" className='coctel-img'/>
        </div>
      </div>
    </>
  );
}

export default LoginPage;