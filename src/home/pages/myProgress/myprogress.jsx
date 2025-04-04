import React, { useState } from "react";
import Progress from "./comp/progress";
import InsideTab from "./comp/insideTab";
import MyBuddy from "./comp/myBuddy";
import Graph from "./comp/graph";
import Projects from "./comp/projects";
import Internship from "./comp/internship";
import CareerPath from "./comp/careerPath";
import Certificate from "./comp/certificate";

const tabs = [
  { name: "Courses", component: InsideTab },
  { name: "Careerpaths", component: Projects },
  { name: "Skillpaths", component: Internship },
  { name: "Projects", component: CareerPath },
  { name: "Assignments", component: Certificate },
];

function MyProgress() {
  const [activeTab, setActiveTab] = useState("Courses");
  // Take Test
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const ActiveComponent = tabs.find((tab) => tab.name === activeTab).component;

  return (
    <div className="bg-[#f6f6f6] dark:bg-transparent mx-auto">
      <div className="h-full final flex slg:flex-col xl:flex-row mx-auto gap-4 ">
        {/* Left Column */}
        <div className="w-full">
          <div className="flex flex-col  ">
            <div className="flex flex-col gap-3 sm:flex-row bg-white dark:bg-transparent rounded overflow-hidden justify-evenly font-bold mt-4 text-center w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={`px-4 py-2 w-full hover:bg-[#cd27ff] hover:text-white text-sm transition ease delay-150 cursor-pointer ${
                    activeTab === tab.name
                      ? "bg-[#cd27ff] text-white"
                      : "text-black bg-gray-300 dark:text-gray-300 dark:bg-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <div className="">
              <div className="flex flex-col ">
                {/* <InsideTab /> */}
                <ActiveComponent />

                {/* Test */}
                {isVisible && (
                  <div className="my_progress_third_card my-8 bg-[#7933ff] dark:bg-gray-800 text-white p-5 flex flex-col relative">
                    <h1 className="text-lg w-9/12 font-medium">
                      Please take your skill test so that we can improve your
                      recommendations and can suggest you better content or
                      projects
                    </h1>

                    <button className="w-36 h-10 bg-white text-black font-semibold rounded-lg mt-5">
                      Take Test
                    </button>
                    <p
                      className="close_banner absolute top-6 right-6 font-semibold cursor-pointer"
                      onClick={handleClose}
                    >
                      X
                    </p>
                  </div>
                )}

                <Graph />
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className=" max-w-[200px] lg:w-full xl:w-1/5 mt-4 h-full self-stretch flex flex-grow">
          <MyBuddy />
        </div>
      </div>
      <Progress />
    </div>
  );
}

export default MyProgress;
