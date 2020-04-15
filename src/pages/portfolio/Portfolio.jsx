import React, { useEffect, useState } from 'react';
import './portfolio.scss';
import ProjectsList from './projects/ProjectsList';
import projects from './projects/projects.json';
import useDocumentTitle from '../../hooks/useDocumentTitle';
require('smoothscroll-polyfill').polyfill();

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);

  const Projects = projects.map((project, index) => {
    const {
      _id: { $oid: id },
      link,
      img,
      title,
      description,
    } = project;

    return (
      <ProjectsList
        key={id}
        id={index}
        link={link}
        img={img}
        title={title}
        description={description}
      />
    );
  });

  useDocumentTitle('Projects');

  useEffect(() => {
    const element = document.getElementById(activeProject);
    if (activeProject === 0) {
      document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeProject]);

  function referenceProject(e) {
    e.preventDefault();

    if (activeProject >= projects.length - 1) {
      setActiveProject(0);
    } else {
      setActiveProject(activeProject + 1);
    }
  }

  const ProjectsController = (
    <a
      onClick={referenceProject}
      className={`projects-controller${
        activeProject >= projects.length - 1
          ? ' projects-controller-reverse'
          : ''
      }`}
      href={activeProject}
    >
      <i className='fas fa-2x fa-chevron-circle-down'></i>
    </a>
  );

  return (
    <>
      <div className='second-bg'></div>
      <main className='main'>
        <section id='section' className='section'>
          <h1 className='section-header'>Projects</h1>
          <ul className='projects-container'>{Projects}</ul>
        </section>
        {ProjectsController}
      </main>
    </>
  );
}
