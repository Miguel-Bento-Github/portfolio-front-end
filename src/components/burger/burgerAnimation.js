function burgerAnimation(isActive, animationsObject, isMobile) {
  if (isMobile) return;
  const animations = Object.values(animationsObject);

  if (!isActive) {
    animations.forEach((animation) => {
      animation.updatePlaybackRate(0.5);
      animation.reverse();
      animation.play();
    });
  } else {
    animations.forEach((animation, index) =>
      !animations[index - 1]
        ? animation.play()
        : (animations[index - 1].onfinish = () => animation.play())
    );
  }
}

export default burgerAnimation;
