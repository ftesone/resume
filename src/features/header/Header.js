import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemIconText from './ListItemIconText';
import EmailIcon from '@material-ui/icons/Email';
import MarkerIcon from '@material-ui/icons/Room';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SchoolIcon from '@material-ui/icons/School';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../../imgs/perfil.jpg';
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import store from "../../app/store";
import { setLanguage } from "redux-i18n";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

export default props => {
    const classes = useStyles()

    const lang = store.getState().i18nState.lang;

    const changeLanguage = (event, newLanguage) => store.dispatch(setLanguage(newLanguage));

    return (
        <Grid container spacing={2} {...props}>
            <Grid container item xs={12}>
                <Grid item xs={10}>
                    <Typography variant="h1" style={{fontSize: '4rem'}}>
                        Fernando Tesone
                    </Typography>
                </Grid>
                <Grid container item xs={2} justifyContent="flex-end">
                    <ToggleButtonGroup value={lang} exclusive onChange={changeLanguage} className="not-print" style={{margin: 'auto 0', maxHeight: '40px'}}>
                        <ToggleButton value="en" className="lang-button">🇬🇧</ToggleButton>
                        <ToggleButton value="es" className="lang-button">🇪🇸</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
            <Grid container item sm={8}>
                <Grid container item xs={12}>
                    <List>
                        <ListItemIconText icon={<MarkerIcon color="primary" />} text="Argentina" />
                        <ListItemIconText icon={<EmailIcon color="primary" />} text="fenatesone@gmail.com" href="mailto:fenatesone@gmail.com" />
                        <ListItemIconText icon={<SchoolIcon color="primary" />} text="Google Scholar" href="https://scholar.google.com/citations?user=g7mBFZEAAAAJ" />
                        <ListItemIconText icon={<LinkedInIcon color="primary" />} text="/in/fernando-tesone" href="https://linkedin.com/in/fernando-tesone" />
                        <ListItemIconText icon={<GitHubIcon color="primary" />} text="/ftesone" href="https://github.com/ftesone" />
                    </List>
                </Grid>
            </Grid>
            <Grid container item sm={4} justifyContent="flex-end" alignItems="center">
                <Avatar alt="Fernando Tesone" src={avatar} className={classes.large} />
            </Grid>
        </Grid>
    );
}
