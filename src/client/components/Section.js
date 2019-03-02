import React from "react";

const HtmlToReactParser = require("html-to-react").Parser;

const section = props => {
    const data = props.data.data.map(el => {
        let htmlToReactParser = new HtmlToReactParser();
        const value = htmlToReactParser.parse(el.value);

        switch (el.tag) {
            case "h1":
                return <h1>{value}</h1>;
            case "p":
                return <p>{value}</p>;
        }
    });

    console.log(data);
    return (
        <article className={props.data.background}>
            <section>{"{Images}"}</section>
            <section>{data}</section>
        </article>
    );
};

export default section;
