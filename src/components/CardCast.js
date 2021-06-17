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
    height: 450,
  },
});

const CardCast = ({ nombre, foto }) => {
  const classes = useStyles();
  let imagen;
  console.log(foto)
  
  foto
  ? imagen=`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${foto}`
  : imagen= imageNotFound

  return (
    <Card className={classes.root} 
          >   
          
      <CardActionArea>
        <CardMedia
            className={classes.media}
            image={imagen}
        /> 
        <CardContent>
            <Typography gutterBottom variant="body1" color="textSecondary">
                { nombre }
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardCast