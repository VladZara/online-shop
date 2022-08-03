import "./Products-block.css"
import ProductBlock from "./product-block/Product-block";
import React from "react";




const ProductsBlock = () => {
    return (
        <nav>
            {/*<ul>*/}
            {/*    <li><ProductBlock productImg="./img/product-block-foto/imgGel.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/></li>*/}
            {/*    <li><ProductBlock productImg="./img/product-block-foto/imgGel.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/></li>*/}
            {/*    <li><ProductBlock productImg="./img/product-block-foto/imgGel.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/></li>*/}

            {/*</ul>*/}
            <div>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/>
        </div>
        </nav>
    )
}
export default ProductsBlock