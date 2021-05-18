
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./Slider.css";
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';
import CardSm from "./CardSm";


SwiperCore.use([Pagination, Navigation]);


const Slider = () => {
  
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
      <Swiper slidesPerView={3} 
              spaceBetween={10} 
              slidesPerGroup={3} 
              loop={true} 
              loopFillGroupWithBlank={true} 
              navigation={true} 
              className="mySwiper">
          <SwiperSlide>
                {
                    resultados.map((resultado) => {
                        return (
                            <SwiperSlide>
                                <CardSm
                                    resultado={resultado}
                                    />
                            </SwiperSlide>
                        )
                    })
                }
          </SwiperSlide>
          
      </Swiper>
    </>
  )
}

export default Slider