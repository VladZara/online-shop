import React from 'react';
import './SlideCard.css'
import SaleContent from "./SaleContent";

const SaleCard = () => {
    return (
        <>
            <div className="product-sale">
                <span>Product Sale</span>
                <div className='arows'>
                    <img src="./arow_img/arow-left.png" alt=""/>
                    <img src="./arow_img/arow-right.png" alt=""/>
                </div>
            </div>
            <div className='container-content'>
                <SaleContent url='./product/black-food.png' title='R&B Black Food 3.7' description='Black sea food'/>
                <SaleContent  url='./product/black-food.png' title='R&B Black Food 3.7' description='Black sea food'/>
                <SaleContent  url='./product/black-food.png' title='R&B Black Food 3.7' description='Black sea food'/>
            </div>
        </>
    );
};

export default SaleCard;
