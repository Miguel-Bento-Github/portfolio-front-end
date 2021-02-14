import React, { useEffect } from "react";
import "./app.scss";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import NavbarHome from "./components/NavbarHome";
import Routes from "./router/Routes";

function App() {
  useEffect(() => {
    try {
      (async () => {
        await Axios("https://mr-monkey.herokuapp.com");
      })();
    } catch (e) {}
  });

  return (
    <>
      <NavbarHome />
      <Routes />
    </>
  );
}
export default withRouter(App);
