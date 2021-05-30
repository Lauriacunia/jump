import React, { useRef, useState, useEffect } from "react";
import Search from "./Search";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardSimple from "./CardSimple";

const useStyles = makeStyles({
    root: {
      backgroundColor: "transparent",
      width:"100%",
      color: "#fafafa",
    },
  });
  
const Buscador = () => {
    const classes = useStyles();
    const [resultados, setResultados] = useState([]);
    const [valorDelInput, setValorDelInput] = useState('');
    const [busqueda, setBusqueda] = useState('');
    const APIKEY = `c30046e601e1f588297bc67b7f52c812`;

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
    const handleClick = (e) => {
        console.log("hola")
        console.log(e.target.id)
    }
  
    useEffect(() => {
      const BASE_URL = `https://api.themoviedb.org/3/search/multi?api_key=${APIKEY}&language=en-US&query=${valorDelInput}&page=1`
      const searchString = BASE_URL 
    
      fetch(searchString)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setResultados(data.results)
        })
    }, [valorDelInput, busqueda]);
  
    return (

       <>
           <Search valorDelInput={valorDelInput}
                   handleChange={handleChange}
                   handleSubmit={handleSubmit} />
           <Container className= {classes.busquedaContainer}>
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

                 
       </>
           
    )
};

export default Buscador