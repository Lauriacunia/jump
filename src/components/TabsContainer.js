import React from 'react';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 700,
  },
});


const TabsContainer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Link to="/lanzamientos">
          <Tab icon={<PersonPinIcon />} label="LANZAMIENTOS"></Tab>
        </Link>
        <Link to="/populares">
          <Tab icon={<PersonPinIcon />} label="POPULARES" ></Tab>
        </Link>
        <Link to="/peliculas">
          <Tab icon={<PhoneIcon />} label="PELICULAS" ></Tab>
        </Link>
        <Link to="/series">
          <Tab icon={<FavoriteIcon />} label="SERIES" ></Tab>
        </Link>
      </Tabs>
    </Paper>
  );

}

export default TabsContainer