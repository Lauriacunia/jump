import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Animation from './Animation';

//
const useStyles = makeStyles(theme => ({
    tituloContainer: {
        display: "flex",
        justifyContext: 'center',
        alignItems: 'center',
        padding: 0,
        margin: '70px 0',
    },
    titulo: {
        color: "white",
        maxWidth: 500,
        marginLeft: 100,
    },
}));

const Hero = ({title, animation, height, width}) => {
    const classes = useStyles();
    return (
        <Container className={classes.tituloContainer} maxWidth={false}>
            <Hidden smDown>
                <Typography className={classes.titulo}
                    variant="h1" gutterBottom>
                    {title}
                </Typography>
            </Hidden>
            <Hidden mdUp>
                <Typography className={classes.titulo}
                    variant="h2" gutterBottom>
                    {title}
                </Typography>
            </Hidden>
            <Animation height={height} width={width} myAnimation={animation} />
        </Container>
    )
}

export default Hero