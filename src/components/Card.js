import React from "react";
import star from "../images/Star 1.png";

export default function Card(prop)
{
    let badgeText
    if(prop.data.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if(prop.data.location === "Online")
    {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img className="card-image" src={prop.data.coverImg} alt="" />
            <div className="card-stats">
                <img className="card-star" src={star} alt="" />
                <span>{prop.data.stats.rating}</span>
                <span className="gray">({prop.data.stats.reviewCount}) &bull;</span>
                <span className="gray">{prop.data.location}</span>
            </div>
            <p className="card-title">{prop.data.title}</p>
            <p className="card-price"><span className="bold" >From ${prop.price}</span> / person</p>
        </div>
    )
};