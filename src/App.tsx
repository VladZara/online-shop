import React from 'react';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FirstBlock from "./components/first_block/FirstBlock";
import DescriptionBlock from "./components/descriptionBlock/DescriptionBlock";


function App() {
  return (
    <>
      <Header/>
        <Navbar/>
      <FirstBlock/>
        <DescriptionBlock/>
        <Footer/>
    </>
  );
}

export default App;
