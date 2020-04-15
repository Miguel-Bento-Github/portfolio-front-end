export default function disableAnchorClicks(disable) {
  const links = document.querySelectorAll('.page');

  if (disable) {
    links.forEach((link) => {
      link.style.pointerEvents = 'none';
    });
  } else {
    links.forEach((link) => {
      link.style.pointerEvents = '';
    });
  }
}
