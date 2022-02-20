import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemIconText from './ListItemIconText';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MarkerIcon from '@material-ui/icons/Room';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
                <Grid item xs={11}>
                    <Typography variant="h1" style={{fontSize: '4rem'}}>
                        Fernando Tesone
                    </Typography>
                </Grid>
                <Grid container item xs={1}>
                    <ToggleButtonGroup value={lang} exclusive onChange={changeLanguage} style={{margin: '18px'}}>
                        <ToggleButton value="en" className="lang-button">🇬🇧</ToggleButton>
                        <ToggleButton value="es" className="lang-button">🇪🇸</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
            <Grid container item md={8}>
                <Grid container item xs={12}>
                    <List>
                        <ListItemIconText icon={<EmailIcon color="primary" />} text="fenatesone@gmail.com" />
                        <ListItemIconText icon={<PhoneAndroidIcon color="primary" />} text="+549 221 677 5392" />
                        <ListItemIconText icon={<MarkerIcon color="primary" />} text="La Plata, Argentina" />
                        <ListItemIconText icon={<GitHubIcon color="primary" />} text="/ftesone" />
                        <ListItemIconText icon={<LinkedInIcon color="primary" />} text="/in/fernando-tesone" />
                    </List>
                </Grid>
            </Grid>
            <Grid container item md={4} justifyContent="flex-end" alignItems="center">
                <Avatar alt="Fernando Tesone" src={avatar} className={classes.large} />
            </Grid>
        </Grid>
    );
}
