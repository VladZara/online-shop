import React from 'react';
import './Delivery.css'

const Delivery = () => {
    return (
        <div className="delivery">
            <div className="header">
                <div>
                    <img src="./arow_img/vector-left.png" alt=""/>
                </div>
                <div>
                    <img src="./social/logo.png" alt=""/>
                </div>
                <div>
                    <img src="./basket_img/close.png" alt=""/>
                </div>
            </div>
            <div className="markup-delivery">
                <div className="numbers">
                    <div>
                        <h5>1/3</h5>
                    </div>
                    <div>
                        <h5>2/3</h5>
                    </div>
                    <div>
                        <h5>3/3</h5>
                    </div>
                </div>
                <div className="delivery-mark">
                    <select className="browser-default">
                        <option disabled selected>Address and Delivery</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    <select className="browser-default">
                        <option value="" disabled selected>Recipient</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    <select className="browser-default">
                        <option disabled selected>Payment</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    <button className="btn-check">Checkout</button>
                </div>
                <div className="order">
                    <div className="change">
                        <h5>Your order/1th.</h5>
                        <span>Change</span>
                    </div>
                    <div className="soam">
                        <img src="./basket_img/soam.png" alt=""/>
                    </div>
                    <div className="amount">
                        <div>
                            <span>Available bonuses:</span>
                            <span>1578</span>
                        </div>
                        <div className="style-input">
                            <input type="text" placeholder="Enter amount"/>
                        </div>
                        <div className="style-input">
                            <input type="text" placeholder="Promo code"/>
                        </div>
                    </div>
                    <div className="choose">
                        <div className="steps">
                            <span>Summa</span>
                            <span>2600</span>
                        </div>
                    </div>
                    <div className="choose">
                        <div className="steps">
                            <span>Order</span>
                            <span>No choose</span>
                        </div>
                    </div>
                    <div className="hashR"></div>
                    <div className="total">
                        <span>Total</span>
                        <h5>2600</h5>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="support">
                    <span>Support service</span>
                    <span>8 800 770 70 21</span>
                </div>
                <div className="e-mail">
                    <span>E-mail</span>
                    <span>krasnoyarsk@kkshop.ru</span>
                </div>
                <div className="cashback"><span>Orders and delivery</span></div>
                <div className="cashback"><span>Purchase returns</span></div>
            </div>
        </div>
    );
};

export default Delivery;
