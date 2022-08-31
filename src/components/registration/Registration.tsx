import React, {useState} from 'react';
import "./Registration.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Registration = () => {
    const [value, setValue] = useState<any>()

    return (
        <div className={"registrationBlock"}>
            <img src="./img/img_18.png" alt=""/>
            <div>
                <h2>Enter <br/> or register</h2>
                <h6>We will send an SMS to the number with <br/> a confirmation code.</h6>
                <PhoneInput placeholder={"Your phone number"}
                            defaultCountry="US"
                            value={"+1-523-184-9316"}
                            onChange={setValue}
                />
                <button>To get the code</button>
            </div>
        </div>
    );
};

export default Registration;