import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'
import Search from "./Search";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardSimple from "./CardSimple";
import TituloContainer from "./TituloContainer";


const GridContainer = ({history, location, valorDelInput, busqueda, handleClick}) => {
    console.log(history)
    console.log(location)  

    let {pathname} = useLocation();
    console.log(pathname)
    const [resultados, setResultados] = useState([]);
 
    const BASE_URL = `https://api.themoviedb.org/3`
    const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
    let queryParams = `?language=en-US&page=1&api_key=${APIKEY}`
    let ruta = ``
    console.log(ruta)

    const asignarRuta = (path) => {
        ruta = path
    }
    
    {pathname === `/search` 
     ? asignarRuta(`/trending/movie/week`)
     : asignarRuta(pathname)
     }
    
    console.log(ruta)
        
    useEffect(() => {
        
        const searchString = `${BASE_URL}${ruta}${queryParams}`

        fetch(searchString)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setResultados(data.results)
            })
    }, []);


    useEffect(() => {
    const searchString = `https://api.themoviedb.org/3/search/multi?api_key=${APIKEY}&language=en-US&query=${valorDelInput}&page=2` 
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
        <TituloContainer />
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