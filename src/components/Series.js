import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SliderMultiple from "./SliderMultiple";
import { Container } from '@material-ui/core';
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
          <SliderMultiple categoria = {`trendingSerie`}
                          subcategoria= {``} />
        </Container>
        <Container className= {classes.sliderContainer}>
          <div onClick = {()=> { history.push("/tv/trending")}}>
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