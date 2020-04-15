import { useEffect } from 'react';
import disableAnchorClicks from '../helpers/disableAnchorClicks';

export default function useLinks(isOpen, clickOutside) {
  useEffect(() => {
    document.addEventListener('click', clickOutside);
    if (isOpen) {
      disableAnchorClicks(true);
    } else {
      disableAnchorClicks();
    }
  });
}
