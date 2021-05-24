import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css';
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
import CardDetail from "./components/CardDetail"




const useStyles = makeStyles({

   mainContainer: {
    backgroundImage: `url(${"https://user-images.githubusercontent.com/63796774/119273651-3d470680-bbe2-11eb-9a9e-e571fcc86d18.png"})`
   }
});


const App = () => {
  const [resultados, setResultados] = useState([]);
  const [valorDelInput, setValorDelInput] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const classes = useStyles();

  const handleChange = e => {
    console.log("Cambio el input")
    setValorDelInput(e.target.value);
    console.log(valorDelInput)
  };

  const handleSubmit = e => {
    console.log("Enviaste el formulario")
    e.preventDefault();
    setBusqueda(valorDelInput);
  };


  useEffect(() => {
    const BASE_URL = `https://api.themoviedb.org/3/tv/on_the_air?api_key=c30046e601e1f588297bc67b7f52c812&language=en-US&page=1`
    const searchString = BASE_URL 
  
    fetch(searchString)
      .then(res => res.json())
      .then(data => {
          console.log(data.results)
          setResultados(data.results)
      })
  }, []);


  return (
   
      <BrowserRouter>
        <div className={classes.mainContainer}>
        
        <Navbar valorDelInput={valorDelInput}
          handleChange={handleChange}
          handleSubmit={handleSubmit} /> 

        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/lanzamientos" component={Lanzamientos}/>
          <Route exact path="/populares" component={Populares}/>
          <Route exact path="/peliculas" component={Peliculas}/>
          <Route exact path="/series" component={Series}/>
          <Route exact path="/peliculas/:detalle" component={CardDetail}/>
          <Route exact path="/series/:detalle" component={CardDetail}/>
     
         {/*<Route component={Page404}/>*/}
       </Switch>    
       </div>
      </BrowserRouter>
      
  );
}

export default App;
