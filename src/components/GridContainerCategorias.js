import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardSimple from "./CardSimple";
import TituloContainer from "./TituloContainer";
import Paginado from "./Paginado";
import TituloResultados from "./TituloResultados";


const GridContainerCategorias = ({ handleClick}) => {

    const [resultados, setResultados] = useState([]);
    const [totalDeResultados, setTotalDeResultados] = useState([]);
    const [totalDePaginas, setTotalDePaginas] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    let {pathname} = useLocation();  
    console.log(`Pathname: ${pathname}`)
    const BASE_URL = `https://api.themoviedb.org/3`
    const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
    let queryParams = `?language=en-US&page=${paginaActual}&api_key=${APIKEY}`
    let categoria;
              
    useEffect(() => {   
        const searchString = `${BASE_URL}${pathname}${queryParams}`

        fetch(searchString)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setResultados(data.results)
                setTotalDePaginas(data.total_pages)
                setTotalDeResultados(data.total_results)
            })
    }, [paginaActual]);

    const onChangePaginado = (event, value) => {
        setPaginaActual(value);
      };

    const averiguarCategoria = () => {
    
      pathname ==="/movie/popular" && (categoria = 'movie')
      pathname ==="/trending/movie/week" && (categoria = 'movie')
      pathname ==="/movie/now_playing" && (categoria = 'movie')
      pathname ==="/movie/upcoming" && (categoria = 'movie')
      pathname ==="/movie/top_rated"&& (categoria = 'movie')

      pathname ==="/tv/popular" && (categoria = 'tv')
      pathname ==="/trending/tv/week" && (categoria = 'tv')
      pathname ==="/tv/top_rated" && (categoria = 'tv')
      pathname ==="/tv/on_the_air" && (categoria = 'tv')
    }
    
    return (
        <Container>
        <TituloContainer /> 
        {averiguarCategoria()}
        <TituloResultados totalDeResultados = {totalDeResultados}/>
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
                                categoria={categoria}
                                />
                        </Grid>
                    )
                })
            }      
        </Grid>
        <Paginado totalDePaginas= {totalDePaginas}
                  paginaActual= {paginaActual}
                  onChangePaginado = {onChangePaginado}/>
       </Container>
    )
}

export default GridContainerCategorias