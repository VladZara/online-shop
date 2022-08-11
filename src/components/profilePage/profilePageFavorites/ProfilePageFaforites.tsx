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
        </div>
    )
}


export default ProfilePageFaforites