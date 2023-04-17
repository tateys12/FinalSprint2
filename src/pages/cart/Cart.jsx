import React from "react";
import "./cart.css";
import Product from "../shop/product";
import { PRODUCTS } from "../../products";



const Cart = (props) => {

  const {cartItems} = props;
  return (
    <div className="cart-products">
      <h2>Cart Items</h2>
      <div>
        {cartItems && cartItems.length === 0 && <div>Cart is Empty</div>}
      </div>
    </div>
);
}
  

export default Cart;
