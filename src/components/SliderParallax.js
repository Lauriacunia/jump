
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from '@material-ui/core/styles';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./SliderParallax.css";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import cyan from '@material-ui/core/colors/cyan';


import SwiperCore, {
  Parallax, Navigation, Pagination, Autoplay
} from 'swiper/core';

SwiperCore.use([Parallax, Navigation, Pagination, Autoplay]);


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  boton: {
      color:"white",
      borderRadius: 0,
  }
}));



const SliderParallax = ({ruta}) => {
  console.log(ruta)
  const history = useHistory();
  const classes = useStyles();

  const [resultados, setResultados] = useState([]);
 
  
  const recortarTitulo = (str) => {
    let strCorto = `${str.slice(0, 28)}...`
    return strCorto;
  };


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

      <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} 
              speed={600} 
              parallax={true} pagination={{
              "clickable": true
              }} navigation={true} 
              autoplay={{
              "delay": 4000, 
              "disableOnInteraction": false
              }}
              className="mySwiper">
        
        {
            resultados.map((resultado) => {
                return (
                  <React.Fragment key={resultado.id}> 
                               
                    <SwiperSlide className="swiper-slide">
                      <div slot="container-start" className="parallax-bg" style={{'background-image': `url(https://image.tmdb.org/t/p/w370_and_h556_bestv2/${resultado.backdrop_path})`}} data-swiper-parallax="-23%"></div>
                   
                        <div>
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
                        </div>
                    
                        <Button className={classes.boton} color="primary" variant="contained"
                                onClick = {()=> { console.log("hiciste click en la card ")
                                                  history.push(`/movie/${resultado.id}`)}}>
                                ver
                        </Button>
                        
                        
                 
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