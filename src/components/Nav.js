import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
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
      <div className="page-nav">
        <ul className="navigation">
          <li>
            <Link to={"/"}>
              <img src="images/home.png" />
            </Link>
          </li>
          <li>
            <Link to={"/tools"}>
              <img src="images/tools.png" />
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <img src="images/contact.png" />
            </Link>
          </li>
          <li>
            <Link to={"/info"}>
              <img src="images/info.png" />
            </Link>
          </li>
        </ul>
        <div className="searchBar">
          <input type="text" name="searchBar" placeholder="Search" />
        </div>
      </div>
    </>
  );
}

export default Nav;
