
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#fafafa", 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '70vh',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      minWidth: '800px',
    },
  },
}));



const Search = ({handleSubmit, handleChange, valorDelInput}) => {
    const classes = useStyles();
  
    return (
            <div className={classes.search}>
               <form onSubmit={handleSubmit}>
                  <div className={classes.searchIcon}>
                  <SearchIcon />
                  </div>
                  <InputBase
                  value={valorDelInput}
                  onChange={handleChange}
                  placeholder="Ingresá tu búsqueda.."
                  classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  />
                </form>
            </div>
         
 )
}

export default Search;