import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  useHistory,
  } 
  from 'react-router-dom'
import SliderMultiple from "./SliderMultiple";
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import TituloSlider from "./TituloSlider";
import Hero from './Hero';
import llama from '../assets/llama.json'


const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    width:"100%",
    color: "#fafafa",
  },
   
});


const Lanzamientos = () => {
  const classes = useStyles();
  const history = useHistory();
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 

    return (
      <div className= {classes.root}>  
        <Hero title={"No puedes resistirte a los estrenos"}
              animation={llama}              
              height={450}
              width={450}/>

              {/* esto deberia estar componentizado */}
        <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/movie/upcoming")}}> 
              <TituloSlider title={"Películas a estrenarse"} />
            </div> 
            {/* usa comillas simples o dobles si no vas a pasar variables, y no uses llaves si el prop es solo string */}
            <SliderMultiple categoria = {`movie`}
                            subcategoria= {`upcoming`}/>
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
  
  export default Lanzamientos
