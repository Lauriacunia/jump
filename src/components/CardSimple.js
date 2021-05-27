import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: "auto",
  },

  media: {
    height: 400,
  },
});

const CardSimple = ({ resultado }) => {
  const classes = useStyles();

  const recortarTitulo = (str) => {
    let strCorto = `${str.slice(0, 28)}...`
    return strCorto;
  };

    const handleClick = (e) => {
        console.log("hola")
        console.log(e.target)
    }

  return (
    <Card className={classes.root}
          key={resultado.id}
          onClick={handleClick} >
      <CardActionArea>
        <CardMedia
            className={classes.media}
            image={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${resultado.poster_path}`}
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