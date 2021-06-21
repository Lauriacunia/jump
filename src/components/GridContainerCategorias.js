import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardSimple from "./CardSimple";
import TituloContainer from "./TituloContainer";
import Paginado from "./Paginado";
import TituloResultados from "./TituloResultados";

// este handleClick es undefined. Las views no deben recibir props. 
const GridContainerCategorias = ({ handleClick}) => {

    const [resultados, setResultados] = useState([]);
    const [totalDeResultados, setTotalDeResultados] = useState([]);
    const [totalDePaginas, setTotalDePaginas] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    // esto deberia ser const: no cambia 
    let {pathname} = useLocation();  
    console.log(`Pathname: ${pathname}`)
    const BASE_URL = `https://api.themoviedb.org/3`
    const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
    // esto deberia ser const: no cambia 
    let queryParams = `?language=en-US&page=${paginaActual}&api_key=${APIKEY}`
    // privilegia usar estados para variables globales 
    let categoria;
         
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [paginaActual])

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

        // Esta funcion es medio extraña, y tiene que ver con la definicion de tus rutas. 
        // Como tenes "/movie/popular" y "/movie/:id" como rutas, tenes que hacer estas cosas para 
        // entender en que ruta estas. 
        // Una definicion mas especifica para cada ruta, como la que usa el modelo, algo como:
        // /movie/popular y /detail/movie/:id 
        // te hubiera permitido aca usar una variable para :movie y usar los params, evitando este slice 
      let pathnameInicial = `${pathname.slice(0, 2)}`
      pathnameInicial ==="/m" && (categoria = 'movie')
      pathnameInicial ==="/t" && (categoria = 'tv')
    
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
                            // este handle click es undefined
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
