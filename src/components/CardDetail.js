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
import CastContainer from './CastContainer';
import SimilarContainer from './SimilarContainer';
import TemporadasContainer from './TemporadasContainer';
import TrailersContainer from './TrailersContainer';
import cyan from '@material-ui/core/colors/cyan';


let anio = null;
const parseAnio = (date) =>{
    const fechaCompleta = new Date(date)
    anio = fechaCompleta.getFullYear()
    console.log(anio)
}

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
        },
        production: {
            color: cyan[500],
            marginTop: 20,
        },
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
        <BrowserRouter>
            <Container className={classes.main} maxWidth={false}>
                {averiguarCategoria()}
                {resultado && parseAnio(resultado.first_air_date)}
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
                            <Typography className={classes.title} gutterBottom variant="body1" color="textSecondary">
                                {resultado.first_air_date && `Año: ${anio}`}
                            </Typography>
                            <Typography className={classes.title} gutterBottom variant="body1" color="textSecondary">
                                { resultado.runtime && `Duración: ${resultado.runtime} min` }
                            </Typography>
                            <Typography className={classes.title} gutterBottom variant="body1" color="textSecondary">
                            { resultado.genres && (
                                <div>
                                  Géneros: {resultado.genres.map(genre => `• ${genre.name} `) }  
                                </div>
                                
                                )}      
                            </Typography>
                            <Typography className={classes.title} 
                                        gutterBottom variant="body1" 
                                        align ="justify"
                                        color="textSecondary">
                                { resultado.overview }
                            </Typography>
                            <Typography className={classes.production} 
                                        gutterBottom variant="body2"
                                        align ="justify"
                                        color="textSecondary">
                               { resultado.production_companies && (
                                    <div>
                                      Producción: {resultado.production_companies.map(production => `• ${production.name} `) }  
                                    </div>
                                
                                )}      
                            </Typography>
                        </Container>
                    </Container>
                </Container>
                <Container className={classes.tabsContainer} maxWidth={false}>
                    <TabsContainerSm categoria={categoria}
                                     ruta={ruta}/>
                </Container>
                <Switch>
                     {console.log(`estoy en card detail:`,ruta, resultado.id)}
                    <Route exact path={`${ruta}`} component={CastContainer} />
                    <Route exact path={`${ruta}/similar`} component={SimilarContainer} />
                    <Route exact path={`${ruta}/season`} component={TemporadasContainer} />
                    <Route exact path={`${ruta}/videos`} component={TrailersContainer} />
                </Switch>

            </Container>
        </BrowserRouter>
    )
}

export default CardDetail