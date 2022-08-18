import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from "./components/navbar/Navbar";
import ProductsBlock from "./components/pages/homepage/products-block/Products-block";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
);


