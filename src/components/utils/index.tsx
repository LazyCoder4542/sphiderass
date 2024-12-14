import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
    } else {
      console.log(performance.getEntriesByType("navigation"));
      if (navigationType !== "POP") {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]); // Run this effect whenever the path changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
