import React, { Component } from "react";
import "./projects.css";

export default class projectsList extends Component {
  render() {
    return (
      <ul className="projects-list">
        <li>
          <img
            className="project-img"
            src={this.props.img}
            alt={this.props.imgTitle}
          />
          <p>{this.props.projectName}</p>
        </li>
      </ul>
    );
  }
}
