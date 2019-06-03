import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbarHome.css";
export default class NavbarHome extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar navbar-content navbar-home">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
