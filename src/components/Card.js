import React from "react";
import star from "../images/Star 1.png";

export default function Card(prop)
{
    return(
        <div className="card">
            <img className="card-image" src={prop.img} alt="" />
            <div className="card-stats">
                <img className="card-star" src={star} alt="" />
                <span>{prop.rating}</span>
                <span className="gray">({prop.revievCount}) &bull;</span>
                <span className="gray">{prop.country}</span>
            </div>
            <p className="card-title">{prop.title}</p>
            <p className="card-price"><span className="bold" >From ${prop.price}</span> / person</p>
        </div>
    )
};