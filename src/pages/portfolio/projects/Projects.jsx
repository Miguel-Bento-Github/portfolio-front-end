import React, { useState } from 'react';
import resizeImg from '../helpers/resizeImg';
import ProjectsList from './ProjectsList';

function Projects({ projects, setChevronDirection, ids }) {
  const [lookingAtID, setWatchingID] = useState(ids[0]);
  const limit = ids.indexOf(lookingAtID) + 3;

  const totalProjects = projects.map(
    ({ _id: { $oid: id }, link, img, title, description }, index) => {
      if (index >= limit) return null;
      return (
        <ProjectsList
          key={id}
          id={id}
          isFirst={id === projects[0]._id.$oid}
          isLast={id === projects[projects.length - 1]._id.$oid}
          link={link}
          img={resizeImg(img)}
          title={title}
          description={description}
          setWatchingID={setWatchingID}
          lookingAtID={lookingAtID}
          setChevronDirection={setChevronDirection}
        />
      );
    }
  );

  return totalProjects;
}
export default Projects;
