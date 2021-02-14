import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/index/Home";
import Contact from "../pages/contact/Contact";
import PageNotFound from "../pages/page-not-found/PageNotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
