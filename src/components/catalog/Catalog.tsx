import React, {useState} from 'react';
import './Catalog.css'
import Subparagraph from "../nagitation_from_catalog/Subparagraph";
import ProducTimg from "../nagitation_from_catalog/ProducTimg";

const Catalog = () => {
        const subNames = [{
            title: "All goods",
            subparagraph: [{
                name: "All",
                products: [{
                    title: "All",
                    url: "alt=All",
                    description: "all goods"
                }]
            }]
        }, {
            title: "Cleasing",
            subparagraph: [{
                name: "Cleaning",
                products: [{
                    title: "Cleasing",
                    url: "https://m.media-amazon.com/images/I/71b4FbSpA8L._SX425_.jpg",
                    description: "all goods"
                }]
            }]
        }, {
            title: "Peels and scrubs",
            subparagraph: [{
                name: "Scrubs",
                products: [{
                    title: "Scrab",
                    url: "alt = Scrab",
                    description: "all goods"
                }]
            }]
        }, {
            title: "Tonics",
            subparagraph: [{
                name: "Tonic",
                products: [{
                    title: "Tonic",
                    url: "alt = Tonic",
                    description: "all goods"
                }]
            }]
        }, {
            title: "Creams concentrates",
            subparagraph: [{
                name: "Cream",
                products: [{
                    title: "Crem",
                    url: "alt = Crem",
                    description: "all goods"
                }]
            }]
        }, {
            title: "Serums",
            subparagraph: [{
                name: "Serum",
                products: [{
                    title: "Serum",
                    url: "alt = Sera",
                    description: "all goods"
                }]
            }]
        }, {
            title: "Essences",
            subparagraph: [{
                name: "Essences",
                products: [{
                    title: "Essence",
                    url: "Alt = Essence",
                    description: "all goods"
                }]
            }]
        }, {
            title: "Emulsions and gels",
            subparagraph: [{
                name: "Emulsions",
                products: [{
                    title: "Emulsia",
                    url: "alt: Emulsion",
                    description: "all goods"
                }]
            }]
        }, {
            title: "Face masks",
            subparagraph: [
                {
                    name: "Cream masks",
                    products: [{
                        title: "Crem maska",
                        url: "alt: crem mask",
                        description: "all goods"
                    }]
                },
                {
                    name: "Sheet masks",
                    products: [{
                        title: "Callogen",
                        url: "./sub_product/callagen.png",
                        description:"Collagen Gypsum Pack"
                    }, {
                        title: "Hyaluronic",
                        url: "./sub_product/hyaluronic.png",
                        description: "Hyaluronic Acid Essential Silk Mask"
                    }]
                },
                {
                    name: "Hydrogel masks",
                    products: [{
                        title: "Hydrogel",
                        url: "alt = Hydrogel",
                        description: "all goods"
                    }]
                },
                {
                    name: "Alginate masks",
                    products: [{
                        title: "Alignate",
                        url: "alt Aligante",
                        description: "all goods"
                    }]
                },
                {
                    name: "Plaster masks",
                    products: [{
                        title: "Plaster",
                        url: "alt = Plaster",
                        description: "all goods"
                    }]
                }]
        },
            {
                title: "Pearl line",
                subparagraph: [{
                    name: "Pear line",
                    products: [{
                        title: "Pear",
                        url: "Alt = pear-line",
                        description: "all goods"
                    }]
                }]
            }, {
                title: "Body care",
                subparagraph: [{
                    name:"Body care",
                    products: [{
                        title: "Body",
                        url:"alt = body",
                        description: "all goods"
                    }]
                }]
            }, {
                title: "Hair care",
                subparagraph: [{
                    name:"Hair",
                    products: [{
                        title: "Hair",
                        url:"Alt = hair",
                        description: "all goods"
                    }]
                }]
            }, {
                title: "Sets and accessories",
                subparagraph: [{
                    name: "Sets",
                    products: [
                        {
                            title: "Accessor",
                            url: "Alt = Set",
                            description: "all goods"
                        }]
                }]
            }]
        const [subParagraph, setSubparagraph] = useState(false)
        const handleOpenSubparagraph = (subparagraph: any) => {
            setSubparagraph(true);
            setSelectedProductsNames(subparagraph);
        }
        const [selectedProductsNames, setSelectedProductsNames] = useState<string[]>([]);
        const [selectedPhotos, setSelectedPhotos] = useState([])
        return (
            <>
                <div className="container-menu">
                    <ul className="turn-menu">
                        {subNames.map(item => <li key={item.title}>
                            <div onClick={() => handleOpenSubparagraph(item.subparagraph)} className="dot-menu">
                                <span>{item.title}</span>
                                <img src="./arow_img/trow.png" alt=""/>
                            </div>
                        </li>)}
                    </ul>
                    {subParagraph && <Subparagraph setSelectedPhotos={setSelectedPhotos} productsNames={selectedProductsNames}/>}
                    {subParagraph && selectedPhotos.length && <ProducTimg productPhoto={selectedPhotos}/>}
                </div>
            </>
        );
    };

export default Catalog;
