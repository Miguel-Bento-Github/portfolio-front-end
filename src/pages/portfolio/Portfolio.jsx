import React from 'react';
import './portfolio.scss';
import ProjectsList from './projects/ProjectsList';
import projects from './projects/projects.json';

export default function Portfolio() {
  const Projects = projects.map((project) => {
    const {
      _id: { $oid: id },
      link,
      img,
      title,
    } = project;

    return (
      <ProjectsList
        key={id}
        link={link}
        img={img}
        imgTitle={title}
        projectName={title}
      />
    );
  });

  return (
    <>
      <div className='second-bg'></div>
      <main className='main blur'>
        <section className='section'>
          <h1 className='section-header '>Portfolio</h1>
          <ul className='projects-container'>{Projects}</ul>
        </section>
      </main>
    </>
  );
}
