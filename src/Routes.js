import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import ThreadForm from "./pages/ThreadForm";
import MobileNav from "./components/MobileNav";

function Routes() {
  return (
    <BrowserRouter>
      <MobileNav />
      <Header />
      <Nav />
      <Tab />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tools" component={Tools} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/info" component={Info} />
        <Route path="/web" component={Web} />
        <Route path="/code" component={Code} />
        <Route path="/hack" component={Hack} />
        <Route path="/gfx" component={Gfx} />
        <Route path="/create-thread" component={ThreadForm} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
