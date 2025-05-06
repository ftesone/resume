import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'

export default [
    {
        id: 6,
        workplace: 'Minutentag',
        rol: 'Fullstack Developer',
        icon: <FontAwesomeIcon icon={faCode} size="2x" color="#1dd1a7" />,
        start: {month: 3, year: 2022},
        end: null,
    },
    {
        id: 7,
        workplace: 'Facultad de Informática – Universidad Nacional de La Plata',
        rol: 'Research Intern',
        icon: <FontAwesomeIcon icon={faDesktop} size="2x" color="#1dd1a7" />,
        start: {month: 6, year: 2019},
        end: {month: 7, year: 2024},
    },
    {
        id: 5,
        workplace: 'Facultad de Informática – Universidad Nacional de La Plata',
        rol: 'Backend and RESTful APIs Developer/DevOps',
        icon: <FontAwesomeIcon icon={faCode} size="2x" color="#1dd1a7" />,
        start: {month: 7, year: 2015},
        end: {month: 7, year: 2024},
    },
    {
        id: 4,
        workplace: 'Facultad de Informática – Universidad Nacional de La Plata',
        rol: 'Data Organization Fundamentals/Database Design – Teaching Assistant',
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" color="#1dd1a7" />,
        start: {month: 10, year: 2015},
        end: {month: 7, year: 2024},
    },
    {
        id: 3,
        workplace: 'Facultad de Informática – Universidad Nacional de La Plata',
        rol: 'Languages Seminar (PHP option) – Teaching Assistant',
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" color="#1dd1a7" />,
        start: {month: 4, year: 2016},
        end: {month: 7, year: 2024},
    },
    {
        id: 2,
        workplace: 'Buzz Consulting',
        rol: 'Backend and RESTful APIs Developer/DevOps',
        icon: <FontAwesomeIcon icon={faCode} size="2x" color="#1dd1a7" />,
        start: {month: 1, year: 2018},
        end: {month: 8, year: 2021},
    },
    {
        id: 1,
        workplace: 'Vork',
        rol: 'CMS and Product Developer',
        icon: <FontAwesomeIcon icon={faCode} size="2x" color="#1dd1a7" />,
        start: {month: 10, year: 2011},
        end: {month: 6, year: 2015},
    },
]
