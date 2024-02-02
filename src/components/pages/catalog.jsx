import "./catalog.css";
import Product from "../products";
import { useEffect, useState } from "react";
import DataService from "../../services/dataservice";

function Catalog(){

    const [productsState,setProducts] = useState ([]);

    useEffect(function(){
        console.log("component is loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let products = service.getProducts();
        setProducts(products);
        console.log(products);
    }

    return(
        <div>
        <h1>Look at my awsome{productsState.length} products!</h1>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        
        </div>
    );
}

export default Catalog;