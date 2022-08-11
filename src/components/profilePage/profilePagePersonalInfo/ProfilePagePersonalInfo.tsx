import "./ProfilePagePersonalInfo.css"
import React from "react";


const ProfilePagePersonalInfo = () => {
    return (
        <div className={"ProfilePagePersonalInfo"}>
            <h4>Fill out your profile and get a 10% bonus card</h4>
            <div className={"inputNames"}>
                <input placeholder={"Surname"} type="text"/>
                <input placeholder={"Name"} type="text"/>
                <input placeholder={"Middle name"} type="text"/>
            </div>
            <div className={"inputGenders"}>
                <div>
                    <input type="checkbox"/>
                    <h6>Male</h6>
                </div>
                <div>
                    <input type="checkbox"/>
                    <h6>Female</h6>
                </div>
                <div>
                    <input type="checkbox"/>
                    <h6>Not specified</h6>
                </div>
            </div>
            <div className={"inputNames"}>
                <input placeholder={"Date of Birth"} type="text"/>
                <input placeholder={"Your mail"} type="text"/>
                <input value={"              +1 843 224 7444"} placeholder={"Your malrwssdf"} type="text"/>
                <div className={"country"}>
                    <img src="./img/united-states.png" alt=""/>
                    <img src="./img/img_14.png" alt=""/>
                </div>
                <input placeholder={"City"} type="text"/>
                <div className={"consent"}>
                    <input type="checkbox"/>
                    <h6>I consent to the processing of my personal data in accordance
                        with the <span className={"pinkColor"}>Personal Data Processing
                        Policy</span> and <span className={"pinkColor"}>the User Agreement</span>.</h6>
                </div>
                <button>Register</button>
            </div>

        </div>
    )
}


export default ProfilePagePersonalInfo