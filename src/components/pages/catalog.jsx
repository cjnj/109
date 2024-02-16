import "./catalog.css";
import Product from "../products";
import { useEffect, useState } from "react";
import DataService from "../../services/dataservice";

function Catalog(){
    const [productsState,setProducts] = useState ([]);
    const [status,setStatus] = useState('blank');

    useEffect(function(){
        console.log("component is loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let products = service.getProducts();
        setProducts(products);
        setStatus('Ready');
        console.log(products);
    }

    return(
        <div className="catalog">
        <h1>Look at my awsome{productsState.length} products!</h1>
        <h5>Page status: {status}</h5>
        {productsState.map((productArrow) => (
            <Product data={productArrow}></Product>
        ))}
    
        </div>
    );
}

export default Catalog;