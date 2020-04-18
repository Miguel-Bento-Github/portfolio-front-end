const opacityKeyFrames = [{ opacity: 1 }, { opacity: 0 }];

const topKeyFrames = [
  { transform: 'rotate(0) translateY(-6px)' },
  { transform: 'rotate(45deg) translateY(5px)' },
];

const centerKeyFrames = [
  { transform: 'rotateZ(0)' },
  { transform: 'translateX(-2px) rotateZ(45deg)' },
];

const bottomKeyFrames = [
  { transform: 'rotateZ(0) translateY(6px)' },
  { transform: 'rotateZ(-45deg) translateY(-5px)' },
];

export { opacityKeyFrames, topKeyFrames, centerKeyFrames, bottomKeyFrames };
