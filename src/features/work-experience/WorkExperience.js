import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import experience from './data';
import PropTypes from 'prop-types';
import { Accordion, AccordionDetails, AccordionSummary, Chip, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const months = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const WorkExperienceItem = ({}, {t}) =>
    <>
        {experience.map(job =>
            <Accordion key={job.id} variant="outlined">
                <AccordionSummary expandIcon={<ExpandMoreIcon className="not-print" />}>
                    <ListItemIcon>{job.icon}</ListItemIcon>
                    <ListItemText primary={t(job.rol)} secondary={job.workplace} />
                    <ListItemText secondary={`${t(months[job.start.month])} ${job.start.year} – ${job.end ? t(months[job.end.month])+' '+job.end.year : t('Present')}`} style={{marginLeft: '10px', textAlign: 'right'}} />
                </AccordionSummary>
                <AccordionDetails className="work-experience-details">
                    <div>
                        {job.tasks && (
                            <ul className="tasks">
                                {job.tasks.map((task, idx) => <li key={idx}>{t(task)}</li>)}
                            </ul>
                        )}
                        {job.technologies && (
                            <div className="techs">
                                {job.technologies.map(tech => (
                                    <Chip key={tech} label={tech} variant="outlined" size="small" className="leave-border" />
                                ))}
                            </div>
                        )}
                    </div>
                </AccordionDetails>
            </Accordion>
        )}
    </>

WorkExperienceItem.contextTypes = {
    t: PropTypes.func,
};



export const WorkExperience = (props, {t}) =>
    <div style={{ marginBottom: '20px' }}>
        <Typography variant="h2" style={{fontSize: '3rem'}}>
            {t('Work Experience')}
        </Typography>
        <WorkExperienceItem />
    </div>

WorkExperience.contextTypes = {
    t: PropTypes.func,
};



export default WorkExperience;
