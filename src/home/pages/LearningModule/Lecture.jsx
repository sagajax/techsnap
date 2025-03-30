import React, { useEffect, useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import ResizableComponent from "./components/contentMode/canvasMode";
import RndWithDraggableTabs from "./components/contentMode/tabMode";
import { useSettingStore } from "./utils/store";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import {
  IoIosCloseCircle,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { FaChevronDown, FaChevronRight, FaPlay } from "react-icons/fa";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import SideBarRndResizableComponent from "./components/contentMode/sideBarMode";

import RndResizableComponent from "./components/contentMode/resizableMode";

const Lecture = () => {
  const { isCanvasMode, isSideBar, isTabMode } = useSettingStore();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeTab, setActiveTab] = useState("input");
  

  let WrapperComponent;
  if (isSideBar) {
    WrapperComponent = SideBarRndResizableComponent;
  } else if (isCanvasMode) {
    WrapperComponent = ResizableComponent;
  } else if (isTabMode) {
    WrapperComponent = RndWithDraggableTabs;
  } else {
    WrapperComponent = RndResizableComponent;
  }

  return (
    <div className=" h-[91vh] w-full">
      <WrapperComponent>
        <div className=" p-6 pt-2 bg-white text-sm  ">
          <h1 className="mb-2">Question</h1>
          <h2 className="text-xl font-semibold">
            Minimum Steps to Reach Target
          </h2>
          <p className="text-gray-500 text-sm">
            Time Limit: 2, Memory Limit: 128000
          </p>

          <div className="mt-4 font-light">
            You are given an integer{" "}
            <span className="font-semibold">target</span>. Your task is to find
            the minimum number of steps required to reach the target by starting
            from 0 and applying the following two operations:
          </div>

          <ol className="list-decimal pl-6 mt-3">
            <li>
              <span className="font-semibold">Double:</span> You can multiply
              the current number by 2.
            </li>
            <li>
              <span className="font-semibold">Increment:</span> You can add 1
              from the current number.
            </li>
          </ol>
          <div className="flex mt-6 items-center gap-4">
            <h3 className="font-semibold">Input</h3>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <p>
            The first and only line of input contains an integer representing
            the target number to reach.
          </p>

          <div className="flex mt-6 items-center gap-4">
            <h3 className="font-semibold">Constraints</h3>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <p>
            <span className="font-semibold">1 ≤ target ≤ 10⁹</span>
          </p>

          <div className="flex mt-6 items-center gap-4">
            <h3 className="font-semibold">Output</h3>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <p>
            Print an integer representing the minimum number of steps required
            to reach the target.
          </p>
        </div>
        <div className="  p-6 pt-2 bg-white text-sm  ">
          <h1 className="mb-2">All Submission</h1>
          <h2 className="text-lg font-semibold">Last Submission</h2>
          <div className="flex justify-between items-center mt-3 p-4 rounded-md bg-gray-100">
            <div className="text-xl border-r  border-gray-300  w-1/2 font-bold flex flex-col items-center gap-1">
              0/9
              <p className="text-sm font-normal">Test Cases Passes</p>
            </div>
            <div className="text-red-600 font-semibold flex flex-col items-center w-1/2   gap-1">
              <IoIosCloseCircle size={20} />
              Wrong Answer
            </div>
          </div>

          <div className="mt-4 bg-gray-50 p-4 rounded-md border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="bg-white p-3 rounded-md border">
                <h3 className="font-semibold">TC #0</h3>
                <p className="text-sm text-gray-500">INPUT</p>
                <p className="text-sm font-semibold">Hidden</p>
                <p className="text-sm text-gray-500 mt-2">OUTPUT</p>
                <p className="text-sm font-semibold">Hidden</p>
                <p className="text-sm text-gray-500 mt-2">STATUS</p>
                <p className="text-sm font-semibold text-red-600">
                  Wrong Answer
                </p>
                <p className="text-sm text-gray-500 mt-2">TIME</p>
                <p className="text-sm font-semibold">0.002</p>
                <p className="text-sm text-gray-500 mt-2">MEMORY</p>
                <p className="text-sm font-semibold">848</p>
              </div>
            </div>
          </div>

          <h2 className="mt-6 text-lg font-semibold">Previous Submissions</h2>
          <div className="mt-3 bg-gray-100 p-4 rounded-md">
            <div className="flex justify-between text-gray-600 font-semibold">
              <span>STATUS</span>
              <span>TEST CASES PASSED</span>
            </div>
            <div className="flex justify-between mt-2 text-red-600">
              <span>
                <IoIosCloseCircle size={20} />
              </span>
              <span>0</span>
            </div>
            <div className="flex justify-between mt-2 text-red-600">
              <span>
                <IoIosCloseCircle size={20} />
              </span>
              <span>0</span>
            </div>
          </div>
        </div>
        <div className=" p-6 pt-2 bg-white ">
          <h1 className="text-sm mb-2 font-semibold text-gray-600">HINTS</h1>

          <p className="text-sm text-gray-500 mt-1">
            Take explanation and approach hints for solving this question
          </p>

          <div className="mt-3 divide-y divide-gray-200">
            <button className="flex justify-between items-center w-full py-3 text-gray-700 hover:bg-gray-100 px-2 rounded-md">
              <span className="flex items-center gap-2">
                Question Explanation
                <IoIosInformationCircleOutline />
              </span>
              <span>&#x276F;</span>
            </button>

            <button className="flex justify-between items-center w-full py-3 text-gray-700 hover:bg-gray-100 px-2 rounded-md">
              <span className="flex items-center gap-2">
                Concepts to Use
                <IoIosInformationCircleOutline />
              </span>
              <span>&#x276F;</span>
            </button>

            <button className="flex justify-between items-center w-full py-3 text-gray-700 hover:bg-gray-100 px-2 rounded-md">
              <span className="flex items-center gap-2">
                Show Next Steps
                <IoIosInformationCircleOutline />
              </span>
              <span>&#x276F;</span>
            </button>

            <button className="flex justify-between items-center w-full py-3 text-gray-700 hover:bg-gray-100 px-2 rounded-md">
              <span className="flex items-center gap-2">
                Submission Review
                <IoIosInformationCircleOutline />
              </span>
              <span>&#x276F;</span>
            </button>
          </div>
        </div>

        <div className="w-full h-full border rounded-md flex flex-col">
          <AceEditor
            placeholder="Write your code here..."
            mode="javascript"
            theme="tomorrow"
            name="codeEditor"
            fontSize={14}
            lineHeight={19}
            showPrintMargin
            showGutter
            highlightActiveLine
            width="100%"
            height="88%"
            wrapEnabled
            setOptions={{
              enableLiveAutocompletion: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />

          {/* Bottom Panel */}
          <div className="border-t">
            <div className="flex bg-gray-100 text-sm">
              <button
                className="flex items-center px-[15px] py-2 hover:bg-gray-200 transition-colors"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? (
                  <FaChevronRight size={10} />
                ) : (
                  <FaChevronDown size={10} />
                )}
              </button>
              {["input", "output", "error"].map((tab) => (
                <div key={tab} className="p-1">
                  <button
                    className={`px-4 py-2 border-r hover:bg-gray-200 rounded-lg transition-colors ${
                      activeTab === tab ? "bg-white" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                </div>
              ))}
            </div>

            {!isCollapsed && (
              <div className="h-24 overflow-y-auto">
                {activeTab === "input" && (
                  <div className="h-full bg-white">
                    <AceEditor
                      placeholder=""
                      mode="javascript"
                      theme="tomorrow"
                      name="inputEditor"
                      fontSize={14}
                      lineHeight={19}
                      showPrintMargin
                      showGutter
                      highlightActiveLine
                      width="100%"
                      height="100%"
                      wrapEnabled
                      setOptions={{
                        enableLiveAutocompletion: true,
                        showLineNumbers: true,
                        tabSize: 2,
                      }}
                    />
                  </div>
                )}
                {activeTab === "output" && (
                  <div className="p-3 text-gray-700">Output content...</div>
                )}
                {activeTab === "error" && (
                  <div className="p-3 text-red-500">Error content...</div>
                )}
              </div>
            )}
          </div>
        </div>
      </WrapperComponent>
    </div>
  );
};

export default Lecture;
