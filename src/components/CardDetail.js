import React, { useRef, useState, useEffect } from "react";
import {
    BrowserRouter, 
    Route, 
    Link, 
    Switch, useHistory, useParams, useLocation,
    } 
    from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Imagen from "./Imagen";
import TabsContainerSm from "./TabsContainerSm";

const CardDetail = () => {
   
    let params = useParams();
    let location = useLocation();

    console.log(params)
    console.log(location)
    const [resultado, setResultado] = useState([]);
    
    const BASE_URL = `https://api.themoviedb.org/3`
    const ruta = location.pathname
    const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
    let categoria;

    const useStyles = makeStyles({
        cardContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "600px",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center-top",
            backgroundImage: `url(https://image.tmdb.org/t/p/w370_and_h556_bestv2/${resultado.poster_path})`
        },
        dataContainer: {
            display: "flex",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            width: "80vw",
            margin: "100px",
            zIndex: 5,
        },
        overlay :{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "black",
            opacity: 0.4,
        },
        textContainer: {
            marginLeft: 100,
        },
        title: {
            color: "white",
        }
     });
     const classes = useStyles();

    useEffect(() => {
      
        const searchString = `${BASE_URL}${ruta}?api_key=${APIKEY}`
        console.log(searchString)
  
        fetch(searchString)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResultado(data)
                
            })
    }, []);

    const averiguarCategoria = () => {
        let pathnameInicial = `${ruta.slice(0, 2)}`
        pathnameInicial ==="/m" && (categoria = 'movie')
        pathnameInicial ==="/t" && (categoria = 'tv')
      
      }

    return(
        <Container className={classes.main} maxWidth={false}>
             {averiguarCategoria()}
            <Container className={classes.cardContainer} maxWidth={false}>
               <Container className={classes.overlay} maxWidth={false}></Container>
               <Container className={classes.dataContainer} maxWidth={false}>
                    <Imagen ruta= {`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${resultado.poster_path}`}
                            alto={450}
                            ancho={300}/>
                    <Container className={classes.textContainer} maxWidth={false}>
                        <Typography className={classes.title} gutterBottom variant="h3" color="textSecondary">
                            { resultado.title || resultado.name }
                        </Typography>
                        <Typography className={classes.title} gutterBottom variant="subtitle" color="textSecondary">
                            { resultado.original_title|| resultado.name }
                        </Typography>
                        <Typography className={classes.title} gutterBottom variant="body1" color="textSecondary">
                            {resultado.first_air_date && `Año: ${resultado.first_air_date}`}
                        </Typography>
                        <Typography className={classes.title} gutterBottom variant="body1" color="textSecondary">
                            { resultado.runtime && `Duración: ${resultado.runtime} min` }
                        </Typography>
                        <Typography className={classes.title} gutterBottom variant="body1" color="textSecondary">
                           { resultado.genres && `Genero: ${resultado.genres[1]}` }     
                        </Typography>
                        <Typography className={classes.title} gutterBottom variant="body1" color="textSecondary">
                            { resultado.overview }
                        </Typography>
                    </Container>
                </Container>
            </Container>
            <Container className={classes.tabsContainer} maxWidth={false}>
                <TabsContainerSm categoria={categoria}/>
            </Container>
        </Container>
    )
}

export default CardDetail