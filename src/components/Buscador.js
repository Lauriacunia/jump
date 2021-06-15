import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'
import Search from "./Search";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GridContainer from "./GridContainer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        backgroundColor: "transparent",
    },
    searchContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: '450px',
        backgroundColor: theme.palette.primary.main,
        marginBottom: 50,
    },
 
    titulo: {
        color: "white",
    }
  }));
  
const Buscador = ({history, location, match}) => {
    const classes = useStyles();

    console.log(history, location)
    console.log(location.pathname)

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
      window.scrollTo(0, 0)
    }, [])
  
    return (

       <Container  className={classes.root} maxWidth={false}>
           <Container className={classes.searchContainer} maxWidth={false}>
               <Typography className={classes.titulo}
                           variant="h1" gutterBottom>
                    ¿Qué quieres ver hoy?
               </Typography>
               <Search valorDelInput={valorDelInput}
                   handleChange={handleChange}
                   handleSubmit={handleSubmit} />
           </Container>
           
            <GridContainer 
                           valorDelInput={valorDelInput}
                           busqueda={busqueda}
                           handleClick={handleClick}
                           categoria={"movie"}
                           subcategoria={"popular"} />      
       </Container>
           
    )
};

export default Buscador