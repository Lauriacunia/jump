import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Slider from "./Slider";

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    width:"100%",
    color: "#fafafa",
  },
});


const Populares = () => {
  const classes = useStyles();
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;

    return (
      <div className= {classes.root}>
        <Container className= {classes.sliderContainer}>
            <Typography variant="h6" gutterBottom>
              Películas populares
            </Typography>
            <Slider ruta={`movie/popular?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
         <Container className= {classes.sliderContainer}>
            <Typography variant="h6" gutterBottom>
              Series populares
            </Typography>
            <Slider ruta={`tv/popular?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
      </div>
      
    );
  }
  
  export default Populares