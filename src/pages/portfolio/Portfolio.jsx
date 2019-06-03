import React, { Component } from "react";
import "./portfolio.css";
import { getProjects } from "../../api/projects";
//eslint-disable-next-line
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
        <section className="section portfolio-section">
          <h1>Portfolio</h1>
          <div className="projects-container" />
          {!projects
            ? null
            : projects.map(c => (
                <ProjectsList
                  key={c.img}
                  img={c.img}
                  imgTitle={c.title}
                  projectName={c.title}
                />
              ))}
        </section>
      </main>
    );
  }
}
