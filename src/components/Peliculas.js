import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "./Slider";
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    width:"100%",
    color: "#fafafa",
  },
});

const Peliculas = () => {
  const classes = useStyles();
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;

    return (
      <div className= {classes.root}>
        <Container className= {classes.sliderContainer}>
            <Typography variant="h6" gutterBottom>
              Películas con son tendencia
            </Typography>
            <Slider ruta={`trending/movie/week?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
        <Container className= {classes.sliderContainer}>
            <Typography variant="h6" gutterBottom>
              Películas con mejores críticas
            </Typography>
            <Slider ruta={`movie/top_rated?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
         <Container className= {classes.sliderContainer}>
            <Typography variant="h6" gutterBottom>
              Películas populares
            </Typography>
            <Slider ruta={`movie/popular?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
        <Container className= {classes.sliderContainer}>
            <Typography variant="h6" gutterBottom>
              Películas ahora en cine
            </Typography>
            <Slider ruta={`movie/now_playing?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
        <Container className= {classes.sliderContainer}>
            <Typography variant="h6" gutterBottom>
              Películas a estrenarse
            </Typography>
            <Slider ruta={`movie/upcoming?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
      </div>
    );
  }
  
  export default Peliculas