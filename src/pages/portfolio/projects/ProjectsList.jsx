import React, { Component } from "react";
import "./projects.css";

export default class projectsList extends Component {
  render() {
    return (
      <>
        <li className="projects-list">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={this.props.link}
            className="project"
          >
            <img
              className="project-img"
              src={this.props.img}
              alt={this.props.imgTitle}
            />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={this.props.link}
            className="project"
          >
            <p className="project-txt">{this.props.projectName}</p>
          </a>
        </li>
      </>
    );
  }
}
