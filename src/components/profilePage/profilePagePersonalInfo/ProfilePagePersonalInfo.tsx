import "./ProfilePagePersonalInfo.css"
import React, {useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const ProfilePagePersonalInfo = () => {
    const [value, setValue] = useState<any>()
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
                <PhoneInput placeholder={"Your phone number"}
                            defaultCountry="US"
                            value={"+1-523-184-9316"}
                            onChange={setValue}
                />
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