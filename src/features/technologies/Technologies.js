import React from 'react';
import Section from '../section/Section';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import technologies from './data';
import PropTypes from 'prop-types';



const TechnologiesList = ({}, {t}) =>
    <List style={{display: 'flex', flexWrap: 'wrap'}}>
        {technologies.map(tech =>
            <ListItem key={tech.id} style={{maxWidth: '48%', minWidth: '180px'}}>
                <ListItemIcon>{tech.icon}</ListItemIcon>
                <ListItemText primary={tech.name} secondary={tech.years ? t(['1 year', '{n} years', 'n'], {n: tech.years}) : t('Learning')} />
            </ListItem>
        )}
    </List>

TechnologiesList.contextTypes = {
    t: PropTypes.func,
};



export const Technologies = (props, {t}) =>
    <Section title={t('Technologies')} body={<TechnologiesList />} {...props} />

Technologies.contextTypes = {
    t: PropTypes.func,
};



export default Technologies;
