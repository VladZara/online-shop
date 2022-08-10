import React, {useState} from 'react';
import "./Subparagraph.css"
import ProducTimg from "./ProducTimg";
const Subparagraph = ({productsNames, setSelectedPhotos}:{productsNames: string[], setSelectedPhotos: any}) => {
    console.log(productsNames, "Parag")
    const productsClick =(products:any)=>{
        setSelectedPhotos(products)
    }
    return (
        <>
            <ul className="sub-paragraph">
                {productsNames.map(({name, products}:any) => <ul className="sub-paragraph">
                    <li className="sub-name" onClick={()=>productsClick(products)}>{name}</li>
                </ul>)}
            </ul>
            </>

    );
};

export default Subparagraph;
