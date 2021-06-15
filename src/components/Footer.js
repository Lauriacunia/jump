import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    footerContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: 200,
        marginTop: 50,
        backgroundColor: theme.palette.primary.main,
        color: "white",
    },
    iconsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        fontSize: 20,
    },
    icon1: {
        fontSize: 40,
    },
    icon2: {
        fontSize: 50,
    },

}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Container className={classes.footerContainer} maxWidth={false}>
            <Typography
                variant="h6" gutterBottom>
                {"Sitio realizado por Laura Acuña"}
            </Typography>
            <Typography
                variant="body1" gutterBottom>
                {"FullStack developer"}
            </Typography>
            <div className={classes.iconsContainer}>
                <a href="https://github.com/Lauriacunia" target="_blank" rel="noreferrer">
                    <IconButton color="secondary"
                        aria-label="add an alarm">
                        <GitHubIcon className={classes.icon1} />
                    </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/lauriacunia/" target="_blank" rel="noreferrer">
                    <IconButton color="secondary"
                        aria-label="add an alarm">
                        <LinkedInIcon className={classes.icon2} />
                    </IconButton>
                </a>

            </div>
        </Container>
    )
}

export default Footer