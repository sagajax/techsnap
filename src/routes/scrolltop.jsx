import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Handle scroll reset on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Using instant for immediate scroll
    });
    const target = document.querySelector("#maincontent");
    if (target) {
      target.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" 
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;