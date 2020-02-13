import React, { Component } from "react";
import Code from "./Code";
import Gfx from "./Gfx";
import Hack from "./Hack";
import Web from "./Web";

class Home extends Component {
  render() {
    let randomPage = Math.floor(Math.random() * 4);
    if (randomPage === 1) {
      return (
        <>
          <Code />
        </>
      );
    } else if (randomPage === 2) {
      return (
        <>
          <Gfx />
        </>
      );
    } else if (randomPage === 3) {
      return (
        <>
          <Hack />
        </>
      );
    } else {
      return (
        <>
          <Web />
        </>
      );
    }
  }
}

export default Home;
