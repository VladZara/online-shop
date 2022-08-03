import React from 'react';
import './Header.css'
const Header = () => {
    // @ts-ignore

    return (
        <>
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"/>
                <li><a href="#!">three</a></li>
            </ul>
            <nav className="header-wrapper">
                <div >
                    <ul className="left">
                        <div className='city-header'>
                        <li>
                            <a  className="dropdown-trigger header-text" href="#!" data-target="dropdown1">Saint Petersburg
                            <i className="material-icons right header-text">arrow_drop_down</i>
                        </a>
                        </li>
                            <div className='call-header'>
                            <li>
                                <a className="header-text" href="tel:84952592500">8 495 259 25 00</a>
                            </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>

        </>
    );
};

export default Header;
