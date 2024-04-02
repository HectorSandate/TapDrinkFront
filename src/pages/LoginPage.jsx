// LoginPage.js
import React from 'react';
import BarNavigator from '../components/navbar';
import Login from '../components/LoginForm';
import '../css/LoginPage.css';
import Carrousel from '../components/LoginCarrousel';
import { ToastContainer } from 'react-bootstrap';

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
        <div className='login-carrousel-container'>
          <Carrousel />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
