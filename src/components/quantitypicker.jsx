import "./quantitypicker.css"
import { useState } from "react";

function QuantityPicker(){
    
const[quantity,setQuantity] = useState (1);
//bikes = 10, this is not what we want to do

//we use the function
//setQuantity(10)

    function decrease(){
        if(quantity===1)return;
        let value = quantity -1;
        setQuantity(value)
        console.log("Decreasing");

    
    }
    
    function increase(){
        let value = quantity +1;
        setQuantity(value)
        console.log("Increasing");
    }
    
    return(
        <div className="quantityPicker">
        <button  className="btn btn-outline-primary btn-sm" disabled = {quantity===1} onClick={decrease}>-</button>
        <label>{quantity}</label>
        <button  className="btn btn-outline-primary btn-sm" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
