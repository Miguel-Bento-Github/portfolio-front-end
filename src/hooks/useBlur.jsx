import { useEffect } from 'react';

export default function useBlur(isOpen) {
  const blur = (section) => {
    section.classList.add('section--blur');
  };

  const unBlur = (section) => {
    section.classList.remove('section--blur');
  };

  useEffect(() => {
    const section = document.getElementById('section');
    if (!isOpen) unBlur(section);
    else blur(section);
  }, [isOpen]);
}
