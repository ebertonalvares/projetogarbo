
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
  const location = useLocation();

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (!location.hash) return;
    if (!getAnchorElement()) return;
    setTimeout(() => {
      getAnchorElement().scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    function getAnchorElement() {
      return document.getElementById(removedHashLocation())
    }

    function removedHashLocation() {
      return location.hash.slice(1);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;