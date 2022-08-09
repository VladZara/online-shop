import React, {useState} from 'react';
import './Catalog.css'
import Subparagraph from "../nagitation_from_catalog/Subparagraph";

const Catalog = () => {
    const subNames = [{
        title: "All goods",
        subparagraph: ["All"]
    },{
        title: "Cleasing",
        subparagraph: ["Cleaning"]
    },{
        title: "Peels and scrubs",
        subparagraph: ["Scrubs"]
    },{
        title:"Tonics",
        subparagraph: ["Tonic"]
    },{
        title:"Creams concentrates",
        subparagraph: ["Cream"]
    },{
        title:"Serums",
        subparagraph: ["Serum"]
    },{
        title:"Essences",
        subparagraph: ["Essences"]
    },{
        title:"Emulsions and gels",
        subparagraph: ["Emulsions"]
    },{
        title:"Face masks",
        subparagraph: ["Cream masks" ,
        "Sheet masks" ,
        "Hydrogel masks" ,
        "Alginate masks",
        "Plaster masks"
        ]
    },{
        title:"Pearl line",
        subparagraph: ["Pear line"]
    },{
        title:"Body care",
        subparagraph: ["Body care"]
    },{
        title:"Hair care",
        subparagraph: ["Hair"]
    },{
        title:"Sets and accessories",
        subparagraph: ["Sets"]
    }]
    const [subParagraph,setSubparagraph] = useState(false)
    const handleOpenSubparagraph = (subparagraph:string[]) =>{
           setSubparagraph(true);
        setSelectedProductsNames(subparagraph);
    }
    const [selectedProductsNames , setSelectedProductsNames] = useState<string[]>([]);
    return (
        <>
            <div className="container-menu" >
                <ul className="turn-menu">
                    {subNames.map(name =>  <li key={name.title}>
                        <div onClick={()=>handleOpenSubparagraph(name.subparagraph)} className="dot-menu">
                            <span>{name.title}</span>
                            <img src="./arow_img/trow.png" alt=""/>
                        </div>
                    </li>)}
                </ul>
                {subParagraph && <Subparagraph productsNames={selectedProductsNames}/>}
            </div>
        </>
    );
};

export default Catalog;
