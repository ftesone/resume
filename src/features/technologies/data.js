import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faDocker,
    faGit,
    faJs,
    faPhp,
    faReact,
    faRust,
    faSymfony,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import {
    faDatabase,
    faSync,
} from '@fortawesome/free-solid-svg-icons'

const PhpIcon = () => <FontAwesomeIcon icon={faPhp} size="2x" color="#8892bf" />
const JsIcon = () => <FontAwesomeIcon icon={faJs} size="2x" color="#efd81d" />

export default [
    {
        id: 1,
        icon: <PhpIcon />,
        name: 'PHP',
        years: 10,
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faSymfony} size="2x" color="black" />,
        name: 'Symfony',
        years: 6,
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faGit} size="2x" />,
        name: 'Git',
        years: 6,
    },
    {
        id: 4,
        icon: <PhpIcon />,
        name: 'PHPUnit',
        years: 5,
    },
    {
        id: 5,
        icon: <JsIcon />,
        name: 'JavaScript',
        years: 10,
    },
    {
        id: 6,
        icon: <FontAwesomeIcon icon={faDatabase} size="2x" />,
        name: 'MySQL',
        years: 10,
    },
    {
        id: 7,
        icon: <FontAwesomeIcon icon={faDocker} size="2x" color="#2496ed" />,
        name: 'Docker',
        years: 3,
    },
    {
        id: 14,
        icon: <FontAwesomeIcon icon={faSync} size="2x" />,
        name: 'CI/CD',
        years: 3,
    },
    {
        id: 12,
        icon: <FontAwesomeIcon icon={faReact} size="2x" color="#61dafb" />,
        name: 'React + Redux',
        years: 1,
    },
    {
        id: 8,
        icon: <JsIcon />,
        name: 'jQuery',
        years: 10,
    },
    {
        id: 9,
        icon: <JsIcon />,
        name: 'Jest',
        years: 1,
    },
    {
        id: 10,
        icon: <FontAwesomeIcon icon={faAngular} size="2x" color="#d6002f" />,
        name: 'Ionic + Angular',
        years: 1,
    },
    {
        id: 11,
        icon: <FontAwesomeIcon icon={faVuejs} size="2x" color="#41b883" />,
        name: 'Vue.js',
        years: 1,
    },
    {
        id: 13,
        icon: <FontAwesomeIcon icon={faRust} size="2x" color="black" />,
        name: 'Rust',
        years: null,
    },
]
