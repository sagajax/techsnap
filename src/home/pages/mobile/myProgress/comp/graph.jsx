import React from "react";
import { FaUserCircle } from "react-icons/fa";
import CircularProgressChart from "../../../../component/chart/circle";
import AnimatedCircularProgressBar from "../../../../../components/ui/animated-circular-progress-bar";

function Graph() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        {/* Leaderboard */}
        <div className="mb-4 flex justify-between mt-4">
          <h1 className="text-sm font-bold p-2">LeaderBoard</h1>
          <select
            id="countries"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2"
          >
            <option selected>Global</option>
            <option value="FR">FR</option>
            <option value="DE">DE</option>
          </select>
        </div>
        <div className=" bg-white p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-2 text-lg font-bold">#1</span>
                <FaUserCircle className="text-green-700" size={24} />
                <span className="ml-2 text-sm font-medium">
                  Abhishek Sharma
                </span>
              </div>
              <span className="text-sm font-semibold">181039</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-2 text-lg font-bold">#2</span>
                <FaUserCircle className="text-indigo-800" size={24} />
                <span className="ml-2 text-sm font-medium">Shaikh Tabrez</span>
              </div>
              <span className="text-sm font-semibold">141360</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-2 text-lg font-bold">#3</span>
                <FaUserCircle className="text-green-600" size={24} />
                <span className="ml-2 text-sm font-medium">
                  Pradeep Suryavanshi
                </span>
              </div>
              <span className="text-sm font-semibold">140403</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-2 text-lg font-bold">#516433</span>
                <FaUserCircle className="text-yellow-600" size={24} />
                <span className="ml-2 text-sm font-medium">
                  Saipavan Saketh
                </span>
              </div>
              <span className="text-sm font-semibold">200</span>
            </div>
          </div>
          <div className="text-blue-500 text-center mt-3 cursor-pointer">
            View Leaderboard
          </div>
        </div>
        <div className="mb-4 flex justify-between mt-4">
          <h1 className="text-sm font-bold">Competitive Programming</h1>
        </div>
        {/* Progress */}
        <div className=" bg-white p-4 flex flex-col items-center">
          <div className="mb-2">Your Progress</div>
          <div className="flex justify-between gap-3">
            <div className="w-[100px]">
              <AnimatedCircularProgressBar
                max={100}
                min={0}
                value={10}
                gaugePrimaryColor="rgb(79 70 229)"
                gaugeSecondaryColor="rgba(0, 0,
              0, 0.1)"
              />
            </div>
            <div className="mt-4 ">
              <div className="">
                <div className="justify-between flex text-orange-400 ">
                  <span>Solved:</span>
                  <span> 1 / 963</span>
                </div>
                <div className="justify-between flex text-blue-400">
                  <span>Attempted:</span>
                  <span> 1</span>
                </div>
                <div className="justify-between flex gap-2 text-green-500">
                  <span>Accuracy:</span>
                  <span> 50.00%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-blue-500 mt-3">Solve More Problems</div>
        </div>
        {/* Progress */}
        {/* <div className=" bg-white p-4 flex flex-col items-center">
          <div className="mb-2">Your Progress</div>
          <div className="flex justify-between gap-3">
            <CircularProgressChart />
            <div className="mt-4 ">
              <div className="">
                <div className="justify-between flex text-orange-400 ">
                  <span>Solved:</span>
                  <span> 1 / 963</span>
                </div>
                <div className="justify-between flex text-blue-400">
                  <span>Attempted:</span>
                  <span> 1</span>
                </div>
                <div className="justify-between flex gap-2">
                  <span>Accuracy:</span>
                  <span> 50.00%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-blue-500 mt-3">Solve More Problems</div>
        </div> */}
      </div>
    </div>
  );
}

export default Graph;
