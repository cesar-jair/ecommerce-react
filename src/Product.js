import React from "react";
import "./Product.css";

const headset = require('./images/gaming-headset.png');

function Product() {
    return (
        <div>
            <div className = "product">
                <div classNmae="product__info">
                    <p>Title</p>
                    <p className="product__price">$30</p>
                    <div className="product__rating">⭐⭐</div>
                </div> 

                <img src={headset} alt="product-image"></img>
                <button>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product