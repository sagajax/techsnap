import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaChevronDown, FaChevronRight, FaEdit, FaPlus } from "react-icons/fa";
import img from "./assets/10303.svg";
import img1 from "./assets/10307.svg";
import img2 from "./assets/10315.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const data = Array.from({ length: 5 }, (_, i) => ({
  title: `Techsnap Fab Version ${i + 1}`,
  items: Array.from({ length: 8 }, (_, j) => ({
    id: `TS-${(i + 1) * 100 + j + 1}`,
    logo: [img, img1, img2][Math.floor(Math.random() * 3)],
    title: [
      "Category page",
      "Topic page",
      "Topic detail page",
      "Community guide page",
      "Topic create page",
      "Frontend integration",
      "Datasnap write",
      "API implementation"
    ][j % 8],
    type: ["FORUM", "DATASNAP", "API", "UI"][j % 4],
    status: ["TO DO", "IN PROGRESS", "UNDER REVIEW", "DONE"][j % 4]
  }))
}));

const epicItems = Array.from({ length: 20 }, (_, i) => ({
  name: [
    "Dashboard",
    "My feed",
    "Topics",
    "Competitions",
    "Leaderboard",
    "Analytics",
    "User Management",
    "Content Library"
  ][i % 8],
  progress: `${Math.floor(Math.random() * 41) + 60}%`,
  color: "bg-purple-500"
}));

