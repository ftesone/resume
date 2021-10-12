import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default props =>
    <article style={{marginBottom: '20px'}} {...props}>
        <Typography variant="h2" style={{fontSize: '3rem'}}>
            {props.title}
        </Typography>
        <Card style={{marginBottom: '20px'}}>
            <CardContent>
                {props.body}
            </CardContent>
        </Card>
    </article>
