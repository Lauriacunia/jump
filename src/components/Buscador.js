import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'
import Search from "./Search";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';
import Typography from '@material-ui/core/Typography';
import GridContainer from "./GridContainer";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      backgroundColor: "transparent",
      width:"100%",
      color: "#fafafa",
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80vw",
        backgroundColor: purple[600],
        margin: 50,
        padding: 30,
        opacity: 0.5,
        
    },
    titulo: {
        color: "white",
    }
  });
  
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
  
  
  
    return (

       <div  className={classes.root} >
           <Paper className={classes.paper}>
               <Typography className={classes.titulo}
                           variant="h2" gutterBottom>
                    ¿Qué quieres ver hoy?
               </Typography>
               <Search valorDelInput={valorDelInput}
                   handleChange={handleChange}
                   handleSubmit={handleSubmit} />
           </Paper>
           
            <GridContainer valorDelInput={valorDelInput}
                           busqueda={busqueda}
                           handleClick={handleClick}
                           categoria={"movie"}
                           subcategoria={"popular"} />

                 
       </div>
           
    )
};

export default Buscador