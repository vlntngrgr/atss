import React from "react";
import Section from "./Section";

const Main = props => {
    const sections = Array.from(props.data.sections).map(el => {
        return <Section key={el.name} name={el.name} data={el.content} />;
    });

    return <main>{sections}</main>;
};

export default Main;
