// src/components/CalendarComponent.jsx
import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  PanelLeft,
  Plus,
  CalendarDaysIcon,
  Search
} from "lucide-react";
import EventModal from "./EventModal";
import EventDetails from "./EventDetails";
import { formatDate } from "@fullcalendar/core";
import { useSelector, useDispatch } from "react-redux";
import "./calender.css";
import { DAILY_REMINDERS } from "./Habits";
import logo from "../assets/calendar/logo.png";
import { addEvent, updateEvent } from "../store/slices/eventSlice";
import { updateMeetingEvent } from "../store/slices/meetingSlice";

const calendarStyles = ``;
const createEventId = () => String(new Date().getTime());
const MAX_CONCURRENT_EVENTS = 10;

export default function CalendarComponent() {
  const dispatch = useDispatch();
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    date: new Date().toISOString().split("T")[0],
    startTime: "09:00",
    endTime: "10:00",
  });
  const [showEvent, setShowEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [layoutDropdownOpen, setLayoutDropdownOpen] = useState(false);
  const [currentView, setCurrentView] = useState("timeGridWeek");
  const [highlightedEventId, setHighlightedEventId] = useState(null);
  const calendarRef = useRef(null);

  // Get meeting events from Redux; these should contain startTime and endTime fields.
  const meetingEvents = useSelector(
    (state) => (state.meeting && state.meeting.meetingEvents) || []
  );
  const storeEvents = useSelector(
    (state) => (state.event && state.event.events) || []
  );

  const LAYOUT_OPTIONS = [
    { name: "Month", value: "dayGridMonth" },
    { name: "Week", value: "timeGridWeek" },
    { name: "Day", value: "timeGridDay" },
    { name: "3 Days", value: "threeDay" },
    { name: "4 Days", value: "fourDay" },
    { name: "5 Days", value: "fiveDay" },
  ];

  const checkEventLimit = (startTime, endTime, excludeEventId = null) => {
    if (!calendarRef.current) return true;
    const calendarApi = calendarRef.current.getApi();
    const events = calendarApi.getEvents();
    const concurrentEvents = events.filter((event) => {
      if (excludeEventId && event.id === excludeEventId) return false;
      const eventStart = event.start;
      const eventEnd = event.end || event.start;
      const newEventStart = new Date(startTime);
      const newEventEnd = new Date(endTime);
      return (
        (newEventStart >= eventStart && newEventStart < eventEnd) ||
        (newEventEnd > eventStart && newEventEnd <= eventEnd) ||
        (newEventStart <= eventStart && newEventEnd >= eventEnd)
      );
    });
    return concurrentEvents.length < MAX_CONCURRENT_EVENTS;
  };

  const handleLayoutChange = (view) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
    setCurrentView(view);
    setLayoutDropdownOpen(false);
  };

  const handleDateSelect = (selectInfo) => {
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    const startTime = selectInfo.startStr.split("T")[1]?.slice(0, 5) || "09:00";
    const endTime = selectInfo.endStr.split("T")[1]?.slice(0, 5) || "10:00";
    setModalData({
      ...modalData,
      date: selectInfo.startStr.split("T")[0],
      startTime: startTime,
      endTime: endTime,
    });
    setModalOpen(true);
  };

  const handleEventClick = (clickInfo) => {
    const event = clickInfo.event;
    setHighlightedEventId(event.id);
    const rawStart = event.start ? event.start.toISOString() : "";
    const rawEnd = event.end ? event.end.toISOString() : "";
    setSelectedEvent({
      id: event.id,
      title: event.title,
      start: formatDate(event.start, { hour: "2-digit", minute: "2-digit" }),
      end: formatDate(event.end, { hour: "2-digit", minute: "2-digit" }),
      rawStart,
      rawEnd,
      description: event.extendedProps.description || "No description",
      extendedProps: event.extendedProps,
    });
    setShowEvent(true);
  };

  // When an event is moved (drag/drop)
  const handleEventDrop = (dropInfo) => {
    if (
      !checkEventLimit(
        dropInfo.event.start,
        dropInfo.event.end,
        dropInfo.event.id
      )
    ) {
      alert(
        `Cannot move event. Maximum ${MAX_CONCURRENT_EVENTS} events allowed per time slot.`
      );
      dropInfo.revert();
      return;
    }
    // If it's a meeting event, update its times in Redux.
    if (dropInfo.event.id.startsWith("meeting-")) {
      dispatch(
        updateMeetingEvent({
          id: dropInfo.event.id,
          title: dropInfo.event.title,
          // Update both the top-level startTime and endTime:
          startTime: dropInfo.event.start.toISOString(),
          endTime: dropInfo.event.end
            ? dropInfo.event.end.toISOString()
            : dropInfo.event.start.toISOString(),
          extendedProps: {
            ...dropInfo.event.extendedProps,
            rawStart: dropInfo.event.start.toISOString(),
            rawEnd: dropInfo.event.end
              ? dropInfo.event.end.toISOString()
              : dropInfo.event.start.toISOString(),
          },
        })
      );
    } else {
      // Handle non‑meeting events if needed.
    }
  };

  // When an event is resized (stretched)
  const handleEventResize = (resizeInfo) => {
    const updatedEvent = resizeInfo.event;
    if (!checkEventLimit(updatedEvent.start, updatedEvent.end, updatedEvent.id)) {
      alert(`Cannot stretch event. Maximum overlapping events exceeded.`);
      resizeInfo.revert();
      return;
    }
    if (updatedEvent.id.startsWith("meeting-")) {
      dispatch(
        updateMeetingEvent({
          id: updatedEvent.id,
          title: updatedEvent.title,
          startTime: updatedEvent.start.toISOString(),
          endTime: updatedEvent.end
            ? updatedEvent.end.toISOString()
            : updatedEvent.start.toISOString(),
          extendedProps: {
            ...updatedEvent.extendedProps,
            rawStart: updatedEvent.start.toISOString(),
            rawEnd: updatedEvent.end
              ? updatedEvent.end.toISOString()
              : updatedEvent.start.toISOString(),
          },
        })
      );
    } else if (!updatedEvent.extendedProps?.isRecurring) {
      dispatch(
        updateEvent({
          id: updatedEvent.id,
          data: {
            start: updatedEvent.start,
            end: updatedEvent.end,
          },
        })
      );
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalData({
      title: "",
      date: new Date().toISOString().split("T")[0],
      startTime: "09:00",
      endTime: "10:00",
    });
  };

  const handleManualEventAdd = () => {
    if (
      !modalData.title ||
      !modalData.date ||
      !modalData.startTime ||
      !modalData.endTime
    ) {
      alert("Please fill in all fields");
      return;
    }

    const startDateTime = new Date(`${modalData.date}T${modalData.startTime}`);
    const endDateTime = new Date(`${modalData.date}T${modalData.endTime}`);

    if (endDateTime <= startDateTime) {
      alert("End time must be after start time");
      return;
    }

    if (!checkEventLimit(startDateTime, endDateTime)) {
      alert(`Cannot add more than ${MAX_CONCURRENT_EVENTS} overlapping events`);
      return;
    }
    const calendarApi = calendarRef.current.getApi();
    const existingEvents = calendarApi.getEvents().filter((event) => {
      const eventStart = event.start;
      const eventEnd = event.end || event.start;
      return (
        (startDateTime >= eventStart && startDateTime < eventEnd) ||
        (endDateTime > eventStart && endDateTime <= eventEnd) ||
        (startDateTime <= eventStart && endDateTime >= eventEnd)
      );
    });
    const newEvent = {
      id: createEventId(),
      title: modalData.title,
      start: startDateTime,
      end: endDateTime,
      classNames: existingEvents.length > 0 ? ["fc-event-overlay"] : [],
    };
    calendarApi.addEvent(newEvent);
    dispatch(addEvent(newEvent));
    closeModal();
  };

  const handleSidebarToggle = (newState) => {
    setShowEvent(newState);
    if (!newState) {
      setHighlightedEventId(null);
    }
  };

  // When meetingEvents change, remove all existing meeting events from the calendar
  // and re-add them using their updated startTime and endTime.
  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.getEvents().forEach((event) => {
        if (event.id && event.id.startsWith("meeting-")) {
          event.remove();
        }
      });
      meetingEvents.forEach((meeting) => {
        calendarApi.addEvent({
          ...meeting,
          start: new Date(meeting.startTime),
          end: new Date(meeting.endTime),
        });
      });
    }
  }, [meetingEvents]);

  // Handle custom events from the Redux event slice.
  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();

      // Remove custom events that are no longer in the Redux store.
      calendarApi.getEvents().forEach((event) => {
        if (
          (event.id && event.id.startsWith("meeting-")) ||
          event.extendedProps?.isRecurring
        ) {
          return;
        }
        const existsInStore = storeEvents.some((ev) => ev.id === event.id);
        if (!existsInStore) {
          event.remove();
        }
      });

      // Add events from the Redux store if they’re not already in the calendar.
      storeEvents.forEach((ev) => {
        if (!calendarApi.getEventById(ev.id)) {
          calendarApi.addEvent({
            ...ev,
            start: new Date(ev.start),
            end: new Date(ev.end),
          });
        }
      });
    }
  }, [storeEvents]);

  // Initial setup: add recurring daily reminders.
  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      // Remove any existing recurring events.
      calendarApi.getEvents().forEach((event) => {
        if (event.extendedProps?.isRecurring) {
          event.remove();
        }
      });
      // Add daily reminders from habits.
      DAILY_REMINDERS.forEach((reminder) => {
        calendarApi.addEventSource({
          events: [
            {
              title: reminder.title,
              startTime: reminder.startTime,
              endTime: reminder.endTime,
              daysOfWeek: reminder.daysOfWeek,
              borderColor: reminder.borderColor,
              backgroundColor: reminder.backgroundColor,
              textColor: reminder.textColor,
              className: reminder.className,
              extendedProps: {
                isRecurring: true,
                description: "Recurring daily reminder",
              },
            },
          ],
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 overflow-hidden">
      <style>{calendarStyles}</style>
      <div className="w-full flex justify-between items-center mb-4">
        <div>
          <img src={logo} alt="logo" className="h-9" />
        </div>
        <div className="mb-4 flex gap-2 relative">
          <button
            onClick={() => setModalOpen(true)}
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
          <button
            onClick={() => setLayoutDropdownOpen(!layoutDropdownOpen)}
            className="flex items-center gap-2 text-black bg-gray-100 rounded-xl hover:bg-white"
          >
            <CalendarDaysIcon size={18} />
          </button>
          {layoutDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md border z-50 text-black">
              {LAYOUT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleLayoutChange(option.value)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {option.name}
                </button>
              ))}
            </div>
          )}
          <button
            className="text-black"
            onClick={() => handleSidebarToggle(!showEvent)}
          >
            <PanelLeft size={18} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 relative">
        <div
          className="flex-1 bg-[#f7f8fc] shadow-md rounded-lg p-4"
          style={{ overflowY: "auto" }}
        >
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "title",
              center: "",
              right: "prev,next",
            }}
            titleFormat={{ year: "numeric", month: "long" }}
            initialView={currentView}
            editable
            selectable
            selectMirror
            dayMaxEvents
            allDaySlot={false}
            weekends={weekendsVisible}
            eventContent={(eventInfo) =>
              renderEventContent(eventInfo, highlightedEventId)
            }
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventDrop={handleEventDrop}
            eventResize={handleEventResize}
            nowIndicator={true}
            height="85vh"
            slotDuration="00:15:00"
            slotEventOverlap={true}
            eventMaxStack={10}
            slotMinTime="00:00:00"
            slotMaxTime="24:00:00"
            expandRows={true}
            views={{
              timeGridWeek: {
                dayHeaderFormat: { day: "numeric", weekday: "short" },
                slotLabelFormat: {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                },
              },
              threeDay: {
                type: "timeGrid",
                duration: { days: 3 },
              },
              fourDay: {
                type: "timeGrid",
                duration: { days: 4 },
              },
              fiveDay: {
                type: "timeGrid",
                duration: { days: 5 },
              },
            }}
          />
        </div>

        {showEvent && (
          <div className="h-screen w-[300px] -right-10 shadow-xl z-10 bg-[#f7f8fc] rounded-lg p-4">
            <EventDetails
              event={selectedEvent}
              onClose={() => setShowEvent(false)}
            />
          </div>
        )}
      </div>

      {modalOpen && (
        <EventModal
          modalData={modalData}
          setModalData={setModalData}
          handleModalSubmit={handleManualEventAdd}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

function renderEventContent(eventInfo, highlightedEventId) {
  const isHighlighted = eventInfo.event.id === highlightedEventId;
  const isRecurring = eventInfo.event.extendedProps.isRecurring;
  const currentTime = new Date();
  const isFutureEvent = eventInfo.event.start > currentTime;

  let className = "p-0 m-0 h-full w-full overflow-hidden ";
  if (isRecurring) {
    className += eventInfo.event.classNames.join(" ");
  } else if (isHighlighted) {
    className +=
      "bg-[#e0e0e0] border-2 rounded-2xl border-blue-500 selected-event shadow-xl shadow-blue-500 text-[#3c3e48] ";
  } else if (isFutureEvent) {
    className += "bg-[#d0d7e5] text-[#3c3e48] font-[600] ";
  } else {
    className += "bg-[#cdd1ea] text-[#3c3e48] font-[600] ";
  }

  return (
    <div className={className}>
      <div className="px-1 py-0.5">
        <div className="font-bold truncate">{eventInfo.event.title}</div>
        {eventInfo.event._instance.range.end -
          eventInfo.event._instance.range.start <=
        900000 ? null : (
          <div className="text-xs opacity-90">{eventInfo.timeText}</div>
        )}
      </div>
    </div>
  );
}
