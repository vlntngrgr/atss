import * as React from "react";
import ReactDOM from "react-dom";
import data from "./components/data.json";

import Header from "./components/Header";
import Main from "./components/Main";

require("style-loader!css-loader!./css/styles.css");

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Main data={data} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
