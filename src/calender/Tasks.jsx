import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Plus, Search, CalendarDaysIcon, PanelLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/calendar/logo.png";
import EventModal from "./EventModal";
import { useSelector, useDispatch } from "react-redux";
import { addEvent, updateEvent } from "../store/slices/eventSlice";

function Tasks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => (state.event && state.event.events) || []);
  const now = new Date();
  const upNextEvents = events.filter((e) => new Date(e.start).getTime() >= now.getTime());
  const previousEvents = events.filter((e) => new Date(e.start).getTime() < now.getTime());
  const columns = {
    upnext: { title: "Up Next", tasks: upNextEvents },
    previous: { title: "Previous Tasks", tasks: previousEvents }
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    date: new Date().toISOString().split("T")[0],
    startTime: "09:00",
    endTime: "10:00"
  });
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      const eventItem = events.find((e) => e.id === draggableId);
      if (!eventItem) return;
      const start = new Date(eventItem.start);
      const end = new Date(eventItem.end);
      const duration = end.getTime() - start.getTime();
      const currentTime = new Date();
      if (source.droppableId === "previous" && destination.droppableId === "upnext") {
        const newStart = currentTime.toISOString();
        const newEnd = new Date(currentTime.getTime() + duration).toISOString();
        dispatch(updateEvent({ id: draggableId, data: { start: newStart, end: newEnd } }));
      } else if (source.droppableId === "upnext" && destination.droppableId === "previous") {
        alert("Up Next tasks cannot be moved to Previous tasks");
      }
    }
  };
  const handleAddTask = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalData({
      title: "",
      date: new Date().toISOString().split("T")[0],
      startTime: "09:00",
      endTime: "10:00"
    });
  };
  const handleManualEventAdd = () => {
    if (!modalData.title || !modalData.date || !modalData.startTime || !modalData.endTime) {
      alert("Please fill in all fields");
      return;
    }
    const startDateTime = new Date(`${modalData.date}T${modalData.startTime}`);
    const endDateTime = new Date(`${modalData.date}T${modalData.endTime}`);
    if (endDateTime <= startDateTime) {
      alert("End time must be after start time");
      return;
    }
    const newEvent = {
      id: String(new Date().getTime()),
      title: modalData.title,
      start: startDateTime.toISOString(),
      end: endDateTime.toISOString(),
      status: "upnext"
    };
    dispatch(addEvent(newEvent));
    closeModal();
  };
  return (
    <div className="h-full w-full flex flex-col p-2 text-black bg-[#f3f4f6]">
      <div className="w-full flex justify-between items-center mb-4">
        <div>
          <img src={logo} alt="logo" className="h-9" />
        </div>
        <div className="mb-4 flex gap-2 relative">
          <button onClick={handleAddTask} className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-black rounded-xl hover:bg-white text-sm">
            <Plus size={14} />
            Add Task
          </button>
          <button className="text-black">
            <Search size={18} />
          </button>
          <button className="text-white text-sm bg-[#5263f3] p-2 rounded-full">
            Upgrade Now
          </button>
          <button className="flex items-center gap-2 text-black bg-gray-100 rounded-xl hover:bg-white">
            <CalendarDaysIcon size={18} />
          </button>
          <button className="text-black">
            <PanelLeft size={18} />
          </button>
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-row w-full h-full overflow-x-auto gap-5 justify-center">
          {Object.entries(columns).map(([colId, colData]) => (
            <Droppable droppableId={colId} key={colId}>
              {(provided) => (
                <div className="w-[75%] md:w-72 mr-4 flex flex-col bg-[#f7f8fc] rounded-lg shadow-xl shadow-gray-300 h-auto" ref={provided.innerRef} {...provided.droppableProps}>
                  <div className="p-3 flex items-center justify-between bg-white rounded-t-lg border-b">
                    <h3 className="text-sm font-semibold text-gray-700">{colData.title}</h3>
                  </div>
                  <div className="flex-1 p-2 overflow-y-auto">
                    {colData.tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="bg-white p-3 rounded shadow-md mb-2 hover:shadow-xl transition-shadow">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-medium text-gray-500">{task.label || ""}</span>
                              <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-600">{task.priority || "medium"}</span>
                            </div>
                            <h3 className="text-sm font-medium mb-2 line-clamp-2">{task.title}</h3>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-600 p-1 rounded-xl">{task.id}</span>
                              <div className="flex items-center space-x-2">
                                <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">{task.assignee || ""}</span>
                              </div>
                            </div>
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
      {modalOpen && (
        <EventModal modalData={modalData} setModalData={setModalData} handleModalSubmit={handleManualEventAdd} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Tasks;
