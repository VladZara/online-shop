import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "./components/pages/homepage/HomePage";
import Basket from "./components/pages/basket/Basket";
import Contacts from "./components/pages/contacts/Contacts";
import Delivery from "./components/pages/delivery/Delivery";
import Ordering from "./components/pages/ordering/Ordering";
import ProductPage from "./components/pages/product-page/ProductPage";
import ProfilePage from "./components/pages/profilePage/ProfilePage";
import ShippingAndPayment from "./components/pages/shippingAndPayment/ShippingAndPayment";

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
        <Route path="/ordering" element={<Ordering/>}/>
        <Route path="/product-page" element={<ProductPage/>}/>
        <Route path="/profilePage" element={<ProfilePage/>}/>
        <Route path="/shippingAndPayment" element={<ShippingAndPayment/>}/>
    </Routes>

  );
}

export default App;
