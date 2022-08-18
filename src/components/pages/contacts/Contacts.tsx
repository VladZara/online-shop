import React from 'react';
import Navbar from "../../navbar/Navbar";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import './Contacts.css'

const Contacts = () => {
    const allShops = [{
        title: "Name of shop",
        location: "City, metro-branch, Street, House Number",
        url: "shop-website.com",
        mail: "shop@mail.com",
        number: +74952592500
    }, {
        title: "Name of shop",
        location: "City, metro-branch, Street, House Number",
        url: "shop-website.com",
        mail: "shop@mail.com",
        number: +74952592500
    }, {
        title: "Name of shop",
        location: "City, metro-branch, Street, House Number",
        url: "shop-website.com",
        mail: "shop@mail.com",
        number: +74952592500
    },{
        title: "Name of shop",
        location: "City, metro-branch, Street, House Number",
        url: "shop-website.com",
        mail: "shop@mail.com",
        number: +74952592500
    },{
        title: "Name of shop",
        location: "City, metro-branch, Street, House Number",
        url: "shop-website.com",
        mail: "shop@mail.com",
        number: +74952592500
    },{
        title: "Name of shop",
        location: "City, metro-branch, Street, House Number",
        url: "shop-website.com",
        mail: "shop@mail.com",
        number: +74952592500
    }]
    return (
        <>
            <Header/>
            <Navbar/>
            <h1>Contacts</h1>
            <div className="contacts">
                <div className="cards-shop">
                    {allShops.map(item =>
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text card-of">
                                <span className="card-title">{item.title}</span>
                                <span>{item.location}</span>
                                <a href={item.url}>{item.url}</a>
                                <a href={item.mail}>{item.mail}</a>
                                <a href="#!">{item.number}</a>
                            </div>
                        </div>
                    )}
                </div>
                <div className="shop-on-map">
                    <iframe className="shop-on-map"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-9.228515625000002%2C20.838277806058933%2C64.16015625000001%2C51.645294049305406&amp;layer=mapnik">
                    </iframe>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Contacts;
