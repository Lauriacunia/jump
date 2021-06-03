
import React, { useRef, useState, useEffect } from "react";
import CardSimple from "./CardSimple";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);

const handleClick = (e) => {
  console.log("hola")
  console.log(e.target.id)
}


const SliderMultiple = ({categoria, subcategoria}) => {
  console.log(categoria)
  console.log(subcategoria)
 
  const BASE_URL = `https://api.themoviedb.org/3`
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
  let queryParams = `?language=en-US&page=1&api_key=${APIKEY}`
  let ruta = ``
  console.log(ruta)

  const concatenarRuta = (pathASumar) => {
    ruta = ruta + pathASumar
  }
   

  {categoria === `movie` && concatenarRuta("/movie")}
  {categoria === `tv` &&  concatenarRuta("/tv")}
  {categoria === `trendingMovie` && concatenarRuta(`/trending/movie/week`)}
  {categoria === `trendingSerie` && concatenarRuta(`/trending/tv/week`)}
  {subcategoria === `topRated` && concatenarRuta(`/top_rated`)}
  {subcategoria === `popular` && concatenarRuta(`/popular`)}
  {subcategoria === `nowPlaying` && concatenarRuta(`/now_playing`)}
  {subcategoria === `upcoming` && concatenarRuta(`/upcoming`)}
  {subcategoria === `onTheAir` && concatenarRuta(`/on_the_air`)}

  console.log(ruta)

  const [resultados, setResultados] = useState([]);

  useEffect(() => {
      
      const searchString = `${BASE_URL}${ruta}${queryParams}`
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
       
      <Swiper slidesPerView={3} 
              spaceBetween={1} 
              slidesPerGroup={5} 
              loop={true} 
              loopFillGroupWithBlank={true} 
              navigation={true} 
              className="mySwiper">
          {
            resultados.map((resultado) => {
                return (
                    <SwiperSlide key={resultado.id}
                                 id={resultado.id}
                                 onClick={handleClick}>
                        <CardSimple
                            resultado={resultado}
                            />
                    </SwiperSlide>
                )
            })
        }       
      </Swiper>
    </>
  )
}

export default SliderMultiple