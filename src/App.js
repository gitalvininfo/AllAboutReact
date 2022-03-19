

import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import './style.css';
import data from "./data";

export default function App() {

    const cardElements = data.map(item => {
        return <Card {...item} />
    })

    return (
        <div className="app-container">
            <Header />
            <div className="cards-container">
                {cardElements}
            </div>

        </div>
    )
}