import React from "react";
import photoCollection from "../images/Group 77.png";

export default function Hero()
{
    return(
        <div className="hero-container">
            <img className="hero-photo" src={photoCollection} alt="photo collection"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
        </div>
    )
};