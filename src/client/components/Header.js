import React from "react";

const Header = props => {
    console.log(props);
    return (
        <header>
            <div>
                <a href="tel:+32497301084" className="appel">
                    {"0497301084"}
                </a>
            </div>
            <div>{"MENU"}</div>
        </header>
    );
};

export default Header;
