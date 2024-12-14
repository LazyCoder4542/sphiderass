import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      if (navigationType !== "POP") {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]); // Run this effect whenever the path changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
