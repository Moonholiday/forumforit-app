import React from "react";

function MobileNav() {
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
    </>
  );
}

export default MobileNav;
