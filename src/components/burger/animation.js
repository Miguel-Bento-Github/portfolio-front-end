export default function burgerAnimation(element, keyframes) {
  const endPosition = new KeyframeEffect(element, keyframes, {
    duration: 250,
    fill: 'both',
  });
  return new Animation(endPosition, document.timeline);
}
