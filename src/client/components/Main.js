import React from "react";
import Section from "./Section";

const Main = props => {
    console.log(Array.from(props.data.sections));
    const sections = Array.from(props.data.sections).map(el => {
        return <Section key={el.name} data={el.content} />;
    });

    return <main>{sections}</main>;
};

export default Main;
