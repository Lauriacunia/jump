import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Animation from './Animation';
import error404 from '../assets/error404.json';


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

const Page404 = () => {
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        
            <Container className={classes.root} maxWidth={false} >
                <Container className={classes.animationContainer} maxWidth={false} >
                    <Animation height={500} width={500} myAnimation={error404} />
                </Container>
                <Container className={classes.textContainer} maxWidth={false} >
                    <Typography className={classes.text} variant="h4" gutterBottom>
                        Lo sentimos, no pudimos encontrar la pagina solicitada.
                    </Typography>
                    <Button color="secondary" size="small"
                            onClick={() => { history.push("/") }} >
                            volver al inicio
                    </Button>
                </Container>
            </Container>

    )
}

export default Page404