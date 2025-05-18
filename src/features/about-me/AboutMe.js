import React from "react";
import Section from "../section/Section";
import { GithubRepoLink, aboutMe } from "./data";
import PropTypes from "prop-types";



const AboutMeContent = ({}, {t}) => (
    <section className="about-me">
        {aboutMe
            .split(/\r?\n/)
            .map(paragraph => (
                <p>
                    {t(paragraph.trim(), {GithubRepoLink: <GithubRepoLink/>})}
                </p>
            ))
        }
    </section>
);

AboutMeContent.contextTypes = {
    t: PropTypes.func,
};



export const AboutMe = (props, {t}) => (
    <Section title={t('About me')} body={<AboutMeContent />} {...props} />
);

AboutMe.contextTypes = {
    t: PropTypes.func,
};



export default AboutMe;
