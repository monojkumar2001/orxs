
import React, { useRef, useState } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SwiperItem = () => {
  return (
    <>
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        
        centeredSlides={true}
        slidesPerView={"4"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          runCallbacksOnInit: true,
          slideShadows: true,
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Navigation, A11y]}
        className="mySwiper"
       
      >
        <SwiperSlide>
          <img src="images/swiper-img1.svg" alt="" className="swiper-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/swiper-img2.svg" alt="" className="swiper-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/swiper-img3.svg" alt="" className="swiper-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/swiper-img4.svg" alt="" className="swiper-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/swiper-img5.svg" alt="" className="swiper-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/swiper-img6.svg" alt="" className="swiper-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/swiper-img7.svg" alt="" className="swiper-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/swiper-img8.svg" alt="" className="swiper-slide-img" />
        </SwiperSlide>
       
      </Swiper>
      <div className="slider-nav">
          <div className="prev  grow-arrow-nav">
            <svg
              width="18"
              height="22"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L1 7.5L8 14"
                stroke="#071727"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="next grow-arrow-nav">
            <svg
              width="18"
              height="22"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14L8 7.5L1 1"
                stroke="#071727"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
    </>
  )
}

export default SwiperItem