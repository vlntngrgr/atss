import React from "react";

const Menu = (props) => {
    return (
        <nav>
            <div className="btn-enable" onClick={props.onClick}><i className="fas fa-bars"></i>
            </div>
            <ul className={`menu-enable ${props.toggle?"enable":"disable"}`}>
                <a href="#presentation" onClick={props.onClick}><li>{"Accueil"}</li></a>
                <a href="#urgence" onClick={props.onClick}><li>{"Urgence"}</li></a>
                <a href="#secu" onClick={props.onClick}><li>{"Sécuristation"}</li></a>
                <a href="#rdv" onClick={props.onClick}><li>{"Contact"}</li></a>
                <a href="#" onClick={props.onClick}><li>{"Galerie"}</li></a>
            </ul>
        </nav>
    );
}

export default Menu;
