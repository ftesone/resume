import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default props =>
    <Grid container item xs={12}>
        <Card style={{textAlign: 'center', width: '100%', margin: '32px 0'}}>
            <CardContent>
                <Typography variant="caption">
                    Built with React + Material UI + Font Awesome
                </Typography>
            </CardContent>
        </Card>
    </Grid>
