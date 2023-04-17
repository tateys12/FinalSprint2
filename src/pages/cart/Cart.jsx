import React from "react";
import "./cart.css";
import Product from "../shop/product";
import { PRODUCTS } from "../../products";



const Cart = () => {

  return (
    <div className="cart-products">
      {Product.length === 0 && <span className="empty-cart-text">Your cart is empty</span>}

      {PRODUCTS.map(product =>(
        <div className ="cart-products" key={product.id}>
        <img src={product.Image} alt={product.Name} />
        <div className="product-info">
          <h3>
            {product.Name}
          </h3>
          <span className="product-price">
            {product.price}
          </span>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
