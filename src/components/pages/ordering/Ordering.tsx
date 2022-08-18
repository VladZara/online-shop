import React, {useState} from "react";
import "./Ordering.css"
import "../profilePage/profilePagePersonalInfo/ProfilePagePersonalInfo.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Ordering = () => {
    const [value, setValue] = useState<any>()
    return (
        <>
            <div className="ordering">
                <div className="header">
                    <div>
                        <img src="./arow_img/vector-left.png" alt=""/>
                    </div>

                    <div>
                        <img src="./basket_img/close.png" alt=""/>
                    </div>
                </div>

                <div className="markup-delivery">
                    <div className="numbers">
                        <div className={"titles"}>
                            <h5>1/3</h5>
                            <h5>Address and delivery</h5>
                            <img src="./img/img_15.png" alt=""/>
                        </div>

                        <div className={"addressAndDelivery"}>

                            <div className={"subsection"}>
                                <h6 className={"paragraph"}>Inhabited<br/> locality</h6>
                                <div>
                                    <h6>Krasnoyarsk <br/>
                                        Krasnoyarsk region</h6>
                                    <button>Change city</button>
                                </div>
                            </div>

                            <div className={"wayDelivery"}>
                                <h6 className={"paragraph"}>Way<br/>
                                    delivery</h6>
                                <div>
                                    <div>
                                        <h6 className={"accentuated"}>Courier</h6>
                                        <h6>Delivery service</h6>
                                        <p>Is free</p>
                                    </div>
                                    <div className={"thinBlock"}>
                                        <h6 className={"accentuated"}>Courier</h6>
                                        <h6>Delivery service</h6>
                                        <p>Is free</p>
                                    </div>
                                </div>
                            </div>

                            <div className={"subsection"}>
                                <h6 className={"paragraph"}>Address</h6>
                                <div>
                                    <div>
                                        <h6>Krasnoyarsk, st. Republic, d. 33A, apt. 64</h6>
                                        <button>Change address</button>
                                    </div>
                                </div>
                            </div>

                            <div className={"subsection"}>
                                <h6 className={"paragraph"}>Your data</h6>
                                <div className={"YourData"}>
                                    <div className={"daysCubes"}>
                                        <div className={"dayCube dayCubeSelected"}>
                                            <h6 className={"accentuated"}>PN</h6>
                                            <h6>19.04</h6>
                                        </div>
                                        <div className={"dayCube"}>
                                            <h6 className={"accentuated"}>PN</h6>
                                            <h6>19.04</h6>
                                        </div>
                                        <div className={"dayCube"}>
                                            <h6 className={"accentuated"}>PN</h6>
                                            <h6>19.04</h6>
                                        </div>
                                        <div className={"dayCube"}>
                                            <h6 className={"accentuated"}>PN</h6>
                                            <h6>19.04</h6>
                                        </div>
                                        <div className={"dayCube"}>
                                            <h6 className={"accentuated"}>PN</h6>
                                            <h6>19.04</h6>
                                        </div>
                                    </div>
                                    <h6>Once your order has been handed over to the courier,<br/>
                                        you will receive an SMS.</h6>
                                    <select>
                                        <option disabled selected>10:00 - 18:00</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>

                        </div>


                        <div className="titles marginTitles">

                            <h5>2/3</h5>
                            <h5>Recipient</h5>
                            <img src="./img/img_15.png" alt=""/>
                        </div>
                        <div className={"personalInfo"}>
                            <div className={"subsection"}>
                                <h6 className={"paragraph"}>Your data</h6>
                                <div className={"inputNames"}>
                                    <input placeholder={"Surname"} type="text"/>
                                    <input placeholder={"Name"} type="text"/>
                                    <input placeholder={"Middle name"} type="text"/>
                                    <p>necessarily, when delivered by post</p>
                                </div>
                            </div>
                            <div className={"subsection subsectionPhone"}>
                                <h6 className={"paragraph"}>Your data</h6>
                                <div className={"inputNames"}>
                                    <div>
                                        <PhoneInput placeholder={"Your phone number"}
                                                    defaultCountry="US"
                                                    value={"+1-523-184-9316"}
                                                    onChange={setValue}
                                        />
                                        <input placeholder={"Contacts"} type="text"/>
                                        <p>Necessary for sending a check</p>
                                    </div>
                                    <div className={"consent"}>
                                        <input type="checkbox"/>
                                        <h6>I consent to the processing of my personal data in accordance
                                            with the <span className={"pinkColor"}>Personal Data Processing
                        Policy</span> and <span className={"pinkColor"}>the User Agreement</span>.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"titles marginTitles"}>
                            <h5>3/3</h5>
                            <h5>Payment</h5>
                            <img src="./img/img_15.png" alt=""/>
                        </div>
                        <div className={"paymentCard"}>
                            <h6 className={"accentuated"}>contactless delivery works for all <br/>
                                orders paid online</h6>
                            <div className={"paymentBlocks"}>
                                <div><img  src="./img/img_16.png" alt=""/></div>
                                <div><img className={"secondImg"} src="./img/img_17.png" alt=""/>
                                </div>
                                <div><p>upon <br/> receipt</p>
                                </div>
                            </div>
                            <h6>Payment to the courier by bank card or cash. <br/><br/>
                            Pay attention! Gift certificates and <br/> bonuses
                                Payments are not accepted.</h6>
                        </div>
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
            </div>


            {/*<div className="footer">*/}
            {/*    <div className="support">*/}
            {/*        <span>Support service</span>*/}
            {/*        <span>8 800 770 70 21</span>*/}
            {/*    </div>*/}
            {/*    <div className="e-mail">*/}
            {/*        <span>E-mail</span>*/}
            {/*        <span>krasnoyarsk@kkshop.ru</span>*/}
            {/*    </div>*/}
            {/*    <div className="cashback"><span>Orders and delivery</span></div>*/}
            {/*    <div className="cashback"><span>Purchase returns</span></div>*/}
            {/*</div>*/}

        </>)
}
export default Ordering
