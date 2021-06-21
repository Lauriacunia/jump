import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Animation from './Animation';
import cry from '../assets/cry.json';


const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '80%',
        padding: 0,
    },
    textContainer: {
        display: "flex",  
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 0,
        maxWidth: 350,
        color: '#fafafa',
    },
    text: {
        marginBottom: 20,
    }

});

// usa nombres descriptivo en sentido funcional. la animacion es llanto, pero cual es la **funcion** de este componente?
const Cry = () => {
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        
            <Container className={classes.root} maxWidth={false} >
                <Container className={classes.animationContainer} maxWidth={false} >
                    <Animation height={500} width={500} myAnimation={cry} />
                </Container>
                <Container className={classes.textContainer} maxWidth={false} >
                    <Typography className={classes.text} variant="h4" gutterBottom>
                        Estamos muy tristes, no tenemos información para mostrarte aquí.
                    </Typography>
                   
                </Container>
            </Container>

    )
}

export default Cry
