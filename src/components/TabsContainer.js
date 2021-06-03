import React from 'react';
import { useHistory} from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Imagen from "./Imagen";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    color: "white",
    backgroundColor: "transparent",
  },
  tabs: {
    backgroundColor: "transparent",
    paddingBottom: 15,
    color: "#fafafa",
  },
  tab: {
      '&:hover': {
        transform: `scale(1.1)`}
  }
}));

const TabsContainer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.tabs} position="static" color="white">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="white"
          aria-label="scrollable force tabs example"
        >
          <Tab className={classes.tab} 
               onClick={() => { history.push(`/new`) }}
               label="lanzamientos"
               icon={<Imagen ruta={"https://user-images.githubusercontent.com/63796774/119745476-945c0e00-be64-11eb-8903-0bf5ba683595.png"}
                          ancho={"50"} 
                          alto={"50"}
                           />}
            {...a11yProps(0)} />
          <Tab className={classes.tab}  
               onClick={() => { history.push(`/popular`) }}
               label="populares"
               icon={<Imagen ruta={"https://user-images.githubusercontent.com/63796774/119745162-f36d5300-be63-11eb-8aa9-83a18c955014.png"}
                          ancho={"40"} 
                          alto={"40"} />}
            {...a11yProps(1)} />
          <Tab className={classes.tab}  
               onClick={() => { history.push(`/movie`) }}
               label="Peliculas"
               icon={<Imagen ruta={"https://user-images.githubusercontent.com/63796774/119747209-9d4ede80-be68-11eb-9129-95543fa67c79.png"}
                          ancho={"40"} 
                          alto={"40"} />}
            {...a11yProps(2)} />
          <Tab className={classes.tab}  
               onClick={() => { history.push(`/tv`) }}
               label="series"
               icon={<Imagen ruta={"https://user-images.githubusercontent.com/63796774/119747810-e3f10880-be69-11eb-9af9-f0a8eb7ec7d5.png"}
                          ancho={"50"} 
                          alto={"50"} />}
            {...a11yProps(3)} />
          <Tab className={classes.tab}  
               onClick={() => { history.push(`/search`) }}
               label="buscador"
               icon={<Imagen ruta={"https://user-images.githubusercontent.com/63796774/119747810-e3f10880-be69-11eb-9af9-f0a8eb7ec7d5.png"}
                          ancho={"50"} 
                          alto={"50"} />}
            {...a11yProps(3)} />

        </Tabs>
      </AppBar>

    </div>
  );
}
export default TabsContainer