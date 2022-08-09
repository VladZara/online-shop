import React from 'react';
import "./Subparagraph.css"
const Subparagraph = ({productsNames}:{productsNames: string[]}) => {
    const fotoProduct=[{
        title:"Callogen",
        url: "./sub_product/callagen.png"
    },{
        title: "Hyaluronic",
        url:"./sub_product/hyaluronic.png"
    }]
    return (
        <>
            <ul className="sub-paragraph">
                {productsNames.map((name:string) => <ul className="sub-paragraph">
                    <li className="sub-name">{name}</li>
                </ul>)}
            </ul>
            </>

    );
};

export default Subparagraph;
