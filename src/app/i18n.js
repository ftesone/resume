import aboutMe from '../features/about-me/i18n';
import education from '../features/education/i18n';
import technologies from '../features/technologies/i18n';
import workExperience from '../features/work-experience/i18n';

export const i18n = {
    es: {
        'Present': 'Actualidad',
        'January': 'Enero',
        'February': 'Febrero',
        'March': 'Marzo',
        'April': 'Abril',
        'May': 'Mayo',
        'June': 'Junio',
        'July': 'Julio',
        'August': 'Agosto',
        'September': 'Septiembre',
        'October': 'Octubre',
        'November': 'Noviembre',
        'December': 'Diciembre',
        'Google Scholar': 'Google Académico',
        'Built with React+Redux + Material UI + Font Awesome + ❤️': 'Hecho con React+Redux + Material UI + Font Awesome + ❤️',
        'Printed from https://ftesone.github.io/resume': 'Impreso desde https://ftesone.github.io/resume',
        ...aboutMe.es,
        ...education.es,
        ...technologies.es,
        ...workExperience.es,
    }
};

export default i18n;
