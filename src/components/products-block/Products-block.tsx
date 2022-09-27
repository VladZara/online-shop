import "./Products-block.css"
import ProductBlock from "./product-block-content/Product-block";
import axios from "axios";
import {useState} from "react";
import React, {useEffect} from 'react';




const ProductsBlock = () => {
    let [productsData,setProductsData] = useState([])
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

    return (
        <div className={"rail"}>
            <div className={"tilAArow"}>
                <h2>New</h2>
                <div>
                    <img src="./arow_img/arow-left.png" alt=""/>
                    <img src="./arow_img/arow-right.png" alt=""/>
                </div>
            </div>

            <div className={"train"}>
                {productsData.map((res:any) =>{
                    return (<ProductBlock productDsPrice={res.discount} productImg="./img/imgGel.png" productPrice={res.price} prductInfo={res.description}  productName={res.name}/>)
                })}
            </div>
        </div>
    )
}
export default ProductsBlock