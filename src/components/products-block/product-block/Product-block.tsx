import "./Product-block.css"
import React from "react";
import ReactDom from "react-dom";

const ProductBlock = (props :any) => {
    return (
        <div className={"card"}>
            <img src={props.productImg}/>

            <div className={"texts"}>
                <div className={"info"}>
                    <h4>{props.productName}</h4>
                    <p>{props.prductInfo}</p>
                </div>
<div>
    <h5>{props.productPrice}</h5>
</div>

            </div>
        </div>
    )
}
export default ProductBlock







// import "./Product-block.css"
// import React from "react";
// import ReactDom from "react-dom";
//
// const ProductBlock = () => {
//     return (
//         <div className="card">
//             <img src="./img/imgGel.png"/>
//             <div className="texts">
//                 <div className="info">
//                     <h4>Product Name</h4>
//                     <p>informatia despre product</p>
//                 </div>
//                 <div>
//                     <h5>200.00 lei</h5>
//                 </div>
//
//             </div>
//         </div>
//     )
// }
// export default ProductBlock