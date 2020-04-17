import { isDesktopWidth } from '../../../helpers/isMobile';

export default function scrollTo(id, ids) {
  const element = document.getElementById(ids[id]);

  if (ids[id] === ids[ids.length]) {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } else {
    if (isDesktopWidth()) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }
}
