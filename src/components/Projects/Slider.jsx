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

export const Slider = () => {
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
        <SwiperSlide>
          <div className='projects-cards'>
            <div className='projects-image-content'>
              <span className='overlay'>
                <img src="./img/gpt3-img.png" alt="" className='card-img' />
              </span>

              <div className='projects-cards-image'>
                {/**/}
              </div>
            </div>

            <div className='projects-cards-content'>
              <h2 className='name' key={1} >GPT-3</h2>
              <p className="description" key={2} >A fake responsive website about GPT-3 that is supposed to inform about the potentials of AI and request backers to help fund the vision.</p>
              
              <div className='buttons'>
                <button className='button-1'>View Code</button>
                <button className='button-2'>Live Demo</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/wedding-rsvp.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/gpt3-img.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/wedding-rsvp.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/gpt3-img.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/wedding-rsvp.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/gpt3-img.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/wedding-rsvp.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/gpt3-img.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}