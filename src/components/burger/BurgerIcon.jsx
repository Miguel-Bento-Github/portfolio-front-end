import React, { useRef, useMemo } from 'react';
import './burger.scss';
import animation from './animation';
import burgerAnimation from './burgerAnimation';
import {
  topKeyFrames,
  centerKeyFrames,
  bottomKeyFrames,
  opacityKeyFrames,
} from './keyFrames';
import { isMobileAgent } from '../../helpers/isMobile';

function BurgerIcon({ isOpen, toggle }) {
  let animations;
  const topRef = useRef();
  const centerRef = useRef();
  const bottomRef = useRef();

  if (!isMobileAgent()) {
    animations = {
      topAnimation: animation(topRef.current, topKeyFrames),
      centerAnimation: animation(centerRef.current, centerKeyFrames),
      opacityAnimation: animation(centerRef.current, opacityKeyFrames),
      bottomAnimation: animation(bottomRef.current, bottomKeyFrames),
    };
  } else {
  }

  useMemo(() => burgerAnimation(isOpen, animations, isMobileAgent()), [
    isOpen,
    animations,
  ]);

  return (
    <button
      aria-label='open menu'
      className={isOpen ? 'hamburger open' : 'hamburger'}
      onClick={toggle}
    >
      <div className='hamburger-box'>
        <div ref={topRef} className='hamburger-inner hamburger-inner-top' />
        <div
          ref={centerRef}
          className='hamburger-inner hamburger-inner-center'
        />
        <div
          ref={bottomRef}
          className='hamburger-inner hamburger-inner-bottom'
        />
      </div>
    </button>
  );
}
export default BurgerIcon;
