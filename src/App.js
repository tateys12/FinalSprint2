import React, {useState, useEffect}  from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import SignIn from "./pages/SignIn";
import Product from "./pages/shop/product";
import { PRODUCTS } from "./products";


function App() {

  const [cartItems, setCartItems] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />     
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} cartItems={cartItems}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
