import React from "react";
import "./DescriptionsProductPage.css"
import "../product-page/ProductPage.css"


const DescriptionsProductPage = () => {
    return (
        <>
            <div className={"allDescriptionProd"}>

                <div className={"choiceBtn"}>
                    <h6>Opisanie</h6>
                    <h6>Premenenie</h6>
                    <h6> Brend</h6>
                </div>

                <div className={"witchLine"}>
                    <div className={"selectedLine"}/>
                </div>

                <div className="">
                    <h5>Skindom Luxury cell pepride Deep Cleansing oil</h5>
                    <p className={"article"}>Article: 19000000618</p>
                </div>

                <h6 className={"infoDsProdPage"}>
                    The balm-conditioner contains beneficial proteins and minerals that strengthen all layers of the
                    hair structure from roots to ends, keeping them alive and shiny even after chemical treatment.
                    Restores the pH balance of the hair and scalp, protects the hair structure from damage. Extracts of
                    three black seeds: rice, beans and sesame in the composition - are aimed at intensive nutrition and
                    hair restoration.<br/>
                    Extracts of seven black fruits - mulberry, Count, Acanthopanax, plum, blueberry and black olive -
                    moisturize hair, making it smooth, healthy and strong.<br/>
                    Suitable for all hair types.
                </h6>

                <h5>Detailed specifications</h5>

                <div className={"rowOfText"}>
                    <h6 className={"colorGray"}>Type of care</h6>
                    <h6>For home care, For cosmetologists</h6>
                </div>

                <div className={"rowOfText"}>
                    <h6 className={"colorGray"}>Type of care</h6>
                    <h6>Blesk, Restoration, Nutrition, Dandruff<br/>
                        Split ends, Moisturizing</h6>
                </div>

                <div className={"rowOfText"}>
                    <h6 className={"colorGray"}>Weight</h6>
                    <h6>1590 g</h6>
                </div>

                <div className={"rowOfText"}>
                    <h6 className={"colorGray"}>Volume</h6>
                    <h6>1500 ml</h6>
                </div>

                <div className={"rowOfText"}>
                    <h6 className={"colorGray"}>Country of manufacture</h6>
                    <h6>For home care, For cosmetologists</h6>
                </div>

                <div className={"rowOfText"}>
                    <h6 className={"colorGray"}>Hair type</h6>
                    <h6>Oily scalp, unruly hair, normal hair <br/>
                        dyed hair, dry and damaged hair</h6>
                </div>


            </div>
        </>)
}
export default DescriptionsProductPage


