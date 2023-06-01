import React from "react";
import logo from "../images/airbnb 1.png";

export default function Navbar()
{
    return(
        <nav>
            <img className="nav-logo" src={logo} alt="logo" />
        </nav>
    )
};