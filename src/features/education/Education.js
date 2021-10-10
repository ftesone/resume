import React from 'react'
import Section from '../Section/Section'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import degrees from './data'

const Degrees = () =>
    <List>
        {degrees.map(degree =>
            <ListItem key={degree.id}>
                <ListItemIcon><FontAwesomeIcon icon={faGraduationCap} size="2x" color="#1dd1a7" /></ListItemIcon>
                <ListItemText primary={degree.degreeEs} secondary={degree.degreeEn} />
                <ListItemText secondary={`${degree.start} – ${degree.end ? degree.end : 'Present'}`} style={{marginLeft: '10px', textAlign: 'right'}} />
            </ListItem>
        )}
    </List>

export default props =>
    <Section title="Education" body={<Degrees />} {...props} />
