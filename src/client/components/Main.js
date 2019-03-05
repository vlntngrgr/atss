import React from "react";
import Section from "./Section";
import Home from "./Home";

const Main = props => {
    const sections = Array.from(props.data.sections).map(el => {
        return (
            <Section
                id={el.name}
                key={el.name}
                name={el.name}
                spec={el.class}
                data={el.content}
            />
        );
    });

    return (
        <main>
            <Home />
            {sections}
        </main>
    );
};

export default Main;
