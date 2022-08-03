import React from 'react';
import './Header.css'
const Header = () => {
    // @ts-ignore

    return (
        <>
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper">
                    <ul className="left hide-on-med-and-down">
                        <div className='gorod'>
                        <li>
                            <a className="dropdown-trigger" href="#!" data-target="dropdown1">Saint Petersburg
                            <i className="material-icons right">arrow_drop_down</i>
                        </a>
                        </li>
                            <div className='zvonok'>
                            <li>
                                <a href="tel:84952592500">8 495 259 25 00</a>
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
