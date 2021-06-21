import React from 'react';
import { useHistory,  useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// por que este componente esta hecho con una funcion tradicional? si usas arrow functions debe ser consistente
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    color: "#fff"
  },
  tabs: {
    color: "#fff",
    backgroundColor: "transparent",
  },
  tab: {
    color: "#fff",
    backgroundColor: "transparent",
  }

}));

const TabsContainerSm = ({categoria, ruta}) => {
  const classes = useStyles();
  const history = useHistory();
  let location = useLocation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" className={classes.root}>
            {console.log(`estoy en tabs y la ruta es: ${ruta}`)}
            
            { categoria === 'movie' && (
            <>
            <Tabs className={classes.tabs}
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            indicatorColor="primary"
            textColor="primary"
            >
                <Tab className={classes.tabs}
                    onClick={() => { history.push(`${ruta}`) }}
                    label="reparto"
                    {...a11yProps(0)} />
                <Tab className={classes.tabs}
                    onClick={() => { history.push(`${ruta}/similar`) }}
                    label="similares"
                    {...a11yProps(1)} />
                <Tab className={classes.tabs}
                    onClick={() => { history.push(`${ruta}/videos`) }}
                    label="trailers "
                    {...a11yProps(2)} />
             </Tabs>
            </>
          )}

            { categoria === 'tv' && (
            <>
                 <Tabs className={classes.tabs}
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            indicatorColor="primary"
            textColor="primary"
            >
                <Tab className={classes.tabs}
                    onClick={() => { history.push(`${ruta}`)}}
                    label="reparto"
                    {...a11yProps(1)} />
                <Tab className={classes.tabs}
                    onClick={() => { history.push(`${ruta}/season`) }}
                    label="episodios"
                    {...a11yProps(0)} />
                <Tab className={classes.tabs}
                    onClick={() => { history.push(`${ruta}/similar`) }}
                    label="similares "
                    {...a11yProps(2)} />
                <Tab className={classes.tabs}
                    onClick={() => { history.push(`${ruta}/videos`) }}
                    label="trailers"
                    {...a11yProps(2)} />
                    </Tabs>
            </>
          )}
      </AppBar>
    </div>
  );
}

export default TabsContainerSm
