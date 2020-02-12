import React from "react";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <>
      <div id="mobile-menu" className="mobile-menu">
        <Link to="/">Home</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/info">Info</Link>
      </div>
      <div id="mobile-nav" className="mobile-nav clearfix">
        <button id="profile">
          <img src="images/profile.png" alt="profile" />
        </button>
        <button id="menu" className="mobile-btns" onclick="displayMenu()">
          <img src="images/menu.png" alt="menu" />
        </button>
        <button id="login" className="mobile-btns">
          Login
        </button>
        <button id="signup" className="mobile-btns">
          Sign Up
        </button>
      </div>
    </>
  );
}

export default MobileNav;
