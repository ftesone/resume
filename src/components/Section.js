import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default props =>
    <article {...props}>
        <Typography variant="h2" style={{fontSize: '3rem'}}>
            {props.title}
        </Typography>
        <Card>
            <CardContent>
                {props.body}
            </CardContent>
        </Card>
    </article>
