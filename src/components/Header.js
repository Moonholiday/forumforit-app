import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <Link to={"/"}>
          <img className="page-logo" src="images/Logo.png" alt="Logo" />
        </Link>
      </header>
    </>
  );
}

export default Header;
