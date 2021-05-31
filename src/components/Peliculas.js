import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter, 
    Route, 
    Link, 
    Switch, useHistory, useParams, useLocation,
    } 
    from 'react-router-dom'

import Slider from "./Slider";
import { Container } from '@material-ui/core';
import TituloSlider from "./TituloSlider";


const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    width:"100%",
    color: "#fafafa",
  },
});

const Peliculas = () => {
  const classes = useStyles();
  const history = useHistory();
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;

    return (
      <div className= {classes.root}>

        <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/movie/popular")}}>
              <TituloSlider title={"Películas que son tendencia"} /> 
            </div>
            <Slider ruta={`trending/movie/week?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>

        <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/movie/top_rated")}}>
              <TituloSlider title={"Películas con mejores críticas"} /> 
            </div>
            <Slider ruta={`movie/top_rated?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>

         <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/movie/popular")}}>
               <TituloSlider title={"Películas populares"} /> 
            </div>
            <Slider ruta={`movie/popular?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>

        <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/movie/now_playing")}}> 
               <TituloSlider title={" Películas ahora en cine"} /> 
            </div>
            <Slider ruta={`movie/now_playing?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
        <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/movie/up_coming")}}> 
               <TituloSlider title={"Películas a estrenarse"} /> 
            </div>
            <Slider ruta={`movie/upcoming?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>

       </div>
    );

   
  }
  
  export default Peliculas