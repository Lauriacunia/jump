import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Search from "./Search";
import LinkIco from "./LinkIco";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Navbar = ({handleSubmit, handleChange, valorDelInput}) => {
    const classes = useStyles();

    return (
 
        <div className={classes.root}>

        <AppBar position="static">
            <Toolbar>
                <Hidden smUp>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                </Hidden>

                <Link to="/home">
                  <Button>JUMP</Button>  
                </Link>
               
                <Hidden xsDown>
                    <LinkIco title = {"Lanzamientos"}
                             ico = {<ConfirmationNumberIcon/>} 
                             path= {"/lanzamientos"}/>
                    <LinkIco title = {"Populares"} 
                             ico = {<FavoriteIcon />} 
                             path= {"/populares"}/>
                    <LinkIco title = {"Peliculas"} 
                             ico = {<ContactsIcon />} 
                             path= {"/peliculas"}/>
                    <LinkIco title = {"Series"} 
                             ico = {<EmojiFoodBeverageIcon />} 
                             path= {"/series"}/>
                </Hidden>
                
                <Search valorDelInput={valorDelInput}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit} />

                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

        </div>
  
    );
}

export default Navbar