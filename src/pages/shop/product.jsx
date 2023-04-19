import React, { useState, useEffect } from 'react';

const Product = (props) => {
  const { productName, price, productImage } = props.data;
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = () => {
    const updatedCartItems = [...cartItems, { productName, price, productImage }];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
