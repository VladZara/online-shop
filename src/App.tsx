import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import BlogPage from "./components/blog-page/BlogPage";
import ProductPage from "./components/product-page/ProductPage";
import DescriptionsProductPage from "./components/product-page/descriptionsProductPage/DescriptionsProductPage";
import ProductBlock from "./components/products-block/product-block-content/Product-block";
import ProfilePage from "./components/profilePage/ProfilePage";
import Ordering from "./components/ordering/Ordering";
import Basket from "./components/basket/Basket";
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

function App() {
  return (
    <>
      <Header/>
        <Navbar/>
       <FirstBlock/>
        <DescriptionBlock/>
        <ProductsBlock/>
        <SaleCard/>
        <ProductsRecommendedBlock/>
        <SubscribeBlock/>
        <Footer/>
    </>
  );
}


export default App;
