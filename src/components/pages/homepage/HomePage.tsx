import React from 'react';
import Header from "../../header/Header";
import Navbar from "../../navbar/Navbar";
import FirstBlock from "./first_block/FirstBlock";
import DescriptionBlock from "./descriptionBlock/DescriptionBlock";
import ProductsBlock from "./products-block/Products-block";
import SaleCard from "./promotional_blocks/SaleCard";
import ProductsRecommendedBlock from "./products-block-recommended/Products-recommended-block";
import SubscribeBlock from "./subscribeBlock/SubscribeBlock";
import Footer from "../../footer/Footer";
const HomePage = () => {
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
};

export default HomePage;
