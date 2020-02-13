import React from "react";
import { Link } from "react-router-dom";

function MobileNav() {
  function openNav() {
    document.getElementById("mobile-menu").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mobile-menu").style.width = "0";
  }

  return (
    <>
      <div id="mobile-menu" className="mobile-menu">
        <button className="closebtn" onClick={closeNav}>
          &times;
        </button>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/tools">Tools</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/info">Info</Link>
        </div>
      </div>
      <div id="mobile-nav" className="mobile-nav clearfix">
        <button id="profile">
          <img src="images/profile.png" alt="profile" />
        </button>
        <button id="menu" className="mobile-btns" onClick={openNav}>
          <img src="images/menu.png" alt="menu" />
        </button>
        <button id="login" className="mobile-btns">
          <Link to="/login">Login</Link>
        </button>
        <button id="signup" className="mobile-btns">
          <Link to="/sign-up">Sign Up</Link>
        </button>
      </div>
    </>
  );
}

export default MobileNav;
