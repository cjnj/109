import "./products.css";
import QuantityPicker from "./quantitypicker";
import { useEffect } from "react";

function Product(props) {
  useEffect(function () {
    console.log("Hello im a product");
  }, []);

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=""></img>
      {<h5>{props.data.title}</h5>}

      <div className="prices">
        <label className="total">${props.data.price.toFixed(2)}</label>
        <label className="price">${props.data.price.toFixed(2)}</label>
      </div>

      <div className="controls">
        <QuantityPicker></QuantityPicker>
        <button type="button" class="btn btn-primary btn-sm">
          ADD
        </button>
      </div>
    </div>
  );
}

export default Product;
