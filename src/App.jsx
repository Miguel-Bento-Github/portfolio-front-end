import React from "react";
import "./app.scss";
import { Switch, Route, withRouter } from "react-router-dom";
import NavbarHome from "./components/NavbarHome";
import Index from "./pages/index/Index";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Skills from "./pages/skills/Skills";
import FourOhFour from "./pages/fourOhfour/FourOhFour";

function App() {
  return (
    <React.Fragment>
      <NavbarHome />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/projects" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/skills" component={Skills} />
        <Route component={FourOhFour} />
      </Switch>
    </React.Fragment>
  );
}
export default withRouter(App);
