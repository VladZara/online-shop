import "./Products-block.css"
import ProductBlock from "./product-block/Product-block";
import React from "react";




const ProductsBlock = () => {
    return (
        <div className={"rail"}>
            <div className={"train"}>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"2 480 руб"} prductInfo={"Гель для тела для похудения"}  productName={"Slimming Gel Body"}/>
             <ProductBlock productImg="./img/img_1.png" productPrice={"2 480 руб"} prductInfo={"Гель для тела для похудения"}  productName={"Slimming Gel Body"}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"2 480 руб"} prductInfo={"Гель для тела для похудения"}  productName={"Slimming Gel Body"}/>
            <ProductBlock productImg="./img/img_1.png"  productPrice={"2 480 руб"} prductInfo={"Гель для тела для похудения"}  productName={"Slimming Gel Body"}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"2 480 руб"} prductInfo={"Гель для тела для похудения"}  productName={"Slimming Gel Body"}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"2 480 руб"} prductInfo={"Гель для тела для похудения"}  productName={"Slimming Gel Body"}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"2 480 руб"} prductInfo={"Гель для тела для похудения"}  productName={"Slimming Gel Body"}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"2 480 руб"} prductInfo={"Гель для тела для похудения"}  productName={"Slimming Gel Body"}/>
            </div>
        </div>
    )
}
export default ProductsBlock