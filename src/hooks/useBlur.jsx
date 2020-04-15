import { useEffect } from 'react';

export default function useBlur({ isOpen }) {
  const blur = (section) => {
    section.classList.add('blur-active');
  };

  const unBlur = (section) => {
    section.classList.remove('blur-active');
  };

  useEffect(() => {
    const section = document.getElementById('section');
    if (!isOpen) unBlur(section);
    else blur(section);
  }, [isOpen]);
}
