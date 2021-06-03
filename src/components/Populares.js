import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SliderMultiple from "./SliderMultiple";
import TituloSlider from "./TituloSlider";
import {
  useHistory
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
            <SliderMultiple categoria = {`movie`}
                            subcategoria= {`popular`} />
        </Container>
         <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/tv/popular")}}>
              <TituloSlider title={"Series populares"} />
            </div> 
            <SliderMultiple categoria = {`tv`}
                            subcategoria= {`popular`} />
        </Container>
      </div>
      
    );
  }
  
  export default Populares