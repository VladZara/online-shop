import "./Products-block.css"
import ProductBlock from "./product-block-content/Product-block";
import React from "react";




const ProductsBlock = () => {
    return (
        <div className={"rail"}>
            <h1>New</h1>
            <div className={"train"}>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>
             <ProductBlock productImg="./img/img_1.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>
            <ProductBlock productImg="./img/img_1.png"  productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>
            </div>
        </div>
    )
}
export default ProductsBlock