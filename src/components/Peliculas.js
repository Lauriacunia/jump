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
import GridContainer2 from "./GridContainer2";

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
            <TituloSlider title={"Películas que son tendencia"} /> 
            <Slider ruta={`trending/movie/week?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>

        <Container className= {classes.sliderContainer}>
            <TituloSlider title={"Películas con mejores críticas"} /> 
            <Slider ruta={`movie/top_rated?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>

         <Container className= {classes.sliderContainer}
                    onClick = {()=> { history.push("/movie/populares")}}>
            <TituloSlider title={"Películas populares"} /> 
            <Slider ruta={`movie/popular?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>

        <Container className= {classes.sliderContainer}>
            <TituloSlider title={" Películas ahora en cine"} /> 
            <Slider ruta={`movie/now_playing?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
        <Container className= {classes.sliderContainer}>
            <TituloSlider title={"Películas a estrenarse"} /> 
            <Slider ruta={`movie/upcoming?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
     
       <Switch>
          <Route  path="/movie/popular" component={GridContainer2}/>
          <Route exact path="/movie/trending" component={GridContainer2}/>
          <Route exact path="/movie/now_playing" component={GridContainer2}/>
          <Route exact path="/movie/up_coming" component={GridContainer2}/>
          <Route exact path="/movie/top_rated" component={GridContainer2}/>
       </Switch>

       </div>
    );

   
  }
  
  export default Peliculas