import "./Product-block.css"
import React from "react";
import ReactDom from "react-dom";

const ProductBlock = (props :any) => {
    const percent = props.productDsPrice / 100
    return (
        <div className={"cardPr"}>
            <div className={"sell"}>SELL</div>
            <img src={props.productImg}/>

            <div className={"texts"}>
                <div className={"info"}>
                    <h5>{props.productName}</h5>
                    <p>{props.prductInfo}</p>
                </div>
            <div className={"pricess"}>
                <p>{props.productPrice-(props.productPrice * percent) +"_$"}</p>
    <h6>{props.productPrice + "_$"}</h6>

            </div>
            </div>
        </div>
    )
}
export default ProductBlock