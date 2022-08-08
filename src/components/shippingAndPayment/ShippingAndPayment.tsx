import React, {useState} from 'react';
import "./ShippingAndPayment.css"
import TermsOfServiceDelivery from "./termsOfServiceDelivery/TermsOfServiceDelivery";
import TermsOfServiceRules from "./termsOfServiceRules/TermsOfServiceRules";
const ShippingAndPayment = () => {
    const [mutation,SetMutation] =useState(true)

    const mutationHandler = () => {
        SetMutation((mutation) => !mutation)
    }
    return (
        <>
            <div className={"shippingAndPaymentt"}>
                <h1>Shipping and Payment</h1>
                <div className={"sAPInfoCards"}>
                    <div className={"sAPInfoCard"}>
                        <h5>Pickup points</h5>
                        <p>Choose the pick-up point and the date of receipt of <br/>the order
                            that is most convenient for you</p>
                    </div>
                    <div className={"verticalLine"}></div>
                    <div className={"sAPInfoCard"}>
                        <h5>Express delivery</h5>
                        <p>Receive the goods the very next day <br/>
                            valid for goods marked )</p>
                    </div>
                    <div className={"verticalLine"}></div>
                    <div className={"sAPInfoCard"}>
                        <h5>Professional and safe</h5>
                        <p>We take the delivery process seriously and <br/>trust it only to professionals in their field.</p>
                    </div>
                </div>
                <div className={"sAPOptionsCardAF"}>
                    <div className={"sAPOptionsCard"}>
                        <h4 className={"botomLine"}>Shipping Options
                            in St. Petersburg</h4>
                        <div>
                            <h6>Shipping from 400 ₽</h6>
                            <p>when ordering from 40 000 ₽ - Free</p>
                        </div>
                        <div className={"pickup"}>
                            <h5>Pickup</h5>
                            <h6>12 stores</h6>
                        </div>
                        <div className={"addProducts"}>
                            <img src="./img/img_9.png" alt=""/>
                            <p>Add items to your shopping cart and we will calculate the exact
                                shipping terms for your order</p>
                        </div>
                        <button>Go to catalog</button>
                    </div>
                    <img src="./img/img_8.png" alt=""/>
                </div>
            </div>
            <div className={"termsOfService"}>
                <h4>Terms of Service</h4>
                <div className={"termsOfServiceBtn"}>
                    <button className={mutation ? "selected" : "notSelected"} onClick={mutationHandler}>Delivery</button>
                    <button className={mutation ? "notSelected" : "selected"} onClick={mutationHandler}>Goods acceptance rules</button>
                </div>
                {mutation && <TermsOfServiceDelivery/>}
                {mutation === false && <TermsOfServiceRules/>}
            </div>
        </>
    );
};
export default ShippingAndPayment;