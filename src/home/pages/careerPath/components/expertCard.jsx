import React from "react";

import { useTheme } from "next-themes";
import { MagicCard } from "../../../../components/ui/magic-card";

const RelatedExpertsCard = ({ name, title, imgSrc, believers }) => {
  const { theme } = useTheme();

  return (
    <MagicCard
      className="w-full max-w-md overflow-hidden transition-all duration-300 cursor-pointer group"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      <div className="p-6 flex flex-col  gap-2">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <img
              src={imgSrc}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 dark:border-gray-700"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                {title}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {name}
            </h3>
            <div className="flex items-center ">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {believers} Believers this month
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-2 my-2 border-gray-300 border-dashed" />

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          fugit.
        </p>
        <div className="border-b-2 my-2 border-gray-300 border-dashed" />

        <div className="flex space-x-3 z-10">
          <button className="flex-1 px-4 py-2 text-sm font-medium rounded-lg border border-blue-700  text-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
            Connect
          </button>
          <button className="flex-1 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Message
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.07] to-transparent opacity-0 group-hover:opacity-25 transition-opacity" />
      </div>
    </MagicCard>
  );
};

const ExpertCardSkeleton = () => (
  <div className="w-full max-w-md p-6 space-y-6 bg-white dark:bg-gray-800 rounded-xl animate-pulse">
    <div className="flex items-start space-x-4">
      <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="flex-1 space-y-3">
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
    <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded" />
    <div className="flex space-x-3">
      <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg" />
      <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg" />
    </div>
  </div>
);

export { RelatedExpertsCard, ExpertCardSkeleton };
