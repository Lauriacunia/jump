import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  boton: {
      color:"white",
  }
}));

const Boton = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}
              >
             <Button className={classes.boton} variant="outlined" color="secondary">
              Ver mas...
             </Button>
        </div>
    )
}

export default Boton