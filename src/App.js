import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Product from "./pages/shop/product";


function App() {

  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} cartItems={cartItems}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
