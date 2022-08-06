import React from 'react';
import "./blogPage.css"
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const BlogPage = () => {
    const cards = [{
        image: "blog-1.png",
        title: "The expert called a flower that can surprise any woman",
        text: "Protea is the flower that can cause tenderness, delight and admiration in any woman. This point of view was expressed by experts interviewed.",
        date: "25",
        month: "September"
    },{
        image: "blog-2.png",
        title: "10 sheet mask rules",
        text: "Protea is the flower that can cause tenderness, delight and admiration in any woman. This point of view was expressed by experts interviewed.",
        date: "01",
        month: "September"
    },{
        image: "blog-3.png",
        title: "The expert called a flower that can surprise any woman",
        text: "Protea is the flower that can cause tenderness, delight and admiration in any woman. This point of view was expressed by experts interviewed.",
        date: "10",
        month: "September"
    },{
        image: "blog-4.png",
        title: "The expert called a flower that can surprise any woman",
        text: "Protea is the flower that can cause tenderness, delight and admiration in any woman. This point of view was expressed by experts interviewed.",
        date: "15",
        month: "September"
    },{
        image: "blog-5.png",
        title: "The expert called a flower that can surprise any woman",
        text: "Protea is the flower that can cause tenderness, delight and admiration in any woman. This point of view was expressed by experts interviewed.",
        date: "31",
        month: "January"
    },{
        image: "blog-6.png",
        title: "The expert called a flower that can surprise any woman",
        text: "Protea is the flower that can cause tenderness, delight and admiration in any woman. This point of view was expressed by experts interviewed.",
        date: "17",
        month: "April"
    },{
        image: "blog-7.png",
        title: "The expert called a flower that can surprise any woman",
        text: "Protea is the flower that can cause tenderness, delight and admiration in any woman. This point of view was expressed by experts interviewed.",
        date: "25",
        month: "august"
    },{
        image: "blog-8.png",
        title: "The expert called a flower that can surprise any woman",
        text: "Protea is the flower that can cause tenderness, delight and admiration in any woman. This point of view was expressed by experts interviewed.",
        date: "04",
        month: "June"
    },{
        image: "blog-9.png",
        title: "The expert called a flower that can surprise any woman",
        text: "Protea is the flower that can cause tenderness, delight and admiration in any woman. This point of view was expressed by experts interviewed.",
        date: "10",
        month: "Marth"
    }]

    return (
        <>
            <Header/>
            <Navbar/>
            <div className="blog-cards">
                {cards.map(card => {
                    return (  <div className="card medium">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={`./img-blog-page/${card.image}`}/>
                            <div className="blog-calendar"><span className="calendar-text">{card.date}<br/>{card.month}</span></div>
                        </div>
                        <div className="card-content"><span>
                          <a href="#">{card.title}</a></span>
                            <p>{card.text}</p>
                        </div>

                    </div>)
                })}
                </div>
            <Footer/>
        </>
    );
};

export default BlogPage;
