import ProductBlock from "../products-block/product-block-content/Product-block";
import React from "react";




const ProductsRecommendedBlock = () => {
    return (
        <div className={"rail"}>
            <div className={"mover"}>
                <h1>Recommended</h1>
                <div>
                    <img src="./img/img_15.png" alt=""/>
                    <img src="./img/img_16.png" alt=""/>
                </div>
            </div>
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

export default ProductsRecommendedBlock