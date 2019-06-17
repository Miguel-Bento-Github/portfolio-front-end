import React, { Component } from "react";
import "./portfolio.css";
import { getProjects } from "../../api/projects";
import ProjectsList from "./projects/ProjectsList";

export default class Portfolio extends Component {
  state = {};

  componentDidMount() {
    getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    const { projects } = this.state;
    if (!projects) return null;
    return (
      <main className="main">
        <section className="section portfolio-section slit">
          <h1 className="section-header ">Portfolio</h1>
          <ul className="projects-container">
            {!projects
              ? null
              : projects.map(c => (
                  <ProjectsList
                    key={c._id}
                    link={c.link}
                    img={c.img}
                    imgTitle={c.title}
                    projectName={c.title}
                  />
                ))}
          </ul>
        </section>
      </main>
    );
  }
}
