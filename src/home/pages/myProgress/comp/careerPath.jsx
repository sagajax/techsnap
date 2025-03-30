import React from "react";
import { useState } from "react";
import { FaStar, FaBookOpen } from "react-icons/fa";
function CareerPath() {
  const [activeTab, setActiveTab] = useState("inProgress");
  const Card = () => {
    return (
      <div className="bg-white dark:bg-gray-800 dark:text-white px-3 py-3 rounded-xl shadow-lg flex flex-col justify-start items-start self-stretch">
        {/* <img
          src="https://dummyimage.com/100/200/fff"
          className="w-full h-[150px] rounded-md"
        /> */}
        <div className="mt-2 font-semibold text-md ">
          Project Name Project Name Project Name Project
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat...
        </div>
        <div className="flex text-xs gap-2 my-[11px]">
          <div className="flex items-center">
            <FaStar className="text-yellow-300" />
            <span className="ml-2 text-gray-700">4</span>
          </div>
          <div className="flex items-center">
            <FaBookOpen className="text-blue-500" />
            <span className="ml-2 text-gray-700">8 Chapters</span>
          </div>
          <div className="flex items-center">
            <FaBookOpen className="text-blue-500" />
            <span className="ml-2 text-gray-700">Intermediate</span>
          </div>
        </div>
        <div className="flex gap-2">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU"
            }
            className="rounded-full h-8 w-8"
          />
          <div className="text-xs">
            <div>Name</div>
            <div>Description</div>
          </div>
        </div>
      </div>
    );
  };
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
          <div className="flex justify-center my-5 items-center h-[156px] bg-[rgba(4, 4, 255, 0.048)] border border-dotted border-black dark:text-white">
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
          className={`pb-3 rounded text-md font-semibold ${
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

export default CareerPath;
