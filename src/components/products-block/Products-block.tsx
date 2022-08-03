import "./Products-block.css"
import ProductBlock from "./product-block/Product-block";
import React from "react";




const ProductsBlock = () => {
    return (
        <div className={"rail"}>
            <div className={"train"}>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/>
            <ProductBlock productImg="./img/img_1.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/>
            <ProductBlock productImg="./img/img_1.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"200.00 lei"} prductInfo={"Asta este crem dddddddddddddddd"}  productName={"Name product"}/>
            </div>
        </div>
    )
}
export default ProductsBlock