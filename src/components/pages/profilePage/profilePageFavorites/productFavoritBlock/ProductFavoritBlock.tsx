import "./ProductFavoritBlock.css"
import React from "react";


const ProductFavoritBlock = (props:any) => {
    return (
        <div className={"productFavoritBlock"}>
            <img src="./img/img_11.png" alt=""/>
            <div className={"productFavoritBlockWI"}>
                <h6>Hair straightening complex with henna extract</h6>
<h5>R&B Henna Spa Therapy Magic Straight Cream</h5>
                <div className={"priceAndImg"}>
                    <div className={"imgsDiv"}>
                        <img src="/img/img_12.png" alt=""/>
                        <img src="/img/img_13.png" alt=""/>
                    </div>
                    <div className={"price"}>
                        <h5>30.00$</h5>
                        <h5>30.00$</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductFavoritBlock