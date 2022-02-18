import React from 'react'
import Section from '../section/Section'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import technologies from './data'

const Technologies = () =>
    <List>
        {technologies.map(tech =>
            <ListItem key={tech.id}>
                <ListItemIcon>{tech.icon}</ListItemIcon>
                <ListItemText primary={tech.name} secondary={tech.years ? ` ${tech.years + (tech.years == 1 ? ' year' : ' years')}` : 'Learning'} />
            </ListItem>
        )}
    </List>

export default props =>
    <Section title="Technologies" body={<Technologies />} {...props} />
