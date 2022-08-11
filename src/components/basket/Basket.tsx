import React from 'react';
import './Basket.css'
const Basket = () => {
    return (
        <>
            <div className="basket">
                <div>
                    <h3>Basket/1th.</h3>
                    <h5>Fast Delivery</h5>
                </div>
                <div className="card horizontal ">
                    <div>
                        <img src="./basket_img/soam.png"/>
                    </div>
                        <div className="card-prod">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                            <h5>Woosin R&B Black Food 3.7</h5>
                            <sub>50ml</sub>
                            <div className="discount-card">
                                <div>
                                    <h5 className="price">2300</h5>
                                </div>
                                <sub className="discount">Discount 1000</sub>
                                <div>
                                    <h5>1300</h5>
                                </div>
                            </div>
                        </div>

                    <div className="plus-minus">
                        <div className="minus">
                        <img src="./basket_img/minus.png" alt="" />
                        </div>
                        <span className="count">0</span>
                        <div className="plus">
                            <img src="./basket_img/plus.png" alt="" />
                        </div>
                        <div className="mini-close">
                            <img src="./basket_img/mini-close.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="card horizontal ">
                    <div>
                        <img src="./basket_img/crem.png"/>
                    </div>
                    <div className="card-prod">
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                        <h5>R&B Henna Spa Therapy Magic Straight Cream</h5>
                        <sub>50ml</sub>
                        <div className="discount-card">
                       <div>
                           <h5 className="price">2300</h5>
                       </div>
                            <sub className="discount">Discount 1000</sub>
                            <div>
                                <h5>1300</h5>
                            </div>
                        </div>
                    </div>

                    <div className="plus-minus">
                        <div className="minus">
                            <img src="./basket_img/minus.png" alt="" />
                        </div>
                        <span className="count">0</span>
                        <div className="plus">
                            <img src="./basket_img/plus.png" alt="" />
                        </div>
                        <div className="mini-close">
                            <img src="./basket_img/mini-close.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="card horizontal ">

                    <div className="payment">
                        <div className="avialable">
                            <span>Available bonuses:</span>
                            <span>1578</span>
                        </div>
                        <div className="style-input">
                            <input  type="text"  placeholder="Enter amount"/>
                        </div>
                        <div className="style-input">
                            <input  type="text" placeholder="Promo code"/>
                        </div>
                        <div className="to-pay">
                        <div>
                            <sub>Discount</sub>
                            <h5 className="discount-pay">-2000</h5>
                        </div>
                        <div>
                            <sub>To pay</sub>
                            <h5>2600</h5>
                        </div>
                        </div>
                    </div>

                </div>
                <div>
                    <button className="btn-order">Оформить заказ</button>
                </div>
                </div>


        </>
    );
};

export default Basket;
