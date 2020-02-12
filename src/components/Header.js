import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <div className="page-logo">
          <Link to="/">
            <img src="images/Logo.png" alt="Logo" />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
