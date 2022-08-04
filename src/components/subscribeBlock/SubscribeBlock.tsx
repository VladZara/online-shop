import React from 'react';
import "./subscribeBlock.css"
const SubscribeBlock = () => {
    return (
        <div className="subscribe-container">
                <div className="card-image">
                    <img className="subscribe-img" src="./img/subscribe.png"/>
                <div className="subscribe-card">
                    <h1>Subscribe mail</h1>
                    <p>Be the first to know about discounts and special offers!</p>
                    <input type="email" placeholder="email..."/>
                    <button className="subscribe-button">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};

export default SubscribeBlock;
