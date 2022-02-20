import React from 'react';
import Section from '../section/Section';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import experience from './data';
import PropTypes from 'prop-types';



const months = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const WorkExperienceItem = ({}, {t}) =>
    <List>
        {experience.map(job =>
            <ListItem key={job.id}>
                <ListItemIcon>{job.icon}</ListItemIcon>
                <ListItemText primary={t(job.rol)} secondary={job.workplace} />
                <ListItemText secondary={`${t(months[job.start.month])} ${job.start.year} – ${job.end ? t(months[job.end.month])+' '+job.end.year : t('Present')}`} style={{marginLeft: '10px', textAlign: 'right'}} />
            </ListItem>
        )}
    </List>

WorkExperienceItem.contextTypes = {
    t: PropTypes.func,
};



export const WorkExperience = (props, {t}) =>
    <Section title={t('Work Experience')} body={<WorkExperienceItem />} {...props} />

WorkExperience.contextTypes = {
    t: PropTypes.func,
};



export default WorkExperience;
