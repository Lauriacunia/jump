import React, { useEffect } from 'react';
import { useHistory, useParams, useLocation, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import SliderMultiple from "./SliderMultiple";
import TituloSlider from "./TituloSlider";
import SliderParallax from "./SliderParallax";
import Animation from './Animation';
import dino from '../assets/dino.json'

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    color: "#fafafa",
    padding: 0,
    width: "100%",
  },
  slidersContainer: {
    height: 320,
    marginTop: 50,
    padding: 0,
    width: "100%",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  parallaxContainer: {
    display: "flex",
    padding: 0,
    width: "100%",
    height: "70vh",
    backgroundColor: "red",
    marginBottom: "50px",
  },
  flecha: {
    width: 30,
    height: 25,
    marginLeft: 20,
  },
});

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container className={classes.root} maxWidth={false}>
      <Container className={classes.parallaxContainer}>
        <SliderParallax
          ruta={`movie/popular?language=en-US&page=1&api_key=${APIKEY}`}
        />
      </Container>

      <Container className={classes.sliderContainer} maxWidth={false}>
        <div className={classes.titleContainer}
             onClick={() => {
                history.push(`/movie/popular`);
             }}
        >
          <TituloSlider title={"Peliculas populares"} />
        </div>
        <SliderMultiple categoria={`movie`} subcategoria={`popular`} />
      </Container>

      <Animation height={'500px'} width={'500px'} myAnimation={dino} />

      <Container className={classes.sliderContainer} maxWidth={false}>
        <div className={classes.titleContainer}
             onClick={() => {
              history.push(`/movie/top_rated`);
             }}
        >
          <TituloSlider title={"Peliculas Mejor Rankeadas"} />
        </div>
        <SliderMultiple categoria={`movie`} subcategoria={`topRated`} />
      </Container>
    </Container>
  );
};

export default Home;
