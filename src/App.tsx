import React from 'react';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SaleCard from "./components/promotional_blocks/SaleCard";





function App() {
  return (
    <>
      <Header/>
        <Navbar/>
      <SaleCard/>
        <Footer/>
    </>
  );
}

export default App;
