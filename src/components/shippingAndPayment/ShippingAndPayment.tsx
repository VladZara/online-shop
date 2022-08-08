import React from 'react';
import "./ShippingAndPayment.css"
const ShippingAndPayment = () => {
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
                    <div className={"sAPInfoCard"}>
                        <h5>Pickup points</h5>
                        <p>Choose the pick-up point and the date of receipt of <br/>the order
                            that is most convenient for you</p>
                    </div>
                    <div className={"sAPInfoCard"}>
                        <h5>Pickup points</h5>
                        <p>Choose the pick-up point and the date of receipt of <br/>the order
                            that is most convenient for you</p>
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
        </>
    );
};
export default ShippingAndPayment;