import "./products.css";
import QuantityPicker from "./quantitypicker";
import { useEffect } from "react";

function Product(props){

    useEffect(function(){
        console.log("Hello im a product");
    
    
    },[]);

    return(
        <div className="product">
            <img src={"/images/"+props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>
            <QuantityPicker></QuantityPicker>
            
        </div>
    );
}

export default Product;