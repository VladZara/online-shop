import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import BlogPage from "./components/blog-page/BlogPage";
import ProductPage from "./components/product-page/ProductPage";
import Delivery from "./components/delivery/Delivery";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product-page" element={<ProductPage/>}/>
                <Route path="/blog-page" element={<BlogPage/>}/>
                <Route path="/delivery" element={<Delivery/>}/>
            </Routes>
        </>
    );
};

export default App;
