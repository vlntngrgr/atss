import React from "react";
import Menu from "./Menu";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false,
        };
    }

    toggleMenu = event => {
        this.setState({
            toggleMenu: !this.state.toggleMenu,
        });
    };

    render() {
        return (
            <header>
                <a href="tel:+32497301084" className="appel">
                    {"0497301084"}
                </a>
                <div>
                    <Menu
                        toggle={this.state.toggleMenu}
                        onClick={this.toggleMenu}
                    />
                </div>
            </header>
        );
    }
}

export default Header;
