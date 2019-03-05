import React from "react";
import {Logo, Deno, Cle} from "../images/Images";

const Home = () => {
    return (
        <div className="home">
            <img src={Deno} alt="Dénomination" className="deno" />

            <img src={Cle} alt="clé" className="hidden-small" />
            <img src={Logo} alt="logo atss" className="logo" />
        </div>
    );
};

export default Home;
