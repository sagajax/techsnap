import { FaCheckCircle } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";
import { TfiDirectionAlt } from "react-icons/tfi";

const Cards = ({ heading, content }) => {
  return (
    <div className="mt-8 px-6 py-4 bg-white border dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
        {heading}
      </div>
      {content.map((track, index) => (
        <div
          className="flex items-center text-gray-700 dark:text-gray-300 mb-2"
          key={index}
        >
          <span className="text-lg text-blue-600 dark:text-blue-400">
            {track}
          </span>
        </div>
      ))}
    </div>
  );
};

export const SideCards = ({ prerequisities, tracks, collaborators }) => {
  return (<>
    
      <div className="mt-4 px-6 py-4 bg-white border dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-lg  font-bold text-gray-800 dark:text-white mb-4">
          SKILLS YOU'LL GAIN
        </h2>
        <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
          <FaCheckCircle className="text-purple-500 dark:text-white mr-2" />
          <span className="text-base">Structure pages with HTML</span>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
          <FaCheckCircle className="text-purple-500 dark:text-white mr-2" />
          <span className="text-base">Style pages with CSS</span>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
          <FaCheckCircle className="text-purple-500 dark:text-white mr-2" />
          <span className="text-base">Implement layouts</span>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
          <FaCheckCircle className="text-purple-500 dark:text-white mr-2" />
          <span className="text-base">Create responsive designs</span>
        </div>
      </div>

      {/* PREREQUISITES */}
      <div className="mt-4 px-6 py-4 bg-white border dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
        <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
          <LuGraduationCap
            size={24}
            className="text-black dark:text-white mr-2"
          />
          <span className="text-lg font-semibold">PREREQUISITES</span>
        </div>
        {prerequisities.length > 0 ? (
          prerequisities.map((track, index) => (
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <span className="text-base text-blue-600 dark:text-blue-400">
                {track}
              </span>
            </div>
          ))
        ) : (
          <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
            <FaCheckCircle className="text-green-600  mr-2" />
            <span className="text-base text-green-600">No Prerequisites</span>
          </div>
        )}
      </div>

      {/* PART OF THESE TRACKS */}
      <div className="mt-4 px-6 py-4 bg-white border dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
        <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
          <TfiDirectionAlt
            size={24}
            className="text-black dark:text-white mr-2 "
          />
          <span className="text-base font-semibold">PART OF THESE TRACKS</span>
        </div>
        {tracks.map((track, index) => (
          <div
            className="flex items-center text-gray-700 dark:text-gray-300 mb-2"
            key={index}
          >
            <span className="text-base text-blue-600 dark:text-blue-400">
              {track}
            </span>
          </div>
        ))}
      </div>

      {/* COLLABORATORS */}
      <div className="mt-4 px-6 py-4 bg-white border dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
        <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
          <GoPeople size={24} className="text-black dark:text-white mr-2" />
          <span className="text-lg font-bold">COLLABORATORS</span>
        </div>
        {collaborators.map((collaborator, index) => (
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-4">
            <img src={collaborator.img} className="rounded-full w-10 h-10" />
            <div className="flex flex-col text-base text-black dark:text-blue-400">
              {collaborator.name}
              <span className="text-sm ">{collaborator.designation}</span>
            </div>
          </div>
        ))}
      </div></>
  );
};
