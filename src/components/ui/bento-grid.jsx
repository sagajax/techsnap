import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[2rem] grid-cols-1 md:grid-cols-6 gap-4 mx-auto grid-rows-3 shadow-2xl p-4 rounded-xl ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  content
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-transparent border border-transparent justify-between flex w-full h-full",
        className
      )}>
      {content}
    
    </div>)
  );
};
