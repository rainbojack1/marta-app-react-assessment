import React from 'react';
import Logo from "../assets/img/marta-bus-logo.png";

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <img src={Logo} alt="MARTA logo"></img>
            <hr className="my-4"></hr>
            <h1>MARTA Bus Routes</h1>
        </div>
    );
};

export default Jumbotron;