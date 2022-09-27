import "./Products-block.css"
import ProductBlock from "./product-block-content/Product-block";
import axios from "axios";
import {useState} from "react";
import React, {useEffect} from 'react';




const ProductsBlock = () => {
    let [productsData,setProductsData]=useState([])
    useEffect(() => {
            axios.get('http://localhost:3002/api/products')
                .then(res => {
                    setProductsData(res.data.data)
                    console.log(res.data.data)
                })
                .catch((ereor:any) =>{
                    console.log(ereor)
                })
        }
        ,[])
    productsData.map((res:any) =>{console.log(res.price)})
    console.log(productsData[0])

    return (
        <div className={"rail"}>
            <h1>New</h1>
            <div className={"train"}>
            {/*<ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>*/}
            {/* <ProductBlock productImg="./img/img_1.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>*/}
            {/*<ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>*/}
            {/*<ProductBlock productImg="./img/img_1.png"  productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>*/}
            {/*<ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>*/}

                {productsData.map((res:any) =>{
                    return (<ProductBlock productDsPrice={res.discount} productImg="./img/imgGel.png" productPrice={res.price} prductInfo={res.description}  productName={res.name}/>)
                })}


            <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>
            <ProductBlock productImg="./img/imgGel.png" productPrice={"32.50$"} prductInfo={"slimming body gel"}  productName={"Gel "}/>
            </div>
        </div>
    )
}
export default ProductsBlock