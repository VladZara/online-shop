import "./ProfilePage.css"
import React from "react";
import ProfilePagePersonalInfo from "./profilePagePersonalInfo/ProfilePagePersonalInfo";
import ProductFavoritBlock from "./profilePageFavorites/productFavoritBlock/ProductFavoritBlock";
import ProfilePageFaforites from "./profilePageFavorites/ProfilePageFaforites";


const ProfilePage = () => {
    return (
        <div className={"profilePage"}>
            <div className={"topProfilePage"}>
                <div>
                    <h4>Maxim Plamadeala</h4>
                    <img src="./img/img_10.png" alt=""/>
                </div>
                <h1>Personal information</h1>
            </div>
            <div className={"isBonus"}>
                <p>no bonus card</p>
                <div></div>
            </div>
            <div className={"ProfListAbout"}>
                <div className={"ProfList"}>
                    <h5>my cards</h5>
                    <h5>my client days</h5>
                    <h5 className={"selected"}>personal information</h5>
                    <h5>favorites</h5>
                    <h5>My purchases</h5>
                    <h5>chat with a consultant</h5>
                    <h5>settings</h5>
                    <h5>go out</h5>
                </div>
                <ProfilePagePersonalInfo/>
                {/*<ProfilePageFaforites/>*/}
            </div>
        </div>
    )
}


export default ProfilePage