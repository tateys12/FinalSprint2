import React, {useState}  from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import SignIn from "./pages/SignIn";


function App() {

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />     
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setcartItems={setCartItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
