import React, { Component } from "react";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route, withRouter } from "react-router-dom";
import NavbarHome from "./components/NavbarHome";
import Index from "./pages/index/Index";
import Portfolio from "./pages/portfolio/Portfolio";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/contact/Contact";

toast.configure({
  autoClose: 2000,
  draggable: false,
  pauseOnFocusLoss: true,
  position: "top-left",
  closeOnClick: true
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarHome />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default withRouter(App);
