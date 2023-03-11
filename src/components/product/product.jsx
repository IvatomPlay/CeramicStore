import cn from "classnames";
import React from "react";
import s from "./product.css";
import save from "../../"

function Product(name, price, discount, description, picture, tags, onProductLike, currentUser, _id, likes) {
    return (
        <div>
            <button>
                Back
            </button>
            <h1>{name}</h1>
            <div>
                <span>Article : </span> <b>n/a</b>
            </div>
            <div>
                <img src={picture} alt={`Image of ${name}`} />
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Product;