import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/index/Home";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import Skills from "../pages/skills/Skills";
import PageNotFound from "../pages/page-not-found/PageNotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/skills" component={Skills} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
