import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaArrowDown } from "react-icons/fa6";
import "./../SnappyAI/sideBar.css";

const IssueList = () => {
  const [issues, setIssues] = useState([
    {
      id: "NEX-185",
      title: "Project Management",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-186",
      title: "Product Management",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-286",
      title: "Deployment Architecture - Mobile",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-272",
      title: "EL - Mobile App Approach",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-271",
      title: "EL - MDM & Enterprise App Store",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-183",
      title: "Engineering",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-246",
      title: "Security & Consent",
      type: "subtask",
      status: "open",
    },
    {
      id: "NEX-247",
      title: "Integration Layer",
      type: "subtask",
      status: "open",
    },
    {
      id: "NEX-699",
      title: "[No description provided]",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-185",
      title: "Project Management",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-186",
      title: "Product Management",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-286",
      title: "Deployment Architecture - Mobile",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-272",
      title: "EL - Mobile App Approach",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-271",
      title: "EL - MDM & Enterprise App Store",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-183",
      title: "Engineering",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-246",
      title: "Security & Consent",
      type: "subtask",
      status: "open",
    },
    {
      id: "NEX-247",
      title: "Integration Layer",
      type: "subtask",
      status: "open",
    },
    {
      id: "NEX-699",
      title: "[No description provided]",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-185",
      title: "Project Management",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-186",
      title: "Product Management",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-286",
      title: "Deployment Architecture - Mobile",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-272",
      title: "EL - Mobile App Approach",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-271",
      title: "EL - MDM & Enterprise App Store",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-183",
      title: "Engineering",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-246",
      title: "Security & Consent",
      type: "subtask",
      status: "open",
    },
    {
      id: "NEX-247",
      title: "Integration Layer",
      type: "subtask",
      status: "open",
    },
    {
      id: "NEX-699",
      title: "[No description provided]",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-185",
      title: "Project Management",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-186",
      title: "Product Management",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-286",
      title: "Deployment Architecture - Mobile",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-272",
      title: "EL - Mobile App Approach",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-271",
      title: "EL - MDM & Enterprise App Store",
      type: "task",
      status: "open",
    },
    {
      id: "NEX-183",
      title: "Engineering",
      type: "epic",
      status: "in_progress",
    },
    {
      id: "NEX-246",
      title: "Security & Consent",
      type: "subtask",
      status: "open",
    },
    {
      id: "NEX-247",
      title: "Integration Layer",
      type: "subtask",
      status: "open",
    },
    {
      id: "NEX-699",
      title: "[No description provided]",
      type: "task",
      status: "open",
    },
  ]);

  const [selectedIssues, setSelectedIssues] = useState(new Set());
  const [sortBy, setSortBy] = useState("priority");
  const [sortOrder, setSortOrder] = useState("DESC");

  const handleCheckboxChange = (id) => {
    setSelectedIssues((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedIssues = Array.from(issues);
    const [reorderedItem] = reorderedIssues.splice(result.source.index, 1);
    reorderedIssues.splice(result.destination.index, 0, reorderedItem);

    setIssues(reorderedIssues);
  };

  const getIssueTypeIcon = (type) => {
    switch (type) {
      case "epic":
        return (
          <div className="h-5 w-5 rounded-full bg-purple-400 flex items-center justify-center">
            <span className="text-white text-xs">E</span>
          </div>
        );
      case "subtask":
        return (
          <div className="h-5 w-5 rounded flex items-center justify-center bg-blue-400">
            <span className="text-white text-xs">S</span>
          </div>
        );
      default:
        return (
          <div className="h-5 w-5 rounded flex items-center justify-center bg-blue-100">
            <span className="text-blue-600 text-xs">T</span>
          </div>
        );
    }
  };

  return (
    <div className="flex  w-full h-screen">
      <div className="max-w-7xl w-[35%] self-start py-2">
        <div className="bg-gray-200 p-2 rounded-md mb-4 flex items-center justify-between">
          <div className="flex items-center text-sm justify-between w-full ">
            Current Epics
            <select
              value={`${sortBy}_${sortOrder.toLowerCase()}`}
              onChange={(e) => {
                const [newSortBy, newSortOrder] = e.target.value.split("_");
                setSortBy(newSortBy);
                setSortOrder(newSortOrder.toUpperCase());
              }}
              className="rounded-md w-1/2 border-gray-300 text-sm py-1"
            >
              <option value="priority_desc">Order </option>
              <option value="created_desc">Order by Created Date</option>
              <option value="updated_desc">Order by Updated Date</option>
            </select>
          </div>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="issues">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-white rounded-md overflow-auto custom-scrollbar max-h-[82vh]"
              >
                <ul className="divide-y divide-gray-200">
                  {issues.map((issue, index) => (
                    <Draggable
                      key={issue.id}
                      draggableId={issue.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`hover:bg-gray-50 flex flex-col px-4 py-2 ${
                            snapshot.isDragging ? "bg-blue-50" : ""
                          }`}
                        >
                          <div className="flex gap-2 ">
                            {getIssueTypeIcon(issue.type)}
                            <div className="flex flex-col">
                              <div className="flex gap-2 ">
                                <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                                  {issue.id}
                                </span>
                              </div>

                              <span className="text-sm text-gray-900">
                                {issue.title}
                              </span>
                            </div>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="w-full border flex flex-col justify-between">
      <div className=" bg-white p-6  overflow-y-scroll h-[85vh] custom-scrollbar ">
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
        <div className="bg-white border-t border-t-gray-400 p-2 flex justify-between items-center ">
          Powered by Techsnap
          <div className="space-x-2">
          <button className="border border-black text-sm rounded-sm px-2 py-1">
            Previous Task
          </button>
          <button className="border border-black text-sm rounded-sm px-2 py-1">Next Task</button>
        </div></div>
      </div>
    </div>
  );
};

export default IssueList;
