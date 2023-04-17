import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import SignIn from "../pages/SignIn";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/signin">
          <SignIn />
        </Link>
        <Link to="/home">Home</Link>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;



