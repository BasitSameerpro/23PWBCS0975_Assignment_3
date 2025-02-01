import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div className="nav-right">
          <Link to="/cart" className="nav-link">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;