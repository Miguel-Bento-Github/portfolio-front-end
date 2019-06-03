import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import NavbarHome from "./components/NavbarHome";
import Index from "./pages/index/Index";
import Portfolio from "./pages/portfolio/Portfolio";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/contact/Contact";

class App extends Component {
  render() {
    return (
      <>
        <NavbarHome />
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </>
    );
  }
}
export default withRouter(App);
