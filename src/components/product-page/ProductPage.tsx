import React from "react";
import "./ProductPage.css"
import DescriptionsProductPage from "./descriptionsProductPage/DescriptionsProductPage";

import ProductsRecommendedBlock from "../products-block-recommended/Products-recommended-block";
import ProductsBlock from "../products-block/Products-block";


const ProductPage = () => {
    return (
        <>
            <div>
                <h6 className={"yourLocation"}>Home / Hair care / Balm conditioners</h6>
                <div className={"productPageInfo"}>

                    <div className={"imgProdPage"}>
                        <img src="./img/img_2.png" alt=""/>
                    </div>

                    <div className={"titlesProdPage"}>
                        <h6>Refreshing cooling face tonic</h6>
                        <div>
                            <h3><span className={"pinkText"}>SKINDOM</span> LUXURY CELL</h3>
                            <h3>PEPRIDE DEEP CLEANSING OIL</h3>
                        </div>
                        <div>
                            <p className={"article"}>Article: 19000000618</p>

                            <div className={"volumeProdPage"}>
                                <div className={"squareProdPage"}>1500</div>
                                <h5>volume / ml</h5>
                            </div>
                        </div>
                        <div className={"priceProdPage"}>

                            <div>
                                <h5>30.01$</h5>
                                <p className={"pinkText"}>With 44% discount</p>
                            </div>
                            <div className={"line"}></div>
                            <div className={"withoutDiscount"}>

                                <h5 >30.00$</h5>
                                <p>Without discount</p>
                            </div>

                        </div>

                        <div>
                            <div className={"btnsProdPage"}>
                                <button className={"btnAddBasket"}>Add to Basket</button>
                                <img src="./img/icons8-heart-48.png" alt=""/>
                                <img src="./img/icons8-balance-scale-left-64 (1).png" alt=""/>
                            </div>

                            <p>Availability in stores</p>

                        </div>

                    </div>

                </div>

                <div className={"allGuarantee"}>
                    <div className={"guarantee"}>
                        <img src="./img/img_3.png" alt=""/>
                        <div>
                            <p>Free</p>
                            <p>delivery from 15.00 $</p>
                        </div>

                    </div>

                    <div className={"guarantee"}>
                        <img src="./img/img_4.png" alt=""/>
                        <div>
                            <p>Delivery throughout </p>
                            <p>territory of the USA</p>
                        </div>

                    </div>

                    <div className={"guarantee"}>
                        <img src="./img/img_5.png" alt=""/>
                        <div>
                            <p>Quality assurance</p>
                            <p>products</p>
                        </div>

                    </div>

                </div>
<DescriptionsProductPage/>
<ProductsBlock/>
                <ProductsRecommendedBlock/>
            </div>
        </>)
}
export default ProductPage