import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div >
                            <img src="./social/logo.png" alt=""/>
                            <p className="text-lighten-4">8 495 259 25 00
                                Sale@kkshop.ru</p>
                        </div>
                        <div className='position-catalog'>
                            <h5>Catalog</h5>
                            <ul>
                                <li><a className="black-text text-lighten-3" href="#!">Сleansing</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Peels and scrubs
                                    Tonics</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Creams
                                    concentrates</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Concentrates with enzymes</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Serums</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Essences</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Emulsions and gels</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Face masks
                                    pearl line</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Body care</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Hair care</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Sets and accessories</a></li>
                            </ul>
                        </div>
                        <div className='position-container'>
                            <h5>Information</h5>
                            <ul>
                                <li><a className="black-text text-lighten-3" href="#!">Club of cosmetologists</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Certificates</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Shipping and payment</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Confidentiality</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Contacts</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Blog</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Return</a></li>
                                <div className='pay'>
                                    <img src="./pay_cards/mir.png" alt=""/>
                                    <img src="./pay_cards/googlePay.png" alt=""/>
                                    <img src="./pay_cards/visa.png" alt=""/>
                                    <img src="./pay_cards/webmoney.png" alt=""/>
                                    <img src="./pay_cards/yandex.png" alt=""/>
                                    <img src="./pay_cards/mastercard.png" alt=""/>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <div className='social-position'>
                            <h5>Social media</h5>
                            <ul className='social'>
                                <div className='telegram'>
                                <img src="./social/Vector.png" alt="telega"/>
                                </div>
                                <div className='fk'>
                                    <img src="./social/fk.png" alt="telega"/>
                                </div>
                                <div className='ok'>
                                    <img src="./social/ok.png" alt="telega"/>
                                </div>
                                <div className='whats'>
                                    <img src="./social/whats.png" alt="telega"/>
                                </div>
                                <div className='inst'>
                                    <img src="./social/inst.png" alt="telega"/>
                                </div>
                                <div className='vibe'>
                                    <img src="./social/vibe.png" alt="telega"/>
                                </div>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container font-end">
                        <span>LLC</span>
                        <span>MSRN 1167746492704</span>
                        <span>KK Shop © Moscow 2021 All rules reserved.</span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
