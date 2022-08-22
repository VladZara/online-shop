import React from 'react';
import './Discount.css'

const Discount = () => {
    return (
        <>
            <div className="discount">
                <div className="hh-discount">
                    <h3>Buy with discount</h3>
                    <div >
                    <span>Sign up to get a discount on a bonus card, start accumulating bonuses and pay for purchases with gift certificates.</span>
                    </div>
                </div>
                <div className="link">
                    <button className="btn-discount">Sign in/Sign up</button>
                    <a href="!#!">Continue as guest</a>
                </div>
            </div>
        </>
    );
};

export default Discount;
