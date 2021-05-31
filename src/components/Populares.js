import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Slider from "./Slider";
import TituloSlider from "./TituloSlider";
import {
  BrowserRouter, 
  Route, 
  Link, 
  Switch, useHistory, useParams, useLocation,
  } 
  from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    width:"100%",
    color: "#fafafa",
  },
});


const Populares = () => {
  const classes = useStyles();
  const history = useHistory();
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;

    return (
      <div className= {classes.root}>
        <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/movie/popular")}}>
               <TituloSlider title={"Películas populares"} />
            </div> 
            <Slider ruta={`movie/popular?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
         <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/tv/popular")}}>
              <TituloSlider title={"Series populares"} />
            </div> 
            <Slider ruta={`tv/popular?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
      </div>
      
    );
  }
  
  export default Populares