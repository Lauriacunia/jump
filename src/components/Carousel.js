
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./Carousel.css";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay, EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, EffectCoverflow,Pagination]);



const Carousel = () => {

    return (
        <>
        <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true
        }} pagination={{
            "clickable": true
        }} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
        }} className="mySwiper">
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide>
        </Swiper>
        
        </>
    );
}

export default Carousel