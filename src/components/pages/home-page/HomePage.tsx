import React from 'react';
import Header from "../../header/Header";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import SaleCard from "./promotional_blocks/SaleCard";
import FirstBlock from "./first_block/FirstBlock";
import DescriptionBlock from "./descriptionBlock/DescriptionBlock";
import ProductsBlock from "./products-block/Products-block";
import ProductsRecommendedBlock from "./products-block-recommended/Products-recommended-block";
import SubscribeBlock from "./subscribeBlock/SubscribeBlock";
import ProductPage from "../product-page/ProductPage";


function HomePage() {
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
        {/*<ProductPage />*/}
        <Footer/>
    </>
  );
}

export default HomePage;
