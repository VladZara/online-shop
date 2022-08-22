import React from 'react';
import "./SubscribeBlock.css"
const SubscribeBlock = () => {
    return (
        <div className="subscribe-container">
                    <img className="subscribe-img" src="./img/subscribe.png"/>
                <div className="subscribe-card">
                    <h1>Subscribe <br/> mail</h1>
                    <p>Be the first to know about discounts and <br/>special offers!</p>
                    <input type="email" placeholder="Enter your email..."/>
                    <button className="subscribe-button">SUBSCRIBE</button>
                </div>
            </div>
    );
};

export default SubscribeBlock;
