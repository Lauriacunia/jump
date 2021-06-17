import React from 'react';
import {
  BrowserRouter, 
  Route, 
  Link, 
  Switch, useHistory, useParams, useLocation,
  } 
  from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import imageNotFound from '../assets/noimg.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: "auto",
  },

  media: {
    height: 400,
  },
});

const CardSimple = ({ resultado, categoria }) => {
  const classes = useStyles();
  const history = useHistory();
  let imagen;
  console.log(resultado.id)
  console.log(categoria)

  const recortarTitulo = (str) => {
    let strCorto = `${str.slice(0, 28)}...`
    return strCorto;
  }; 

  const cambiarRuta = (path) => {
    categoria = path
  }
   
  {categoria === `trendingMovie` && cambiarRuta(`movie`)}
  {categoria === `trendingSerie` && cambiarRuta(`tv`)}

  resultado.poster_path
  ? imagen=`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${resultado.poster_path}`
  : imagen= imageNotFound

  return (
    <Card className={classes.root} 
          onClick = {()=> { console.log("hiciste click en la card ") 
          history.push(`/${categoria}/${resultado.id}`)}}>   
          
      <CardActionArea>
        <CardMedia
            className={classes.media}
            image={imagen}
        /> 
        <CardContent>
            <Typography gutterBottom variant="body1" color="textSecondary">
                { resultado.title
                  ? resultado.title.length < 28 
                        ? resultado.title 
                        : recortarTitulo(resultado.title)
                  : resultado.name 
                    ? resultado.name.length < 28 
                       ? resultado.name
                       : recortarTitulo(resultado.name)   
                    : resultado.name
                }
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardSimple