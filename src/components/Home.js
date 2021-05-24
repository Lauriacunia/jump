import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SliderMultiple from "./SliderMultiple";
import { Container } from '@material-ui/core';
import Slider from "./Slider";


const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    color: "#fafafa",
    width:"100%",
  },
  slidersContainer: {
    height: 320,
    marginTop: 50,
    backgroundColor: "red",
  }
   
});


const Home = () => {
  const classes = useStyles();
 
  return (
    <div className= {classes.root}>

      <div className= {classes.parallaxContainer}>
     
      </div>
      <Container className= {classes.sliderContainer}>
        <Typography variant="h6" gutterBottom>
          Peliculas Populares
        </Typography>
        <Slider ruta ={`movie/popular?api_key=c30046e601e1f588297bc67b7f52c812&language=en-US&page=1`}/>  
      </Container>
      <Container className= {classes.sliderContainer}>
        <Typography variant="h6" gutterBottom>
          Peliculas Mejor Rankeadas
        </Typography>
        <Slider ruta ={`movie/top_rated?api_key=c30046e601e1f588297bc67b7f52c812&language=en-US&page=1`}/>  
      </Container>

    </div>
  );
}

export default Home