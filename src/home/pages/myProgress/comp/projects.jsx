import React from "react";
import { useState } from "react";
import { FaCertificate, FaUserGraduate } from "react-icons/fa";
import { gradients } from "./trendingCareer";

function Projects() {
  const [activeTab, setActiveTab] = useState("inProgress");

  const Card = () => {
    // Randomly pick a gradient
    const randomGradient =
      gradients[Math.floor(Math.random() * gradients.length)];

    return (
      <div className="bg-white shadow-md border rounded-lg mx-auto w-full  hover:drop-shadow-2xl">
        {/* Content */}
        <div
          className={`relative border-b pb-3 ${randomGradient} rounded-t-lg px-4 `}
        >
          <div className="text-sm font-semibold text-white uppercase tracking-wider">
            {/* Career path */}
          </div>
        </div>
        <div className="px-4 pb-[9px]">
          <h2 className="text-md font-bold my-2">Full-Stack Engineer</h2>
          <p className="text-gray-700 text-xs text-ellipsis line-clamp-2">
            A full-stack engineer can get a project done from start to finish,
            back-end to front-end.
          </p>
          <div className="border-b-2 border-gray-300 border-dashed "></div>
          <div className="text-gray-600 text-xs my-2 ">
            Includes <span className="font-semibold">51 Courses</span>
          </div>
          <div className="border-b-2  border-gray-300 border-dashed"></div>
          <div className="text-gray-600 flex text-xs items-center my-1 group overflow-hidden">
            <FaCertificate className="h-4 w-4 mr-1 text-xs" />
            <div className="relative overflow-hidden">
              <p
                className="text-ellipsis whitespace-nowrap group-hover:animate-scroll inline-block"
                style={{
                  animationDuration: "5s",
                  animationIterationCount: "infinite",
                }}
              >
                With{" "}
                <span className="font-semibold ml-1 text-xs">
                  Professional Certification
                </span>
              </p>
            </div>
          </div>

          <div className="border-b-2  border-gray-300 border-dashed"></div>
          <div className="text-gray-600 flex items-center justify-between my-[5px] ">
            <div className="flex items-center text-xs">
              <FaUserGraduate className="h-4 w-4 mr-2" />
              <span className="font-semibold pr-1">Beginner </span>
              <span>Friendly</span>
            </div>
            <span className="ml-auto font-semibold">150 hrs</span>
          </div>
        </div>
      </div>
    );
  };
  // const Card = () => {
  //   return (
  //     <div className="relative bg-white shadow-md border border-black rounded-lg  mx-auto w-[320px] mb-3">
  //       {/* Left and Bottom Borders */}
  //       <div className="absolute -left-2 -bottom-2 h-full w-full border-l-2 border-b-2 border-black rounded-lg pointer-events-none"></div>

  //       {/* Content */}
  //       <div className="relative border-b pb-4 bg-black rounded-t-lg px-6 py-2">
  //         <div className="text-sm font-semibold text-white uppercase tracking-wider">
  //           Career path
  //         </div>
  //       </div>
  //       <div className="px-6 pb-4">
  //         <h2 className="text-2xl font-bold mt-4">Full-Stack Engineer</h2>
  //         <p className="text-gray-700 mt-2 text-sm">
  //           A full-stack engineer can get a project done from start to finish,
  //           back-end to front-end.
  //         </p>
  //         <div className="border-b-2 my-2 border-gray-300 border-dashed "></div>
  //         <div className="text-gray-600">
  //           Includes <span className="font-semibold">51 Courses</span>
  //         </div>
  //         <div className="border-b-2 my-2 border-gray-300 border-dashed "></div>
  //         <div className="text-gray-600 flex items-center">
  //           <FaCertificate className="h-4 w-4 mr-2" />
  //           With{" "}
  //           <span className="font-semibold ml-1">
  //             Professional Certification
  //           </span>
  //         </div>
  //         <div className="border-b-2 my-2 border-gray-300 border-dashed "></div>
  //         <div className="text-gray-600 flex items-center justify-between">
  //           <div className="flex items-center">
  //             <FaUserGraduate className="h-4 w-4 mr-2" />
  //             <span className="font-semibold pr-1">Beginner </span>
  //             <span>Friendly</span>
  //           </div>
  //           <span className="ml-auto font-semibold">150 hrs</span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  const renderContent = () => {
    if (activeTab === "inProgress") {
      return (
        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1 ">
          <Card />
          <Card />
          <Card />
        </div>
      );
    } else if (activeTab === "completed") {
      return (
        <div>
          <div className="flex justify-center my-5 items-center h-[160px] bg-[rgba(4, 4, 255, 0.048)] border border-dotted border-black dark:text-white">
            <h6 className="">No Completed Projects</h6>
          </div>
          {/* Add more completed content here */}
        </div>
      );
    }
  };
  return (
    <div>
      <div className="mt-2 border-b border-black dark:border-gray-600 flex space-x-4 mb-2 ">
        <button
          className={`pb-2 rounded text-md font-semibold ${
            activeTab === "inProgress"
              ? "text-[#cd27ff] border-black dark:border-gray-300 border-b-2"
              : "text-black dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("inProgress")}
        >
          In Progress
        </button>
        <button
          className={`pb-2 rounded text-md font-semibold ${
            activeTab === "completed"
              ? "text-[#cd27ff] border-black dark:border-gray-300 border-b-2"
              : "text-black dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
      </div>

      <div className="">{renderContent()}</div>
    </div>
  );
}

export default Projects;
