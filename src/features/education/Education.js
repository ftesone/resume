import React from 'react'
import Section from '../section/Section'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import degrees from './data'



const Degrees = ({}, {t}) =>
    <List>
        {degrees.map(degree =>
            <ListItem key={degree.id}>
                <ListItemIcon><FontAwesomeIcon icon={faGraduationCap} size="2x" color="#1dd1a7" /></ListItemIcon>
                <ListItemText primary={t(degree.title)} secondary={t(degree.school)} />
                <ListItemText secondary={`${degree.start} – ${degree.end ? degree.end : t('Present')}`} style={{marginLeft: '10px', textAlign: 'right'}} />
            </ListItem>
        )}
    </List>

Degrees.contextTypes = {
    t: PropTypes.func,
};



export const Education = (props, {t}) =>
    <Section title={t('Education')} body={<Degrees />} {...props} />

Education.contextTypes = {
    t: PropTypes.func,
};



export default Education;

