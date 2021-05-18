
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "./Carousel.css";
import CardBasic from "./CardBasic";
import SwiperCore, {
    Autoplay, EffectCoverflow, Pagination
} from 'swiper/core';

SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);


const Carousel = () => {

    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const BASE_URL = `https://api.themoviedb.org/3/tv/on_the_air?api_key=c30046e601e1f588297bc67b7f52c812&language=en-US&page=1`
        const searchString = BASE_URL

        fetch(searchString)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setResultados(data.results)
            })
    }, []);


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
                "disableOnInteraction": false,
            }} className="mySwiper">

                {
                    resultados.map((resultado) => {
                        return (
                            <SwiperSlide>
                                <CardBasic 
                                    resultado={resultado}
                                     />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </>
    );
}

export default Carousel


