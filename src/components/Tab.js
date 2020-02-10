import React from "react";
import { Link } from "react-router-dom";

function Tab() {
  return (
    <>
      <main className="container">
        <div className="tab">
          <button type="button" id="Code">
            <Link to={"/code"}>Code</Link>
          </button>
          <button type="button" id="Gfx">
            <Link to={"/gfx"}>GFX</Link>
          </button>
          <button type="button" id="Hack">
            <Link to={"/hack"}>Hack</Link>
          </button>
          <button type="button" id="Web">
            <Link to={"/web"}>Web</Link>
          </button>
        </div>
      </main>
    </>
  );
}

export default Tab;
