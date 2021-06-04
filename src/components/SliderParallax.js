
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./SliderParallax.css";
import Boton from "./Boton";
import {
  useHistory
  } 
  from 'react-router-dom'


import SwiperCore, {
  Parallax, Navigation, Pagination
} from 'swiper/core';

SwiperCore.use([Parallax, Navigation, Pagination]);


const SliderParallax = ({ruta}) => {
  console.log(ruta)
  const history = useHistory();

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
      console.log("entre al fecth de parallax")
      const BASE_URL = `https://api.themoviedb.org/3/`
      const searchString = `${BASE_URL}${ruta}`
      console.log(searchString)

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
                               
                    <SwiperSlide className="swiper-slide">
                      <div slot="container-start" className="parallax-bg" style={{'background-image': `url(https://image.tmdb.org/t/p/w370_and_h556_bestv2/${resultado.backdrop_path})`}} data-swiper-parallax="-23%"></div>
                   
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
                        <Boton onClick = {()=> { history.push("/movie")}}/>
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