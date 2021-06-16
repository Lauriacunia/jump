import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Lanzamientos from "./components/Lanzamientos";
import Populares from "./components/Populares";
import Peliculas from "./components/Peliculas";
import Series from "./components/Series";
import Buscador from "./components/Buscador";
import CardDetail from "./components/CardDetail";
import GridContainerCategoria from './components/GridContainerCategorias';
import Footer from "./components/Footer";
import Page404 from './components/Page404';

const useStyles = makeStyles({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: "black",
    },
  },
  mainContainer: {
    width: "100%",
    padding: 0,
  },
});

const App = () => {
  const classes = useStyles();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <BrowserRouter>
      <Container className={classes.mainContainer} maxWidth={false}>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={Lanzamientos} />
          <Route exact path="/popular" component={Populares} />
          <Route exact path="/movie" component={Peliculas} />
          <Route exact path="/tv" component={Series} />
          <Route exact path="/search" component={Buscador} />

          <Route exact path="/movie/popular" component={GridContainerCategoria} />
          <Route exact path="/trending/movie/week" component={GridContainerCategoria} />
          <Route exact path="/movie/now_playing" component={GridContainerCategoria} />
          <Route exact path="/movie/upcoming" component={GridContainerCategoria} />
          <Route exact path="/movie/top_rated" component={GridContainerCategoria} />

          <Route exact path="/tv/popular" component={GridContainerCategoria} />
          <Route exact path="/trending/tv/week" component={GridContainerCategoria} />
          <Route exact path="/tv/top_rated" component={GridContainerCategoria} />
          <Route exact path="/tv/on_the_air" component={GridContainerCategoria} />

          <Route exact path="/movie/:id" component={CardDetail} />
          <Route exact path="/tv/:id" component={CardDetail} />
          <Route component={Page404} />
        </Switch>

        <Footer />

      </Container>
    </BrowserRouter>
  );
};

export default App;
