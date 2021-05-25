import React from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Slider from "./Slider";
import TituloSlider from "./TituloSlider";

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
  },
  tituloContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
 
  flecha: {
    width:30,
    height: 25,
    marginLeft:20,
  }
   
});


const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;

  return (
    <div className= {classes.root}>

      <div className= {classes.parallaxContainer}>
     
      </div>
      
      <Container className= {classes.sliderContainer}>
        <TituloSlider title={"Peliculas populares"} />       
        <Slider ruta ={`movie/popular?language=en-US&page=1&api_key=${APIKEY}`}/>  
      </Container>
      
      <Container className= {classes.sliderContainer}>
        <TituloSlider title={"Peliculas Mejor Rankeadas"} />
        <Slider ruta ={`movie/top_rated?language=en-US&page=1&api_key=${APIKEY}`}/>  
      </Container>

    </div>
  );
}

export default Home