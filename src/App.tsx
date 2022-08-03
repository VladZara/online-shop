import React from 'react';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FirstBlock from "./components/first_block/FirstBlock";


function App() {
  return (
    <>
      <Header/>
        <Navbar/>
      <FirstBlock/>
        <Footer/>
    </>
  );
}

export default App;
