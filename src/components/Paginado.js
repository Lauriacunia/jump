import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 50,
    border: "5px solid white",
    color: "white",
  },
  paginadoContainer: {
    '& > *': {
      marginTop: theme.spacing(2),
      
    },
  },
  paginado: {
      color:"white",
  }
}));


const Paginado = ({totalDePaginas, paginaActual}) => {
  const classes = useStyles();
  console.log(`total de paginas: ${totalDePaginas}`)


  return (
    <div className={classes.root}>
      <div className={classes.paginadoContainer}>
        <Pagination className={classes.paginadoContainer}
                    count={totalDePaginas} 
                    variant="outlined" 
                    shape="rounded" 
                    size="large"
                    page={paginaActual} 
                    />
      </div>
    </div>
  );
}

export default Paginado