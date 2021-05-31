import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "./Slider";
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
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


const Series = () => {
  const classes = useStyles();
  const history = useHistory();
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
  
    return (
      <div className= {classes.root}> 
       <Container className= {classes.sliderContainer}>
          <div onClick = {()=> { history.push("/tv/trending")}}> 
            <TituloSlider title={"Series que son Tendencia"} /> 
          </div>
          <Slider ruta={`trending/tv/week?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
        <Container className= {classes.sliderContainer}>
          <div onClick = {()=> { history.push("/tv/trending")}}>
            <TituloSlider title={"Series populares"} />
          </div> 
            <Slider ruta={`tv/popular?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
        <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/tv/top_rated")}}>
              <TituloSlider title={"Series con mejores críticas"} /> 
            </div> 
            <Slider ruta={`tv/top_rated?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
         <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/tv/on_the_air")}}>
               <TituloSlider title={"Series en el aire"} /> 
            </div> 
            <Slider ruta={`tv/on_the_air?language=en-US&page=1&api_key=${APIKEY}`}/>
        </Container>
        
        
      </div>
    );
  }
  
  export default Series