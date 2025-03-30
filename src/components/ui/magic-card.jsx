"use client";;
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";


import { cn } from "@/lib/utils";

import  {forwardRef, useRef, useCallback, useEffect } from "react";


export const MagicCard = forwardRef(
  (
    {
      children,
      className,
      gradientSize = 200,
      gradientColor = "#262626",
      gradientOpacity = 0.8,
      gradientFrom = "#9E7AFF",
      gradientTo = "#FE8BBB",
      onClick, // Accept onClick as a prop
    },
    ref // Accept ref as a second parameter
  ) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(-gradientSize);
    const mouseY = useMotionValue(-gradientSize);

    const handleMouseMove = useCallback(
      (e) => {
        if (cardRef.current) {
          const { left, top } = cardRef.current.getBoundingClientRect();
          const clientX = e.clientX;
          const clientY = e.clientY;
          mouseX.set(clientX - left);
          mouseY.set(clientY - top);
        }
      },
      [mouseX, mouseY]
    );

    const handleMouseOut = useCallback(
      (e) => {
        if (!e.relatedTarget) {
          document.removeEventListener("mousemove", handleMouseMove);
          mouseX.set(-gradientSize);
          mouseY.set(-gradientSize);
        }
      },
      [handleMouseMove, mouseX, gradientSize, mouseY]
    );

    const handleMouseEnter = useCallback(() => {
      document.addEventListener("mousemove", handleMouseMove);
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    }, [handleMouseMove, mouseX, gradientSize, mouseY]);

    useEffect(() => {
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    }, [gradientSize, mouseX, mouseY]);

    useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseout", handleMouseOut);
      document.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseout", handleMouseOut);
        document.removeEventListener("mouseenter", handleMouseEnter);
      };
    }, [handleMouseEnter, handleMouseMove, handleMouseOut]);

    return (
      <div
        ref={(node) => {
          cardRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          "group relative flex size-full rounded-xl px-4",
          className
        )}
        onClick={onClick} // Attach onClick handler
      >
        <div className="absolute inset-px z-10 rounded-xl shadow-lg border hover:border-0 hover:shadow-none bg-white dark:bg-neutral-900" />
        <div className="relative z-30">{children}</div>
        <motion.div
          className="pointer-events-none absolute inset-px z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
            `,
            opacity: gradientOpacity,
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                ${gradientFrom}, 
                ${gradientTo}, 
                transparent 100%
              )
            `,
          }}
        />
      </div>
    );
  }
);

MagicCard.displayName = "MagicCard";
