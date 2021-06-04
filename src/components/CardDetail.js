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
import { findByLabelText } from "@testing-library/dom";



const CardDetail = () => {
   
    let params = useParams();
    let location = useLocation();

    console.log(params)
    console.log(location)
    const [resultado, setResultado] = useState([]);
    
    const BASE_URL = `https://api.themoviedb.org/3`
    const ruta = location.pathname
    const APIKEY = `c30046e601e1f588297bc67b7f52c812`;

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

    return(
        <div>
            <div className={classes.cardContainer}>
               <div className={classes.overlay}></div>
               <div className={classes.dataContainer}>
                    <img src= {`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${resultado.poster_path}`}></img>
                    <div className={classes.textContainer}>
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
                    </div>
                </div>
                
            </div>
        
        </div>
    )
}

export default CardDetail