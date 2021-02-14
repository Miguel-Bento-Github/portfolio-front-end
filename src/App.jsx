import React, { useEffect } from "react";
import "./app.scss";
import { withRouter } from "react-router-dom";
import NavbarHome from "./components/NavbarHome";

import Axios from "axios";
import Routes from "./router/Routes";

function App() {
  useEffect(() => {
    try {
      (async () => {
        const { status } = await Axios("https://mr-monkey.herokuapp.com");
        console.warn(status !== 200 ? "Connected to DB" : new Error("Could not connect to DB"));
      })();
    } catch (error) {
      throw new Error("Cannot establish connection with the database.");
    }
  });

  return (
    <>
      <NavbarHome />
      <Routes />
    </>
  );
}
export default withRouter(App);
