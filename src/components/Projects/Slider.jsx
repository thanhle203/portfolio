import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export const Slider = ({data}) => {
  return (
    <>
      <Swiper
        rewind={true}
        effect={'coverflow'}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide>
          <div className='projects-cards'>
            <div className='projects-image-content'>
              <span className='overlay'>
                <img src={item.img} alt="" className='card-img' />
              </span>

              <div className='projects-cards-image'>
                {/**/}
              </div>
            </div>

            <div className='projects-cards-content'>
              <h2 className='name' key={item.id} >{item.name}</h2>
              <p className="description" key={item.desc} >{item.desc}</p>
              
              <div className='buttons'>
                <button className='button-1'>View Code</button>
                <button className='button-2'>Live Demo</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}