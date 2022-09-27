import "../products-block/Products-block.css"
import ProductBlock from "../products-block/product-block-content/Product-block";
import React, {useEffect, useState} from "react";
import axios from "axios";




const ProductsRecommendedBlock = () => {
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
                <h2>Recommended</h2>
                <div>
                    <img src="./arow_img/arow-left.png" alt=""/>
                    <img src="./arow_img/arow-right.png" alt=""/>
                </div>
            </div>
            <div className={"train"}>
                    {productsData.map((res:any) =>{
                        return (<ProductBlock productDsPrice={res.discount} productImg="./img/img_1.png" productPrice={res.price} prductInfo={res.description}  productName={res.name}/>)
                    })}
            </div>
        </div>
    )
}

// @ts-ignore
export default ProductsRecommendedBlock