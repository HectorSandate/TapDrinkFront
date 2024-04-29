import React from 'react';
import BarNavi from '../components/RegisterNav';
import Register from '../components/RegisterForm';
import imgs1 from '../assets/images/cocteles.png';
import "../css/forms.css";

function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-400">
      <div className="bar-navigator-container">
        <BarNavi />
      </div>
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center overflow-hidden text-white black-background">
        <div className="w-full md:w-2/5 order-2 md:order-1 relative top-10">
          <Register />
        </div>
        <div className="w-full md:w-3/5 p-4 order-1 md:order-2 flex justify-center items-center relative top-8 left-5">
          <img src={imgs1} alt="coctel" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;