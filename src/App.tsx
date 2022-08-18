import React from 'react';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SaleCard from "./components/promotional_blocks/SaleCard";
import FirstBlock from "./components/first_block/FirstBlock";
import DescriptionBlock from "./components/descriptionBlock/DescriptionBlock";
import ProductsBlock from "./components/products-block/Products-block";
import ProductsRecommendedBlock from "./components/products-block-recommended/Products-recommended-block";
import SubscribeBlock from "./components/subscribeBlock/SubscribeBlock";
import ProductPage from "./components/product-page/ProductPage";
import DescriptionsProductPage from "./components/product-page/descriptionsProductPage/DescriptionsProductPage";
import ProductBlock from "./components/products-block/product-block-content/Product-block";
import ProfilePage from "./components/profilePage/ProfilePage";
import Ordering from "./components/ordering/Ordering";
import Basket from "./components/basket/Basket";
import Delivery from "./components/delivery/Delivery";


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
