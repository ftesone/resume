import React from 'react'
import Section from '../Section/Section'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import experience from './data'

const months = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const ExperienceItem = () =>
    <List>
        {experience.map(job =>
            <ListItem key={job.id}>
                <ListItemIcon>{job.icon}</ListItemIcon>
                <ListItemText primary={job.rol} secondary={job.workplace} />
                <ListItemText secondary={`${months[job.start.month]} ${job.start.year} – ${job.end ? months[job.end.month]+' '+job.end.year : 'Present'}`} style={{marginLeft: '10px', textAlign: 'right'}} />
            </ListItem>
        )}
    </List>

export default props =>
    <Section title="Work Experience" body={<ExperienceItem />} {...props} />
