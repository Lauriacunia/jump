import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
 
  paginadoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 50,
    '& > *': {
      marginTop: theme.spacing(2), 
    },
  },
  root: {
    '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)': {
      backgroundColor: 'transparent',
      color:'white',
      border: '1px solid white',
     },
    }

}));


const Paginado = ({totalDePaginas, paginaActual, onChangePaginado}) => {
  const classes = useStyles();
  // usa variables de estado si van a afectar al render!
  let nextBtn = false; 
  let prevBtn = false;
  let firstBtn = true;
  let lastBtn = true;

  const setBotones = () => {
    paginaActual === 1 &&  (prevBtn = true)
    paginaActual === 1 &&  (firstBtn = false)
    paginaActual === totalDePaginas &&  (nextBtn = true)
    paginaActual === totalDePaginas &&  (lastBtn = false)
  }


  return (
   
      <div className={classes.paginadoContainer}>
        {setBotones()}
        <Pagination className={classes.root}
                    count={totalDePaginas}
                    page={paginaActual} 
                    onChange={onChangePaginado} 
                    hideNextButton = {nextBtn}
                    hidePrevButton = {prevBtn}
                    showFirstButton = {firstBtn}
                    showLastButton = {lastBtn}
                    variant="outlined" 
                    shape="rounded" 
                    size="large"
                    color='primary'
                    />
      </div>
    
  );
}

export default Paginado
