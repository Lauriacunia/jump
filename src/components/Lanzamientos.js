import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "./Slider";
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import TituloSlider from "./TituloSlider";


const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    width:"100%",
    color: "#fafafa",
  },
   
});


const Lanzamientos = () => {
  const classes = useStyles();
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;

    return (
      <div className= {classes.root}>  

        <Container className= {classes.sliderContainer}>
            <TituloSlider title={"Películas a estrenarse"} /> 
            <Slider ruta={`movie/upcoming?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>

         <Container className= {classes.sliderContainer}>
            <TituloSlider title={"Series en el aire"} /> 
            <Slider ruta={`tv/on_the_air?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
        
      
      </div>
    );
  }
  
  export default Lanzamientos