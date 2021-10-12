import React from "react";
import Section from "../Section/Section";
import paragraphs from "./data";

const AboutMe = props => (
    <section style={{textAlign: 'justify'}}>
        {paragraphs.map(paragraph => <p>{typeof paragraph === 'string' ? paragraph : paragraph.map(e => e)}</p>)}
    </section>
);

export default (props) => (
    <Section title="About Me" body={<AboutMe />} {...props} />
);
