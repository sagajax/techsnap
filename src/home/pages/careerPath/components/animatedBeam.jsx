import React, { forwardRef, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { MagicCard } from "../../../../components/ui/magic-card";
import { useTheme } from "next-themes";
import { useBeamStore } from "../utils/store";
import { ArcherElement } from "react-archer";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center text-[.6rem] border-2 rounded-lg bg-white p-2 box-content shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutput({ data, index, relations }) {
  const { theme } = useTheme();
  const unit = data;
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const refs = useRef(
    Array(unit.lessons.length)
      .fill(null)
      .map(() => React.createRef())
  );

  const { expandedCards, toggleExpanded } = useBeamStore();
  const isExpanded = expandedCards[`card-${index}`] || false;

  const handleClick = useCallback(() => {
    toggleExpanded(`card-${index}`);
  }, [toggleExpanded, index]);

  return (
    <div className={"relative"} ref={containerRef}>
      <div className="inline-flex flex-row justify-between gap-10">
        {index % 2 === 0 && isExpanded && (
          <div className="flex flex-col justify-center gap-2">
            {unit.lessons.map((lesson, lessonIndex) => (
              <Circle key={lessonIndex} ref={refs.current[lessonIndex]}>
                {lesson}
              </Circle>
            ))}
          </div>
        )}
        <div className="flex items-center" ref={cardRef} id={`card-${index}`}>
          <ArcherElement id={`element${index}`} relations={relations}>
            <MagicCard
              onClick={handleClick}
              className="bg-white w-fit text-[.8rem] 1300:text-[1rem] font-semibold my-auto text-nowrap h-fit p-4  text-center cursor-pointer"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              {unit.unitName}
            </MagicCard>
          </ArcherElement>
        </div>

        {index % 2 !== 0 && isExpanded && (
          <div className="flex flex-col justify-center gap-2">
            {unit.lessons.map((lesson, lessonIndex) => (
              <Circle key={lessonIndex} ref={refs.current[lessonIndex]}>
                {lesson}
              </Circle>
            ))}
          </div>
        )}
      </div>

      {isExpanded &&
        unit.lessons.map((lesson, lessonIndex) => (
          <AnimatedBeam
            key={lessonIndex}
            containerRef={containerRef}
            fromRef={refs.current[lessonIndex]}
            toRef={cardRef}
            duration={3}
          />
        ))}
    </div>
  );
}
