import React, { Component } from "react";
import "./portfolio.scss";
import { getProjects } from "../../api/projects";
import ProjectsList from "./projects/ProjectsList";
import LoadingScreen from "./LoadingScreen";

export default class Portfolio extends Component {
  state = {};

  componentDidMount() {
    getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    const { projects } = this.state;

    if (!projects) return <LoadingScreen />;
    // TODO delete backend.
    // eslint-disable-next-line
    return (
      <main className="main blur">
        <section className="section secondBg">
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
