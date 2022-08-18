import "./ProfilePageFaforites.css"
import React from "react";
import ProductFavoritBlock from "./productFavoritBlock/ProductFavoritBlock";


const ProfilePageFaforites = () => {
    return (
        <div className={"productFavoritList"}>
            <ProductFavoritBlock/>
            <ProductFavoritBlock/>
            <ProductFavoritBlock/>
            <ProductFavoritBlock/>
            {/*<ProductFavoritBlock reducePrice={"32.50$"} price={"33.00"} imgUrl={"./img/img_11.png"}/>*/}
        </div>
    )
}


export default ProfilePageFaforites