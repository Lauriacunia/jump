import React, { useRef, useState, useEffect } from "react";
import {
    BrowserRouter, 
    Route, 
    Link, 
    Switch, useHistory, useParams, useLocation,
    } 
    from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
   title: {
       color: "white",
   }
});


const CardDetail = () => {
    const classes = useStyles();
    let params = useParams();
    let location = useLocation();

    console.log(params)
    console.log(location)
    const [resultado, setResultado] = useState([]);
    
  const BASE_URL = `https://api.themoviedb.org/3`
  const ruta = location.pathname
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;

    useEffect(() => {
      
        const searchString = `${BASE_URL}${ruta}?api_key=${APIKEY}`
        console.log(searchString)
  
        fetch(searchString)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResultado(data)
            })
    }, []);

    return(
        <>
        <h1  className={classes.title}>SOY UNA TARJETA CON DETALLE</h1>
        <h1 className={classes.title}>{resultado.title || resultado.name}</h1>
        </>
    )
}

export default CardDetail