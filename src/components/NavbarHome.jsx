import React, { Component } from "react";
import List from "./listURL/ListURL";
import "./navbarHome.css";

export default class NavbarHome extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar navbar-content navbar-home">
          <List to="/" name="home" />
          <List to="skills" name="skills" />
          <List to="portfolio" name="portfolio" />
          <List to="contact" name="contact" />
        </ul>
      </nav>
    );
  }
}
