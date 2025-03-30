import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { FaPlus } from "react-icons/fa";
import IssueModal from "../contents/IssueModal";
import { useNavigate } from "react-router-dom";
import logo from "../assets/calendar/logo.png";
import { Plus, Search, CalendarDaysIcon, PanelLeft } from "lucide-react";

function Priorities() {
  const [issueOpen, setIssueOpen] = useState(false);
  const [issuePopupId, setIssuePopupId] = useState("");
  const handleIssuePopup = (id) => {
    setIssueOpen(true);
    setIssuePopupId(id);
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/viewissues");
  };
  const [columns, setColumns] = useState([
    {
      title: "To Do",
      tasks: [
        { title: "Mini hacks", label: "PRACTICE", id: "TS-75", assignee: "AS", priority: "high" },
        { title: "XP redeem page", label: "DASHBOARD", id: "TS-95", assignee: "AS", priority: "medium" },
      ],
    },
    {
      title: "In Progress",
      tasks: [
        { title: "Feature implementation", label: "DEV", id: "TS-80", assignee: "AS", priority: "high" },
      ],
    },
    { title: "Under Review", tasks: [] },
    { title: "QA Fail", tasks: [] },
  ]);

  const getPriorityColor = (priority) => {
    const colors = {
      high: "bg-red-100 text-red-600",
      medium: "bg-yellow-100 text-yellow-600",
      low: "bg-green-100 text-green-600",
    };
    return colors[priority] || colors.medium;
  };

  const Task = ({ title, id, assignee, priority, label }) => (
    <div className="bg-white  p-3 rounded shadow-md mb-2 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-500">{label}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(priority)}`}>
          {priority}
        </span>
      </div>
      <h3 className="text-sm font-medium mb-2 line-clamp-2">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600 hover:bg-green-600 hover:text-white p-1 rounded-xl" onClick={() => handleIssuePopup(id)}>{id}</span>
        <div className="flex items-center space-x-2">
          <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">{assignee}</span>
        </div>
      </div>
    </div>
  );

  const addColumn = () => {
    setColumns([...columns, { title: "New Column", tasks: [] }]);
  };

  const addTask = (columnIndex) => {
    const newTask = {
      title: "New Task",
      label: "NEW",
      id: `TS-${Math.floor(Math.random() * 1000)}`,
      assignee: "AS",
      priority: "medium",
    };
    const updatedColumns = [...columns];
    updatedColumns[columnIndex].tasks.push(newTask);
    setColumns(updatedColumns);
  };

  const updateColumnTitle = (index, title) => {
    const updatedColumns = [...columns];
    updatedColumns[index].title = title;
    setColumns(updatedColumns);
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    const sourceColIndex = parseInt(source.droppableId);
    const destColIndex = parseInt(destination.droppableId);

    const sourceCol = columns[sourceColIndex];
    const destCol = columns[destColIndex];

    const [movedTask] = sourceCol.tasks.splice(source.index, 1);
    destCol.tasks.splice(destination.index, 0, movedTask);

    const updatedColumns = [...columns];
    updatedColumns[sourceColIndex] = sourceCol;
    updatedColumns[destColIndex] = destCol;
    setColumns(updatedColumns);
  };

  return (
    <div className="h-full w-full flex flex-col p-2 text-black bg-[#f3f4f6]">
      <div className="w-full flex justify-between items-center mb-4">
        <div>
          <img src={logo} alt="logo" className="h-9" />
        </div>
        <div className="mb-4 flex gap-2 relative">
          <button
            onClick={() => addTask(0)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-black rounded-xl hover:bg-white text-sm"
          >
            <Plus size={14} />
            Add Event
          </button>
          <button className="text-black">
            <Search size={18} />
          </button>
          <button className="text-white text-sm bg-[#5263f3] p-2 rounded-full">
            Upgrade Now
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full h-full overflow-x-auto">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex py-4 px-2 h-full w-full overflow-auto flex-row flex-wrap gap-5 justify-center">
            {columns.map((column, columnIndex) => (
              <Droppable key={columnIndex} droppableId={`${columnIndex}`}>
                {(provided) => (
                  <div
                    className=" w-[75%] md:w-72 mr-4 flex flex-col bg-[#f7f8fc] rounded-lg shadow-xl shadow-gray-300 h-auto"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >

                    <div className="p-3 flex items-center justify-between bg-white rounded-t-lg border-b ">
                      <input
                        type="text"
                        value={column.title}
                        onChange={(e) => updateColumnTitle(columnIndex, e.target.value)}
                        className="text-sm font-semibold text-gray-700 border-none focus:ring-0"
                      />
                      <button
                        onClick={() => addTask(columnIndex)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                    <div className="flex-1 p-2  overflow-y-auto">
                      {/* {column.tasks.length === 0 && (
                        <div className="p-4 text-gray-400 text-center">
                          Drag tasks here
                        </div>
                      )} */}
                      {column.tasks.map((task, index) => (
                        <Draggable
                          key={`${task.id}-${index}`}
                          draggableId={`${task.id}-${index}`}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Task {...task} setIssueOpen={setIssueOpen} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
      <IssueModal isPopupOpen={issueOpen} closePopup={() => setIssueOpen(false)} IssuePopupId={issuePopupId} handleNavigate={handleNavigate} />
    </div>
  );
}

export default Priorities;
