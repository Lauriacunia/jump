import React from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SliderMultiple from "./SliderMultiple";
import TituloSlider from "./TituloSlider";
import SliderParallax from "./SliderParallax";

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    color: "#fafafa",
    width: "100%",
  },
  slidersContainer: {
    height: 320,
    marginTop: 50,
    backgroundColor: "red",
  },
  tituloContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  parallaxContainer: {
    width: "100%",
    height: "70vh",
    backgroundColor: "red",
    marginBottom: "50px",
  },
  flecha: {
    width: 30,
    height: 25,
    marginLeft: 20,
  }

});


const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;

  return (
    <div className={classes.root}>
      <Container className={classes.parallaxContainer}>
      <SliderParallax ruta={`movie/popular?language=en-US&page=1&api_key=${APIKEY}`} />
      </Container>

      <Container className={classes.sliderContainer}>
        <div onClick={() => { history.push(`/movie/popular`) }}>
          <TituloSlider title={"Peliculas populares"} />
        </div>
        <SliderMultiple categoria={`movie`}
          subcategoria={`popular`} />
      </Container>

      <Container className={classes.sliderContainer}>
        <div onClick={() => { history.push(`/movie/top_rated`) }}>
          <TituloSlider title={"Peliculas Mejor Rankeadas"} />
        </div>
        <SliderMultiple categoria={`movie`}
          subcategoria={`topRated`} />
      </Container>

    </div>
  );
}

export default Home