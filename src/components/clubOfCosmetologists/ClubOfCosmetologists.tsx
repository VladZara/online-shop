import React, {useState} from "react";
import "./ClubOfCosmetologists.css"


const ClubOfCosmetologists = () => {
        return (
            <div className={"clubOfCosmetologists"}>
                <div>
                    <img src="./img/img_14.png" alt=""/>
                    <div className={"skindom"}>
                        <h6>Refreshing cooling face tonic</h6>
                        <h1>SKINDOM</h1>
                        <button>Go to catalog</button>
                    </div>
                </div>

                <div className={"clubOfCosmetologistsTexts"}>
                    <h1>Club of cosmetologists</h1>
                    <h4>How to join the club of cosmetologists?</h4>
                    <h6>Only professionals in the beauty industry can join the club of cosmetologists. Club <br/> members
                        have access to special prices and professional volumes for products. Joining <br/>the club is
                        at the discretion of the administration.</h6>
                    <h4>For registration of cosmetologists it is necessary</h4>

                    <div>
                        <div>
                            <h6 className={"colorBlack"}>Moscow region, etc.</h6>
                            <h6>Come to our office at the address: Moscow,<br/> st. Shabolovka, 34, building 7</h6>
                            <h6>Present a document on vocational <br/> education and a passport</h6>
                        </div>
                        <div>
                            <h6 className={"colorBlack"}>Regions</h6>
                            <h6>Send scans of the document on <br/>vocational education and passport to <br/>e-mail
                                 <span className={"colorPink"}> sale@kkshop.ru</span></h6>
                        </div>
                    </div>
                    <h4>To join the club of cosmetologists<br/>  after providing the documents you need</h4>
                    <h6>Register on our website.</h6>
                    <h6>After registration, you will be given the opportunity to make purchases in our <br/>online store at
                        special prices with a choice  of professional volumes for products.</h6>
                </div>
            </div>
        )
    }
;

export default ClubOfCosmetologists;
