import React from 'react';
import './ProducTimg.css'
const ProducTimg = ({productPhoto}:any) => {
    console.log(productPhoto, "Photo")

    return (
        <>
         <div className="product-photo-markup">
             {productPhoto.map((item:any) =>
             <div className="product-photo" >
                 <img src={item.url} alt="" className="product-style"/>
                 <h5 className="product-info">{item.title}</h5>
                 <sub className="sub-info" >{item.description}</sub>
             </div>)}
         </div>
        </>
    );
};

export default ProducTimg;
