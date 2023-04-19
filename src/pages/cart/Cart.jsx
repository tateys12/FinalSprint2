import React, { useState } from 'react';
import "./cart.css";

const Cart = ({ cartItems, setCartItems }) => {
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    // setCartItems([]);
    setCheckoutComplete(true);
    localStorage.removeItem('cartItems');
    setShowModal(false);
  };

  const cartTotal = cartItems.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart">
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.productImage} alt={item.productName} className="img" />
            <div className="cart-item-description">
              <p>{item.productName}</p>
              <p>${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p><b>Total: ${cartTotal.toFixed(2)}</b></p>
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
      {showModal && (
        <div className="checkout-modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <p>Thank you for your purchase!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
