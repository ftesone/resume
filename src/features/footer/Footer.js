import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Footer = (props, {t}) =>
    <Grid container item xs={12}>
        <Card style={{textAlign: 'center', width: '100%', margin: '32px 0'}}>
            <CardContent style={{padding: '20px'}}>
                <Typography variant="caption">
                    { t('Built with React+Redux + Material UI + Font Awesome + ❤️') }
                </Typography>
            </CardContent>
        </Card>
    </Grid>

Footer.contextTypes = {
    t: PropTypes.func,
};



export default Footer;
