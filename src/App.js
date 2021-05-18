import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter, 
    Route, 
    Link, 
    Switch, 
    } 
    from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import Lanzamientos from "./components/Lanzamientos"
import Populares from "./components/Populares"
import Peliculas from "./components/Peliculas"
import Series from "./components/Series"
import CardDetail from "./components/CardDetail"
import theme from "./ThemeConfig"



const useStyles = makeStyles({
   
});



const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>

        <Navbar></Navbar>
       
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
      
      
      
      </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;
