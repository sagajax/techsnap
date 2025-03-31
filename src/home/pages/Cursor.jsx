import { useEffect, forwardRef } from "react";
import { gsap } from "gsap";

const Cursor = forwardRef(function Cursor(props, ref) {
  useEffect(() => {
    const moveCursor = (e) => {
      if (ref?.current) {
        gsap.to(ref.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power4.out",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [ref]);

  return (
    <div
      ref={ref}
      id="cursor"
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
});

export default Cursor;
