import React, { useState } from 'react';
import './portfolio.scss';
import projects from './projects/data.json';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Projects from './projects/Projects';
import Controller from './projects/Controller';
import nextProject from './helpers/nextProject';
require('smoothscroll-polyfill').polyfill();

function Portfolio() {
  useDocumentTitle('Projects');
  const ids = projects.map(({ _id: { $oid: id } }) => id);
  const [projectInView, setProjectInView] = useState('');
  const [chevronDirection, setChevronDirection] = useState(false);

  function toNextProject() {
    const projectInView = nextProject(ids);
    setProjectInView(projectInView);
  }

  return (
    <>
      <div className='second-bg' />
      <main className='main'>
        <section id='section' className='section'>
          <h1 className='section-header'>Projects</h1>
          <ul className='projects-container'>
            <Projects
              setChevronDirection={setChevronDirection}
              projects={projects}
              ids={ids}
            />
          </ul>
        </section>
        <Controller
          ids={ids}
          projectInView={projectInView}
          chevronDirection={chevronDirection}
          toNextProject={toNextProject}
        />
      </main>
    </>
  );
}

export default Portfolio;
