import React, { useRef, useState, useEffect } from "react";
import Search from "./Search";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardSimple from "./CardSimple";



const GridContainer = ({valorDelInput, busqueda, handleClick}) => {
   
    const [resultados, setResultados] = useState([]);
    const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
         
    useEffect(() => {
        const BASE_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${APIKEY}`
        const searchString = BASE_URL

        fetch(searchString)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setResultados(data.results)
            })
    }, []);

    useEffect(() => {
      const BASE_URL = `https://api.themoviedb.org/3/search/multi?api_key=${APIKEY}&language=en-US&query=${valorDelInput}&page=2`
      const searchString = BASE_URL 
     { valorDelInput && (
      fetch(searchString)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setResultados(data.results)
        })
      )}
    }, [valorDelInput, busqueda]);

    return (
        <Container>
        <Grid container spacing={3}>    
            {
                resultados.map((resultado) => {
                    return (
                        <Grid item xs={6} sm={3} 
                            key={resultado.id}
                            id={resultado.id}
                            onClick={handleClick}>
                            <CardSimple
                                resultado={resultado}
                                />
                        </Grid>
                    )
                })
            }      
        </Grid>
       </Container>
    )
}

export default GridContainer