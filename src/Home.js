import React from "react";
import "./Home.css";
import Product from "./Product";

const background = require('./images/e-commerce.png');

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src={background} alt="" className="home__image"/>
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />            
                </div>
            </div>
        </div>
    )
}

export default Home