
import { useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import Cursor from "./Cursor";
import background from "../assets/background.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const cursorRef = useRef(null);
  const controls = useAnimation();
  const [progress, setProgress] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, { scale: 8, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
  };
return (
    <div className="bg-white min-w-screen min-h-screen">
  <div className="flex flex-col mt-4 items-center">
    <div className="w-[90%] max-w-[1200px] xl:max-w-[1300px] 2xl:max-w-[1400px] 3xl:max-w-[1500px] flex h-20 justify-center">
      <div className="bg-black w-[20%]">
        <div className="bg-white w-full h-20 rounded-br-[36px]" />
      </div>
      <div className="w-[60%] bg-black rounded-t-[36px]" />
      <div className="bg-black w-[20%]">
        <div className="bg-white w-full h-20 rounded-bl-[36px]" />
      </div>
    </div>

    <div className="bg-black text-white flex flex-col items-center justify-center p-10 w-[95%] max-w-[1200px] xl:max-w-[1300px] 2xl:max-w-[1400px] 3xl:max-w-[1500px] h-[95vh] border-4 border-t-0 rounded-b-lg rounded-t-[48px] relative m-auto">
      <></>
      <Cursor ref={cursorRef} />
      <h3
        className=" md:text-2xl lg:text-3xl xl:text-2xl font-bold py-0 text-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Choose your career and start your project now !
      </h3>

      <p className="text-lg text-gray-400 mt-4 py-6"></p>

      <div className="w-full max-w-[900px] xl:max-w-[900px] 2xl:max-w-[1000px] h-[300px] overflow-hidden flex justify-center items-center">
        <img
          src={background}
          alt="Decorative background showing career paths"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</div>
);
}
