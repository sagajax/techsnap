import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const FollowerPointerCard = ({
  children,
  className,
  title,
  cursorColor,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = React.useRef(null);
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && (
          <FollowPointer
            x={position.x}
            y={position.y}
            title={title}
            cursorColor={cursorColor}
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({ x, y, title, cursorColor }) => {
  const colors = [
    "var(--sky-500)",
    "var(--neutral-500)",
    "var(--teal-500)",
    "var(--green-500)",
    "var(--blue-500)",
    "var(--red-500)",
    "var(--yellow-500)",
  ];

  return (
    <motion.div
      className="absolute z-50 h-4 w-4 rounded-full"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className={`h-6 w-6 sm:h-4 sm:w-4 ${cursorColor} stroke -translate-x-[5px] -translate-y-[2px] -rotate-[70deg] transform stroke-[#039855] stroke-[1px]`}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className="min-w-max whitespace-nowrap rounded-full bg-neutral-200 px-2 py-2 text-[16px] text-white"
      >
        {title}
      </motion.div>
    </motion.div>
  );
};
