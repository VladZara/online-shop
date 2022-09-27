import axios from "axios";
import {useState} from "react";
import React, {useEffect} from 'react';

const AxiosConect = () => {
    let [productsData,setProductsData]=useState([])
    useEffect(() => {
            axios.get('http://localhost:3002/api/products')
                .then(res => {
                    setProductsData(res.data.data)
                    console.log(res.data.data)
                })
                .catch((ereor:any) =>{
                    console.log(ereor)
                })
        }
        ,[])
    return (
        <div>
        </div>
    );
};

export default AxiosConect;