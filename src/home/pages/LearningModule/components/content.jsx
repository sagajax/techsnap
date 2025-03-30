import React, { useState } from "react";
import ResizableComponent from "./contentMode/canvasMode";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useSettingStore } from "../utils/store";
import RndResizableComponent from "./contentMode/resizableMode";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import SideBarRndResizableComponent from "./contentMode/sideBarMode";
import RndWithDraggableTabs from "./contentMode/tabMode";
import {
  IoIosCloseCircle,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

function Content() {
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
    <div className="relative h-[91vh] w-full">
      <WrapperComponent>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg ">
          <h1 className="text-3xl font-bold mb-6">Understanding SQL Queries</h1>

         
          <p className="text-gray-700 mb-4">
            SQL (Structured Query Language) is the standard language for
            interacting with relational databases. It allows you to perform
            various operations like retrieving, inserting, updating, and
            deleting data. Let's dive into a couple of examples to see how SQL
            queries are structured and executed.
          </p>

          {/* Example 1 */}
          <h2 className="text-2xl font-semibold mb-2">
            Example 1: Selecting Data
          </h2>
          <p className="text-gray-700 mb-4">
            The following SQL query retrieves all the records from the
            `employees` table where the employee's department is "Sales":
          </p>

          <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4">
            <pre className="whitespace-pre-wrap">
              <code>{`SELECT * FROM employees
WHERE department = 'Sales';`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-6">
            This query selects all columns from the `employees` table and
            filters the results to only include those where the `department`
            column has the value "Sales".
          </p>

          {/* Example 2 */}
          <h2 className="text-2xl font-semibold mb-2">
            Example 2: Inserting Data
          </h2>
          <p className="text-gray-700 mb-4">
            Next, consider an SQL query that inserts a new record into the
            `employees` table:
          </p>

          <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4">
            <pre className="whitespace-pre-wrap">
              <code>{`INSERT INTO employees (name, department, salary)
VALUES ('John Doe', 'Sales', 60000);`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-6">
            This query adds a new employee named "John Doe" to the "Sales"
            department with a salary of 60,000. The `INSERT INTO` statement is
            used to add new rows to a table.
          </p>

          {/* Example 3 */}
          <h2 className="text-2xl font-semibold mb-2">
            Example 3: Updating Data
          </h2>
          <p className="text-gray-700 mb-4">
            The following SQL query updates the salary of an employee in the
            `employees` table:
          </p>

          <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4">
            <pre className="whitespace-pre-wrap">
              <code>{`UPDATE employees
SET salary = 70000
WHERE name = 'John Doe';`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-6">
            This query modifies the salary of "John Doe" in the `employees`
            table, setting it to 70,000. The `UPDATE` statement is used to
            modify existing records in a table.
          </p>

          {/* Conclusion */}
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-gray-700">
            SQL is a powerful tool for managing and manipulating data in
            relational databases. These examples are just a glimpse of what you
            can achieve with SQL. As you explore more, you'll find that SQL
            provides a comprehensive set of commands to handle complex data
            operations efficiently.
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
            height="100%"
            wrapEnabled
            setOptions={{
              enableLiveAutocompletion: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />

          <div className="border-t ">
            <div className="flex bg-gray-100 text-sm">
              <button
                className="flex items-center px-[15px] py-2  hover:bg-gray-200 transition-colors"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? (
                  <FaChevronRight size={10} />
                ) : (
                  <FaChevronDown size={10} />
                )}
              </button>
              {["input", "output", "error"].map((tab) => (
                <div className="p-1 ">
                  <button
                    key={tab}
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
                  <div className=" text-gray-700 h-full bg-white">
                    <AceEditor
                      placeholder=""
                      mode="javascript"
                      theme="tomorrow"
                      name="codeEditor"
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
}

export default Content;
