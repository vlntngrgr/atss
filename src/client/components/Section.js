import React from "react";

const HtmlToReactParser = require("html-to-react").Parser;
const {SectionImages} = require("../images/Images");

const section = props => {
    const data = props.data.data.map(el => {
        const htmlToReactParser = new HtmlToReactParser();
        const value = htmlToReactParser.parse(el.value);

        switch (el.tag) {
            case "h1":
                return <h1 key={el.name} className="title">{value}</h1>;
            case "p":
                return <p key={el.name}>{value}</p>;
            case "img":
                return <img key={el.name} className={el.class} src={SectionImages[el.value]} alt={el.name}/> 
        }
    });

    return (
        <article key={props.data.name}>
                {data}
        </article>
    );
};

export default section;
