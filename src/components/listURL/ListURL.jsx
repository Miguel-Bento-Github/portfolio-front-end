import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class List extends Component {
  render() {
    return (
      <li>
        <NavLink to={this.props.to}>{this.props.name}</NavLink>
      </li>
    );
  }
}
