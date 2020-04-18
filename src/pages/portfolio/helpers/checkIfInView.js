export default function checkIfInView(id, percentage) {
  if (!id) return null;
  const sensor = document.getElementById(id);
  const rect = sensor.getBoundingClientRect();
  const isInView =
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.top <
      (window.innerHeight * 0.75 ||
        document.documentElement.clientHeight * 0.75);
  return isInView;
}
