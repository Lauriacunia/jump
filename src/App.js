import Navbar from "./components/Navbar";
import Home from "./components/Home";
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter, 
    Route, 
    Link, 
    Switch, 
    } 
    from 'react-router-dom'

import Lanzamientos from "./components/Lanzamientos"
import Populares from "./components/Populares"
import Peliculas from "./components/Peliculas"
import Series from "./components/Series"
import Buscador from "./components/Buscador"
import CardDetail from "./components/CardDetail"




const useStyles = makeStyles({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      }
    },
   mainContainer: {
    backgroundImage: `url(${"https://user-images.githubusercontent.com/63796774/119273651-3d470680-bbe2-11eb-9a9e-e571fcc86d18.png"})`
   }
});


const App = () => {
  const classes = useStyles();
  return (
   
      <BrowserRouter>
        <div className={classes.mainContainer}>
        
        <Navbar /> 

        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/lanzamientos" component={Lanzamientos}/>
          <Route exact path="/populares" component={Populares}/>
          <Route exact path="/peliculas" component={Peliculas}/>
          <Route exact path="/series" component={Series}/>
          <Route exact path="/buscador" component={Buscador}/>
          <Route exact path="/peliculas/:detalle" component={CardDetail}/>
          <Route exact path="/series/:detalle" component={CardDetail}/>
     
         {/*<Route component={Page404}/>*/}
       </Switch>    
       </div>
      </BrowserRouter>
      
  );
}

export default App;
