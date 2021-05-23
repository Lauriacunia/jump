import React from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
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
import TabsContainer from "./TabsContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  navbar: {
    backgroundColor:"transparent",
    
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
    const history = useHistory();


    return (
 
        <div className={classes.root}>

        <AppBar className={classes.navbar} position="sticky">
            <Toolbar>
                <Hidden smUp>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                </Hidden>

                <img src = "https://user-images.githubusercontent.com/63796774/119274985-f0b2f980-bbe8-11eb-9d6a-5723d70ae69f.png"
                     onClick = {()=> { history.push("/home")}}></img>  

                <TabsContainer />
                
                <Search valorDelInput={valorDelInput}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit} />

            </Toolbar>
        </AppBar>

        </div>
  
    );
}

export default Navbar