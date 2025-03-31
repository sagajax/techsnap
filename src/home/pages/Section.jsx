import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.set("#cursor", { scale: 1 });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative mt-64 -top-44 bg-white mb-[25em] flex justify-center items-center rounded-bl-[2.0em] rounded-br-[2.0em] min-h-screen text-4xl text-black font-extrabold z-[4]"
    >
      Section
      {/* Techsnap div positioned at the bottom of the Section div */}
      <div className="absolute w-[90%] bg-gradient-to-r from-purple-300 to-purple-500 text-black justify-center items-center h-80 rounded-[48px] flex bottom-[-40%] left-[5%]">
        <h1 className="text-4xl font-extrabold">Techsnap</h1>
      </div>
    </div>
  );
};

export default Section2;
