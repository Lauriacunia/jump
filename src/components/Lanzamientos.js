import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  useHistory,
  } 
  from 'react-router-dom'
import SliderMultiple from "./SliderMultiple";
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import TituloSlider from "./TituloSlider";


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

    return (
      <div className= {classes.root}>  

        <Container className= {classes.sliderContainer}>
            <div onClick = {()=> { history.push("/movie/upcoming")}}> 
              <TituloSlider title={"Películas a estrenarse"} />
            </div> 
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