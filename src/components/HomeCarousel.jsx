import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import '../css/Carousel.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import img1 from '../assets/images/coctel1.jpeg';
import img2 from '../assets/images/coctel2.jpeg';
import img3 from '../assets/images/coctel3.jpeg';

function HomeCarrousel() {
  return (
    <div className='carouselContainer'>
      <Swiper
        effect={'coverflow'}
        grabCursor={ true }
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }
        }
        pagination={{el:'.swiper-pagination',clickable:true}}
        navigation={{
          nextEl:'.swiper-button-prev',
          prevEl:'.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'   
      >
        <SwiperSlide>
          <img src={img1} alt="slideImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slideImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slideImage" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeCarrousel;
