import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="page-nav">
        <ul className="navigation">
          <li>
            <Link to={"/"}>
              <img src="images/home.png" alt="home" />
            </Link>
          </li>
          <li>
            <Link to={"/tools"}>
              <img src="images/tools.png" alt="tools" />
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <img src="images/contact.png" alt="contact" />
            </Link>
          </li>
          <li>
            <Link to={"/info"}>
              <img src="images/info.png" alt="info" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="credit-nav">
        <span>
          <Link to="/login">Login</Link>
        </span>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </>
  );
}

export default Nav;
