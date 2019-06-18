import React, { Component } from "react";


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
              className="project-img shake"
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
