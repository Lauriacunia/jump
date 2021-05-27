
import React, { useRef, useState, useEffect } from "react";
import Swiper from 'react-id-swiper';
import CardSm from "./CardSm";

  const SliderMultiple = () => { 
    const [resultados, setResultados] = useState([]);
    
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

   

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
      <Swiper {...params}>      
        {
            resultados.map((resultado) => {
                return (
                    <div className="swiper-slide">
                        <CardSm
                            resultado={resultado}
                            />
                    </div>
                )
            })
        }       
      </Swiper>
    )
  };

  export default SliderMultiple;
    