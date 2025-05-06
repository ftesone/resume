import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faDocker,
    faGitAlt,
    faJs,
    faMicrosoft,
    faNodeJs,
    faPhp,
    faPython,
    faReact,
    faRust,
    faSymfony,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import {
    faDatabase,
    faProjectDiagram,
    faSync,
    faTimes,
} from '@fortawesome/free-solid-svg-icons'

const PhpIcon = () => <FontAwesomeIcon icon={faPhp} size="2x" color="#8892bf" />
const JsIcon = () => <FontAwesomeIcon icon={faJs} size="2x" color="#efd81d" />

export default [
    {
        id: 15,
        icon: <FontAwesomeIcon icon={faNodeJs} size="2x" color="black" />,
        name: 'Next.js',
        years: 2,
    },
    {
        id: 16,
        icon: <FontAwesomeIcon icon={faMicrosoft} size="2x" />,
        name: '#C .NET',
        years: 3,
    },
    {
        id: 1,
        icon: <PhpIcon />,
        name: 'PHP',
        years: 10,
    },
    {
        id: 17,
        icon: <FontAwesomeIcon icon={faPython} size="2x" color="#3772a2" />,
        name: 'Python',
        years: 2,
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faSymfony} size="2x" color="black" />,
        name: 'Symfony',
        years: 6,
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faGitAlt} size="2x" />,
        name: 'Git',
        years: 9,
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
        years: 12,
    },
    {
        id: 6,
        icon: <FontAwesomeIcon icon={faDatabase} size="2x" />,
        name: 'MySQL',
        years: 10,
    },
    {
        id: 19,
        icon: <FontAwesomeIcon icon={faDatabase} size="2x" />,
        name: 'MongoDB',
        years: 1,
    },
    {
        id: 7,
        icon: <FontAwesomeIcon icon={faDocker} size="2x" color="#2496ed" />,
        name: 'Docker',
        years: 5,
    },
    {
        id: 14,
        icon: <FontAwesomeIcon icon={faSync} size="2x" />,
        name: 'CI/CD',
        years: 4,
    },
    {
        id: 12,
        icon: <FontAwesomeIcon icon={faReact} size="2x" color="#61dafb" />,
        name: 'React + Redux',
        years: 2,
    },
    {
        id: 8,
        icon: <JsIcon />,
        name: 'jQuery',
        years: 10,
    },
    {
        id: 18,
        icon: <FontAwesomeIcon icon={faProjectDiagram} size="2x" />,
        name: 'GraphQL',
        years: 1,
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
        id: 20,
        icon: <FontAwesomeIcon icon={faTimes} size="2x" />,
        name: 'Haskell',
        years: 1,
    },
    {
        id: 13,
        icon: <FontAwesomeIcon icon={faRust} size="2x" color="black" />,
        name: 'Rust',
        years: null,
    },
]
