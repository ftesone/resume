import React from "react";
import Section from "../section/Section";
import { GithubRepoLink, aboutMe } from "./data";

const AboutMe = props => (
    <section style={{textAlign: 'justify'}}>
        {aboutMe
            .split(/\r?\n/)
            .map(paragraph => <p>{paragraph
                .split('{GithubRepoLink}')
                .flatMap(s => [s, <GithubRepoLink />])
                .slice(0, -1)
            }</p>)
        }
    </section>
);

export default (props) => (
    <Section title="About Me" body={<AboutMe />} {...props} />
);
