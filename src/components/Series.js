import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import SliderMultiple from "./SliderMultiple";
import { Container } from '@material-ui/core';
import TituloSlider from "./TituloSlider";
import {
  useHistory
  } 
  from 'react-router-dom'
import Hero from './Hero';
import chick from '../assets/chick.json'

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
  
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 

    return (
      <div className= {classes.root}> 
      <Hero title={"¿Estás listo para una Maratón?"}
              animation={chick}              
              height={350}
              width={350}/>
       <Container className= {classes.sliderContainer}>
          <div onClick = {()=> { history.push("/trending/tv/week")}}> 
            <TituloSlider title={"Series que son Tendencia"} /> 
          </div>
          <SliderMultiple categoria = {`trendingSerie`}
                          subcategoria= {``} />
        </Container>
        <Container className= {classes.sliderContainer}>
          <div onClick = {()=> { history.push("/tv/popular")}}>
            <TituloSlider title={"Series populares"} />
          </div> 
            <SliderMultiple categoria = {`tv`}
                            subcategoria= {`popular`} />
        </Container>
        <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/tv/top_rated")}}>
              <TituloSlider title={"Series con mejores críticas"} /> 
            </div> 
            <SliderMultiple categoria = {`tv`}
                            subcategoria= {`topRated`} />
        </Container>
         <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/tv/on_the_air")}}>
               <TituloSlider title={"Series en el aire"} /> 
            </div> 
            <SliderMultiple categoria = {`tv`}
                            subcategoria= {`onTheAir`}/>
        </Container>
          
      </div>
    );
  }
  
  export default Series