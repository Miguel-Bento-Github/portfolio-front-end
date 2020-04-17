import scrollTo from './scrollTo';
import checkIfInView from './checkIfInView';
export default function nextProject(ids) {
  let projectInView;

  function findNextAndScroll(id) {
    let project = document.getElementById(id);
    if (project) {
      const inView = checkIfInView(project.id);
      if (inView) {
        const index = ids.indexOf(project.id);
        projectInView = ids[index + 1];
        scrollTo(index + 1, ids);
      }
    }
  }

  ids.forEach(findNextAndScroll);
  return projectInView;
}
