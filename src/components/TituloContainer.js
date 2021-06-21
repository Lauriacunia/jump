import React from 'react';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
   
    tituloContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      marginBottom: 30,
      border: "5px solid white",
    },
    titulo: {
      color: "white",
      marginRight: 20,
    },
       
  });

const TituloContainer = () => {
    const classes = useStyles();
    let {pathname} = useLocation();
    console.log(pathname)
    let titulo = ``;
    
    const asignarTitulo = (tituloSegunRuta) => {
            titulo = tituloSegunRuta
        }

// mira la funcion que te deje en SliderMultiple
    {pathname === `/trending/movie/week` && asignarTitulo(`Películas que son tendencia`)}
    {pathname === `/movie/popular` && asignarTitulo(`Películas populares`)}
    {pathname === `/movie/now_playing` && asignarTitulo(`Películas ahora en cine`)}
    {pathname === `/movie/upcoming` && asignarTitulo(`Películas a estrenarse`)}
    {pathname === `/movie/top_rated` && asignarTitulo(`Películas con mejores críticas`)}

    {pathname === `/tv/popular` && asignarTitulo(`Series populares`)}
    {pathname === `/trending/tv/week` && asignarTitulo(`Series que son tendencia`)}
    {pathname === `/tv/top_rated` && asignarTitulo(`Series con mejores criticas`)}
    {pathname === `/tv/on_the_air` && asignarTitulo(`Series en el aire`)} 
    

    return (
        <div className= {classes.root}>
            <div className= {classes.tituloContainer}>
                <Typography className={classes.titulo}
                    variant="h4" gutterBottom>
                    {titulo} 
                </Typography>
            </div>        
        </div>
    )
}

export default TituloContainer
