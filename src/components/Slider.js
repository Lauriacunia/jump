
import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CardSimple from "./CardSimple";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);

const useStyles = makeStyles({

  
});

const handleClick = (e) => {
  console.log("hola")
  console.log(e.target.id)
}

const Slider = ({ruta}) => {
  console.log(ruta)
  const classes = useStyles();
  const [resultados, setResultados] = useState([]);

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

export default Slider