
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
  Parallax, Navigation, Pagination
} from 'swiper/core';

SwiperCore.use([Parallax, Navigation, Pagination]);


const SliderParallax = ({ruta}) => {

  const [resultados, setResultados] = useState([]);
  
  const recortarTitulo = (str) => {
    let strCorto = `${str.slice(0, 28)}...`
    return strCorto;
  };

    const handleClick = (e) => {
        console.log("hola")
        console.log(e.target)
    }


  useEffect(() => {
      const BASE_URL = `https://api.themoviedb.org/3/`
      const searchString = `${BASE_URL}${ruta}`

      fetch(searchString)
          .then(res => res.json())
          .then(data => {
              console.log(data.results)
              setResultados(data.results)
          })
  }, []);

  return (
    <>

      <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} speed={600} parallax={true} pagination={{
        "clickable": true
      }} navigation={true} className="mySwiper">
        
        
        {
            resultados.map((resultado) => {
                return (
                  <React.Fragment key={resultado.id}> 
                    <div slot="container-start" className="parallax-bg" style={{ 'background-image': `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${resultado.backdrop_path}` }} data-swiper-parallax="-23%"> </div>             
                    <SwiperSlide>
                      <div className="title" data-swiper-parallax="-300">
                          { resultado.title
                            ? resultado.title.length < 28 
                                  ? resultado.title 
                                  : recortarTitulo(resultado.title)
                            : resultado.name 
                              ? resultado.name.length < 28 
                                ? resultado.name
                                : recortarTitulo(resultado.name)   
                              : resultado.name
                         }
                      </div>
                      <div className="text" data-swiper-parallax="-100">
                        <p>{resultado.overview}</p>
                      </div>
                  </SwiperSlide>
                 
                  </React.Fragment>
                )
            })
        }       

       


      </Swiper>
    </>
  )
}

export default SliderParallax