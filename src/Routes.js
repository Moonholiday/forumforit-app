import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import Web from "./pages/Web";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Routes() {
  return (
    <>
      <Header />
      <Footer />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/tools">
            <Tools />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/Info">
            <Info />
          </Route>
          <Route path="/web">
            <Web />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
