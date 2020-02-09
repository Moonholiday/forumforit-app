import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Router>
        <div id="page-utility" className="page-utility clearfix">
          <button id="profile">
            <img src="images/profile.png" alt="profile" />
          </button>
          <button id="menu" className="utility-buttons">
            <img src="images/grid.png" alt="menu" />
          </button>
          <button id="login" className="utility-buttons">
            Login
          </button>
          <button id="register" className="utility-buttons">
            Register
          </button>
        </div>
        <header>
          <Link to="/">
            <img className="page-logo" src="images/Logo.png" alt="Logo" />
          </Link>
        </header>
        <div className="page-nav">
          <ul className="navigation">
            <li>
              <Link to="/">
                <img src="images/home.png" />
              </Link>
            </li>
            <li>
              <Link to="/tools">
                <img src="images/tools.png" />
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <img src="images/contact.png" />
              </Link>
            </li>
            <li>
              <Link to="/info">
                <img src="images/info.png" />
              </Link>
            </li>
          </ul>
          <div className="searchBar">
            <input type="text" name="searchBar" placeholder="Search" />
          </div>
        </div>
        <main class="container">
          <div class="tab">
            <button type="button" id="Web">
              <Link to="/code">Code</Link>
            </button>
            <button type="button" id="Gfx">
              <Link to="/gfx">GFX</Link>
            </button>
            <button type="button" id="Code">
              <Link to="/hack">Hack</Link>
            </button>
            <button type="button" id="Hack">
              <Link to="/web">Web</Link>
            </button>
          </div>
        </main>
      </Router>
    </>
  );
}

export default Header;
