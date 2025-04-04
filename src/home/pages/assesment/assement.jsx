import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import GridPattern from "../../../components/ui/grid-pattern";
import { BorderBeam } from "../../../components/ui/border-beam";
function Assement() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/assessment/details");
  };
  const CareerCard = () => {
    return (
      <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-600 transition-all duration-300">
        <div className="text-[#8677ae] text-sm dark:text-[#a99fbc]">
          ASSESSMENT
        </div>
        <div className="font-bold text-gray-800 dark:text-gray-200">
          Azure Fundamentals
        </div>

        <div className="border border-gray-200 dark:border-gray-600 mt-10"></div>
        <div
          className="flex justify-between mt-2 cursor-pointer"
          onClick={handleClick}
        >
          <div className="text-gray-800 dark:text-gray-300">Theory</div>
          <div className="flex gap-3 items-center">
            <div className="text-blue-500 dark:text-blue-400 font-semibold">
              Topics
            </div>
            <div className="border dark:text-white border-gray-800 dark:border-gray-400 rounded-md px-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
              Start
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="final md:pt-4">
        <div className="flex relative overflow-hidden bg-[url('https://www.finalroundai.com/assets/images/home-bg.jpg')] bg-cover h-[432px] rounded-2xl">
        <BorderBeam
        duration={14}
        size={600}
        className="from-transparent via-red-500 to-transparent"
      />

        </div>
      </div>
      <div className="final">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-10  m-auto mt-4">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
        <div className="">
          <div className="text-3xl font-bold mt-6 mb-4 text-black dark:text-white">
            All Assesments
          </div>
          <div class="sticky  top-0 z-10 flex flex-wrap gap-2 mb-8 final mx-auto px-4 py-2  h-14 overflow-hidden md:overflow-auto md:h-auto">
            <div
              class="tagCourse p-3 bg-black text-white rounded-md flex-shrink-0"
              data-tag="all"
            >
              All
            </div>
            <div
              class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
              data-tag="python"
            >
              Python
            </div>
            <div
              class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
              data-tag="web-development"
            >
              Web Development
            </div>
            <div
              class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
              data-tag="frontend"
            >
              Frontend
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              Python
            </div>
            <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
              +8
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-10 m-auto mt-4">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>
    </div>
  );
}

export default Assement;
