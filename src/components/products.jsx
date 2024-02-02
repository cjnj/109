import "./products.css";
import QuantityPicker from "./quantitypicker";
import { useEffect } from "react";

function Product(){

    useEffect(function(){
        console.log("Hello im a product");
    
    
    },[]);

    return(
        <div className="product">
            <img src="https://picsum.photos/200/300"alt=""></img>
            <h5>Hello im a Product</h5>
            <QuantityPicker></QuantityPicker>
            
        </div>
    );
}

export default Product;