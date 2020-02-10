import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import Web from "./pages/Web";
import Code from "./pages/Code";
import Hack from "./pages/Hack";
import Gfx from "./pages/Gfx";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Tab from "./components/Tab";
import Footer from "./components/Footer";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Tab />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/tools"}>
          <Tools />
        </Route>
        <Route exact path={"/contact"}>
          <Contact />
        </Route>
        <Route path={"/info"}>
          <Info />
        </Route>
        <Route path={"/web"}>
          <Web />
        </Route>
        <Route path={"/code"}>
          <Code />
        </Route>
        <Route path={"/hack"}>
          <Hack />
        </Route>
        <Route path={"/gfx"}>
          <Gfx />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
