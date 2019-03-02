import React from "react";
import data from "../data.json";

const container = props => {
    console.log(data, props);
    return <main>{data.name}</main>;
};

export default container;
