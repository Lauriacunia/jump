import React, { useRef, useState, useEffect } from "react";
import Search from "./Search";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GridContainerBuscador from "./GridContainerBuscador";

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
  
const Buscador = () => {
    const classes = useStyles();
    const [valorDelInput, setValorDelInput] = useState('');
    const [paginaActual, setPaginaActual] = useState(1); 
  
    const handleChange = e => {
      console.log("Cambio el input")
      setValorDelInput(e.target.value);
      setPaginaActual(1)
    };
    
  
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
               {/* aca no pasas handleSubmit, pero el componente lo espera. si envio el form
               apretando enter, la busqueda se rompe */}
               <Search valorDelInput={valorDelInput}
                       handleChange={handleChange}
                        />
           </Container>
           <GridContainerBuscador 
                           valorDelInput={valorDelInput}
                           paginaActual = {paginaActual}
                           setPaginaActual = {setPaginaActual}
                           />      
       </Container>
           
    )
};

export default Buscador
