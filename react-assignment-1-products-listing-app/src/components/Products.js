import React from "react";
import Data from "../data.json";

function Products() {
    return (
        <div>
            {Data.map((item)=>{
                const {id, title, price,description,category,image} = item;
                return(
                    <div>
                        <h3>{id}</h3>
                        <h3>{title}</h3>
                        <h3>{price}</h3>
                        <h3>{description}</h3>
                        <h3>{category}</h3>
                        <h3>{image}</h3>
                    </div>
                );
            })};
        </div>
    );
}

export default Products;