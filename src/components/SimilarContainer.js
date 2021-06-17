import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardSimple from "./CardSimple";
import Cry from './Cry';

const useStyles = makeStyles(theme => ({  
    root: {
        color: "white",
        marginTop: 50,
    },
}));

const SimilarContainer = () => {
    const classes = useStyles();
    const [resultados, setResultados] = useState([]);
    let {pathname} = useLocation();  
    console.log(`Pathname: ${pathname}`)
    const BASE_URL = `https://api.themoviedb.org/3`
    const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
    let queryParams = `?language=en-US&api_key=${APIKEY}`
    let categoria; 
   
    useEffect(() => {   
        const searchString = `${BASE_URL}${pathname}${queryParams}`

        fetch(searchString)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setResultados(data.results)
            })
    }, []);

    const averiguarCategoria = () => {
        let pathnameInicial = `${pathname.slice(0, 2)}`
        pathnameInicial ==="/m" && (categoria = 'movie')
        pathnameInicial ==="/t" && (categoria = 'tv')
      
      }

    return (

           <Container className={classes.root}>
                {averiguarCategoria()}
                {resultados.length === 0 && <Cry/>}
                {resultados && 
                    <Grid container spacing={3}>    
                        {
                            resultados.map((resultado) => {
                                return (
                                    <Grid item xs={6} sm={3} 
                                        key={resultado.id}
                                        id={resultado.id}
                                        >
                                        <CardSimple
                                            resultado={resultado}
                                            categoria={categoria}
                                            />
                                    </Grid>
                                )
                            })
                        }      
                </Grid> }
            </Container>
        
    )
}

export default SimilarContainer
