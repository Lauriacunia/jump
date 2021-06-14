import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter, 
    Route, 
    Link, 
    Switch, 
    } 
    from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Lanzamientos from "./components/Lanzamientos"
import Populares from "./components/Populares"
import Peliculas from "./components/Peliculas"
import Series from "./components/Series"
import Buscador from "./components/Buscador"
import CardDetail from "./components/CardDetail"
import GridContainer from "./components/GridContainer";
import Footer from "./components/Footer";



const useStyles = makeStyles({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: "black",
      }
    },
  
});


const App = () => {
  const classes = useStyles();
  return (
   
      <BrowserRouter>
        <div className={classes.mainContainer}>
        
        <Navbar /> 

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/new" component={Lanzamientos}/>
          <Route exact path="/popular" component={Populares}/>
          <Route exact path="/movie" component={Peliculas}/>
          <Route exact path="/tv" component={Series}/>
          <Route exact path="/search" component={Buscador}/>

          <Route exact path="/movie/popular" component={GridContainer}/>
          <Route exact path="/trending/movie/week" component={GridContainer}/>
          <Route exact path="/movie/now_playing" component={GridContainer}/>
          <Route exact path="/movie/upcoming" component={GridContainer}/>
          <Route exact path="/movie/top_rated" component={GridContainer}/>

          <Route exact path="/tv/popular" component={GridContainer}/>
          <Route exact path="/trending/tv/week" component={GridContainer}/>
          <Route exact path="/tv/top_rated" component={GridContainer}/>
          <Route exact path="/tv/on_the_air" component={GridContainer}/>

          <Route exact path="/movie/:id" component={CardDetail}/>
          <Route exact path="/tv/:id" component={CardDetail}/>
        </Switch>   
        <Footer/>
       </div>
      </BrowserRouter>
      
  );
}

export default App;