export default function Backlog({compact=false}) {
  const [state, setState] = useState(data);
  const [openSections, setOpenSections] = useState({});
  const [openSprintSections, setOpenSprintSections] = useState({});
  const [epicOpenSections, setEpicOpenSections] = useState({});
  const [startSprintPopup, setStartSprintPopup] = useState(false);
  const [sprintName, setSprintName] = useState("");
  const [duration, setDuration] = useState("custom");
  const [startDate, setStartDate] = useState("2024-08-09T19:00");
  const [endDate, setEndDate] = useState("2024-08-10T18:02");
  const [sprintGoal, setSprintGoal] = useState("");

  const toggleSprintSection = (sectionIndex) => {
    setOpenSprintSections(prev => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex]
    }));
  };

  const toggleBacklogSection = (sectionIndex) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex]
    }));
  };

  const toggleEpicSection = (index) => {
    setEpicOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleClick = () => {
    setStartSprintPopup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStartSprintPopup(false);
  };

  const onDragEnd = (result, sectionIndex) => {
    if (!result.destination) return;
    const newState = [...state];
    const [movedItem] = newState[sectionIndex].items.splice(
      result.source.index,
      1
    );
    newState[sectionIndex].items.splice(result.destination.index, 0, movedItem);
    setState(newState);
  };

  const renderSprintSection = (section, sectionIndex, isCurrent = false) => (
    <div key={sectionIndex} className={`bg-gray-100 w-full ${compact ? 'px-1' : 'px-2'} rounded-md mb-2`}>
      <div className="flex justify-between">
        <div
          className={`flex items-center cursor-pointer space-x-1 ${compact ? 'py-1' : 'py-2'} ${compact ? 'px-1' : 'px-2'}`}
          onClick={() => toggleSprintSection(sectionIndex)}
        >
          <button className="text-gray-600 mt-1 text-sm">
            {openSprintSections[sectionIndex] ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          <span className={`${compact ? 'text-xs' : 'text-sm'} font-semibold`}>{section.title}</span>
        </div>
        <div className={`flex gap-2 justify-center items-center ${compact ? 'p-1' : 'p-2'}`}>
          <div className="flex gap-1 justify-center items-center">
            <span className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} flex items-center justify-center rounded-full bg-gray-300 text-white ${compact ? 'text-xs' : 'text-sm'}`}>
              {section.items.filter(item => item.status === "TO DO").length}
            </span>
            <span className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} flex items-center justify-center rounded-full bg-blue-600 text-white ${compact ? 'text-xs' : 'text-sm'}`}>
              {section.items.filter(item => item.status === "IN PROGRESS").length}
            </span>
            <span className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} flex items-center justify-center rounded-full bg-green-700 text-white ${compact ? 'text-xs' : 'text-sm'}`}>
              {section.items.filter(item => item.status === "DONE").length}
            </span>
          </div>
          <button
            className={`${compact ? 'px-1 py-0.5 text-xs' : 'px-2 py-1 text-sm'} rounded border bg-gray-300`}
            onClick={handleClick}
          >
            {section.items.length > 0 ? "Complete Sprint" : "Start Sprint"}
          </button>
        </div>
      </div>

      {openSprintSections[sectionIndex] && (
        <DragDropContext onDragEnd={(result) => onDragEnd(result, sectionIndex)}>
          <Droppable droppableId={`items-list-${sectionIndex}`}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className={`my-${compact ? '1' : '2'}`}>
                <table className="w-full bg-white border border-gray-300">
                  <tbody>
                    {section.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <tr
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`cursor-pointer border ${snapshot.isDragging ? "bg-blue-50" : ""}`}
                          >
                            <td className={`${compact ? 'px-1' : 'px-2'}`}>
                              <img src={item.logo} alt="" className={`${compact ? 'w-4 h-4' : 'w-6 h-6'}`} />
                            </td>
                            <td className={`${compact ? 'py-0.5 px-2' : 'py-1 px-4'} ${compact ? 'text-xs' : 'text-sm'}`}>
                              {item.id}
                            </td>
                            <td className={`${compact ? 'py-0.5 px-2' : 'py-1 px-4'} ${compact ? 'text-xs' : 'text-sm'}`}>
                              {item.title}
                            </td>
                            {!compact &&<td className={`${compact ? 'py-0.5 px-2' : 'py-1 px-4'} ${compact ? 'text-xs' : 'text-sm'}`}>
                              <span className="bg-indigo-500 bg-opacity-30 rounded-md p-1 text-xs">
                                {item.type}
                              </span>
                            </td>}
                            <td className={`${compact ? 'py-0.5 px-2 text-[.6rem]' : 'py-1 px-4 text-xs'}`}>
                              <span className="bg-blue-500 bg-opacity-30 rounded-md p-1 text-blue-600 ">
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </tbody>
                </table>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );

  return (
    <div className={`w-full flex overflow-x-auto  ${compact ? 'p-2 h-full' : 'p-4 mb-auto'} gap-2`}>
      {!compact && <div className="w-[30%]">
        <div className="w-full text-left text-black border rounded-t-md shadow-md">
          <span className="text-left text-black flex px-2 py-3 text-sm bg-gray-100 w-full mb-2 rounded-t-md">
            Epics
          </span>
          <div className="px-2 overflow-y-auto h-[80vh] custom-scrollbar">
            {epicItems.map((item, index) => (
              <div key={index} className="bg-white rounded-md p-2 mb-2 border hover:bg-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <button onClick={() => toggleEpicSection(index)} className="text-blue-600">
                    {epicOpenSections[index] ? (
                      <FaAngleUp size={12} className="text-black rotate-180" />
                    ) : (
                      <FaAngleDown size={12} className="-rotate-90 text-black" />
                    )}
                  </button>
                  <div className="flex items-center">
                    <span className={`w-4 h-4 ${item.color} inline-block rounded-md mr-2`}></span>
                    <span className="text-sm">{item.name}</span>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-1 mb-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: item.progress }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-300"
                    ></div>
                  </div>
                </div>
                {epicOpenSections[index] && (
                  <div className="text-sm text-gray-600">
                    <p>Start date: None</p>
                    <p>Due date: None</p>
                    <button className="mt-2 border w-full p-2 bg-gray-300">View Details</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>}

      <div className={`w-full overflow-y-scroll custom-scrollbar `}>
        <div className={`${compact ? 'text-sm' : 'text-base'} font-semibold ${compact ? 'my-2' : 'my-4'}`}>Current Sprint</div>
        {renderSprintSection(state[0], 0, true)}

        <div className={`${compact ? 'text-sm' : 'text-base'} font-semibold ${compact ? 'my-2' : 'my-4'}`}>Backlog</div>

        {state.slice(1,).map((section, index) => renderSprintSection(section, index+1, false))}
      

        {startSprintPopup && !compact && (
          <div className="fixed inset-0 z-50 bg-black/80">
            <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg sm:rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Start another sprint</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Sprint name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={sprintName}
                    onChange={(e) => setSprintName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Duration <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  >
                    <option value="custom">Custom</option>
                    <option value="1week">1 Week</option>
                    <option value="2weeks">2 Weeks</option>
                    <option value="3weeks">3 Weeks</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Start date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    End date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Sprint goal
                  </label>
                  <textarea
                    value={sprintGoal}
                    onChange={(e) => setSprintGoal(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    rows="4"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setStartSprintPopup(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Start Sprint
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
