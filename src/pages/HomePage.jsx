import React from 'react';
import BarNavi from '../components/HomeNav';
import '../css/HomePage.css';
 import BebidaFormulario from '../components/HomeSearch';
// import HomeCarrousel from '../components/HomeCarousel';


function HomePage() {
  return (
    <>
      <div className='bar-navigator-container'>
        <BarNavi />
      </div>
      <div className='home-page-container black-background'>
         <div className='search-page'>
              <BebidaFormulario />
        </div>
      </div>
    </>
  );
}

export default HomePage;
