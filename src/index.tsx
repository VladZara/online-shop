import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from "./components/navbar/Navbar";
import ProductsBlock from "./components/products-block/Products-block";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
      <Navbar/>
    <App />
      <ProductsBlock />
  </React.StrictMode>
);


