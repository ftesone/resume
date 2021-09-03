import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItemIconText from './ListItemIconText'
import EmailIcon from '@material-ui/icons/Email'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import MarkerIcon from '@material-ui/icons/Room'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

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

    return <Grid container spacing={2} {...props}>
        <Grid container item md={8}>
            <Grid container item xs={12}>
                <Typography variant="h1" style={{fontSize: '4rem'}}>
                    Fernando Tesone
                </Typography>
            </Grid>
            <Grid container item xs={12}>
                <List>
                    <ListItemIconText icon={<EmailIcon color="primary" />} text="fenatesone@gmail.com" />
                    <ListItemIconText icon={<PhoneAndroidIcon color="primary" />} text="+549 221 677 5392" />
                    <ListItemIconText icon={<MarkerIcon color="primary" />} text="La Plata, Argentina" />
                    <ListItemIconText icon={<LinkedInIcon color="primary" />} text="/in/fernando-tesone" />
                </List>
            </Grid>
        </Grid>
        <Grid container item md={4} justifyContent="flex-end" alignItems="center">
            <Avatar alt="Fernando Tesone" src="perfil.jpg" className={classes.large} />
        </Grid>
    </Grid>
}
