import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "../data.js"

export default function App()
{
    const dataElements = data.map(data => {
        return <Card 
            key={data.id}
            img={data.coverImg}
            rating={data.stats.rating}
            revievCount={data.stats.revievCount}
            location={data.location}
            title={data.title}
            price={data.price}
        />
    })
    return(
        <div className="container">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {dataElements}
            </section>
        </div>
    )
};