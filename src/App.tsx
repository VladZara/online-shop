import React from 'react';
import { Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/home-page/HomePage";
import BlogPage from "./components/pages/blog-page/BlogPage";
import ProductPage from "./components/pages/product-page/ProductPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/product-page" element={<ProductPage />}/>
                <Route path="/blog-page" element={<BlogPage />}/>
            </Routes>
        </>
    );
};

export default App;
