import React, { useState, useEffect } from "react";
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardSimple from "./CardSimple";
import Paginado from "./Paginado";
import TituloResultados from "./TituloResultados";
import Animation from './Animation';
import searching from '../assets/searching.json'


const GridContainerBuscador = ({ valorDelInput, paginaActual, setPaginaActual }) => {

    const [resultados, setResultados] = useState([]);
    const [totalDeResultados, setTotalDeResultados] = useState([]);
    const [totalDePaginas, setTotalDePaginas] = useState([]);
    
    const BASE_URL = `https://api.themoviedb.org/3/search/multi?`
    const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
    let queryParams = `?language=en-US&page=${paginaActual}&query=${valorDelInput}&api_key=${APIKEY}`
   
    useEffect(() => {
    { valorDelInput && (

    fetch(`${BASE_URL}${queryParams}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setResultados(data.results)
            setTotalDePaginas(data.total_pages)
            setTotalDeResultados(data.total_results)
        })
    )}
    }, [valorDelInput, paginaActual]);

    const onChangePaginado = (event, value) => {
        setPaginaActual(value);
      };

    return (
        <Container>
            {!valorDelInput && <Animation height={'800px'} width={'800px'} myAnimation={searching} />} 
            {valorDelInput &&  <TituloResultados totalDeResultados = {totalDeResultados}/>} 
            {valorDelInput && <Grid container spacing={3}>    
                {
                    resultados.map((resultado) => {
                        return (
                            <Grid item xs={6} sm={3} 
                                key={resultado.id}
                                id={resultado.id}
                                >
                                <CardSimple
                                    resultado={resultado}
                                    categoria={resultado.media_type}
                                    />
                            </Grid>
                        )
                    })
                }      
            </Grid> }
            {valorDelInput &&  <Paginado totalDePaginas= {totalDePaginas}
                                         paginaActual= {paginaActual}
                                         onChangePaginado = {onChangePaginado}/>} 
            
       </Container>
    )
}

export default GridContainerBuscador