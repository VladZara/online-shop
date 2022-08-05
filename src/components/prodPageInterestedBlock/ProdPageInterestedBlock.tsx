import "./ProdPageInterestedBlock.css"
import ProductBlock from "../products-block/product-block-content/Product-block";
import React from "react";


const ProdPageInterestedBlock = () => {
    return (
        <div className={"rail"}>
            <h1>Interested</h1>
            <div className={"train"}>
                <ProductBlock productImg="./img/img_7.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}
                              productName={"Slimming Gel Body"}/>
                <ProductBlock productImg="./img/img_6.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}
                              productName={"Slimming Gel Body"}/>
                <ProductBlock productImg="./img/img_7.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}
                              productName={"Slimming Gel Body"}/>
                <ProductBlock productImg="./img/img_6.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}
                              productName={"Slimming Gel Body"}/>
                <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}
                              productName={"Slimming Gel Body"}/>
                <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}
                              productName={"Slimming Gel Body"}/>
                <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}
                              productName={"Slimming Gel Body"}/>
                <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}
                              productName={"Slimming Gel Body"}/>
            </div>
        </div>
    )
}
// @ts-ignore
export default ProdPageInterestedBlock