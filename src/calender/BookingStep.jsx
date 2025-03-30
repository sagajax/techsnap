// src/components/BookingStep.jsx
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import "./calender.css";
import { Clock, MapPin } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateMeetingEvent } from "../store/slices/meetingSlice";
import EventSettingsPanel from "./EventSettingsPanel";
import parseTimeSlot from "../utils/parseTimeSlot";

const BookingStep = ({
  meetingData,
  selectedDate,
  onDateChange,
  timeslots,
  selectedTimeslot,
  setSelectedTimeslot,
  setStep,
}) => {
  const dispatch = useDispatch();

  const [localMeeting, setLocalMeeting] = useState(() => {
    return { ...meetingData };
  });

  // Handle date changes to update the meeting state
  useEffect(() => {
    if (selectedDate && localMeeting) {
      const updatedMeeting = {
        ...localMeeting,
        startDate: selectedDate.toISOString(),
      };
      setLocalMeeting(updatedMeeting);
      
      // If a timeslot is already selected, update the full datetime
      if (selectedTimeslot) {
        handleTimeSelection(selectedTimeslot);
      }
      
      console.log("Selected date:", selectedDate);
      setTimeout(() => {
        const activeEls = document.querySelectorAll('.react-calendar__tile--active');
        console.log("Active elements found:", activeEls.length);
      }, 100);
    }
  }, [selectedTimeslot]);

  if (!localMeeting || !localMeeting.id) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5b6cf3]" />
      </div>
    );
  }

  const handleTimeSelection = (timeslot) => {
    setSelectedTimeslot(timeslot);

    if (selectedDate && localMeeting) {
      const parsed = parseTimeSlot(timeslot);
      if (parsed) {
        const { hours, minutes } = parsed;
        
        const selectedDateTime = new Date(selectedDate);
        selectedDateTime.setHours(hours, minutes, 0, 0);

        let duration = 60; // Default duration
        const meetingDuration = localMeeting?.extendedProps?.duration;
        if (meetingDuration) {
          duration = Array.isArray(meetingDuration) 
            ? meetingDuration[0] 
            : parseInt(meetingDuration, 10);
        }
        
        // Calculate end time by adding duration to start time
        const endDateTime = new Date(selectedDateTime.getTime() + duration * 60 * 1000);

        // Create updated meeting object with new times
        const updatedMeeting = {
          ...localMeeting,
          start: selectedDateTime.toISOString(),
          end: endDateTime.toISOString(),
          startTime: selectedDateTime.toISOString(), // Match with reducer expectations
          endTime: endDateTime.toISOString(), // Match with reducer expectations
          extendedProps: {
            ...localMeeting.extendedProps,
            rawStart: selectedDateTime.toISOString(),
            rawEnd: endDateTime.toISOString(),
          },
        };
        
        // Update local state and dispatch to Redux
        setLocalMeeting(updatedMeeting);
        dispatch(updateMeetingEvent(updatedMeeting));
        
        console.log('Updated meeting event:', {
          date: selectedDate.toDateString(),
          timeslot,
          startTime: selectedDateTime.toISOString(),
          endTime: endDateTime.toISOString(),
          duration
        });
      }
    }
  };

  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const maxAllowed = new Date(today);
      maxAllowed.setDate(today.getDate() + 30);

      // Define the allowed meeting date range.
      const meetingStart = new Date(localMeeting.startDate);
      const meetingEnd = new Date(localMeeting.endDate);

      // Disable dates that are outside the meeting's allowed range.
      if (date < meetingStart || date > meetingEnd) {
        return true;
      }

      // Also disable dates before today, after maxAllowed, or on Sundays.
      return date < today || date > maxAllowed || date.getDay() === 0;
    }
    return false;
  };

  // Custom tile class function to ensure active state
  const tileClassName = ({ date, view }) => {
    if (
      selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    ) {
      return 'react-calendar__tile--custom-active';
    }
    return null;
  };

  return (
    <div className="md:h-screen overflow-hidden w-full bg-[#f7f8fc] flex items-center justify-center flex-col md:flex-row">
      <EventSettingsPanel data={localMeeting} setLocalMeeting={setLocalMeeting} />
      <div className="w-full h-full flex flex-col p-6 justify-center md:items-center lg:p-4">
        <div className="rounded-3xl lg:w-auto h-auto md:w-auto sm:overflow-scroll lg:overflow-hidden shadow-lg shadow-gray-300 lg:h-[85%] bg-white">
          <div className="bg-gray-800 text-white text-sm p-5">
            This is a preview. To book an event, share this link with your invitees.
          </div>
          <div className="flex w-full h-full flex-col xl:flex-row p-3">
            <div className="flex flex-col w-full h-full p-6 lg:w-1/3 min-w-[260px]">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                {localMeeting.extendedProps?.scheduledBy || "Subham Kumar"}
              </h3>
              <p className="text-2xl font-semibold text-blue-800 mb-5">
                {localMeeting.title || "Event name here"}
              </p>
              <div className="flex items-center gap-1 text-gray-600 text-lg mb-3 font-semibold">
                <Clock size={20} className="text-gray-500" />
                <span>
                  {Array.isArray(localMeeting.extendedProps.duration)
                    ? `${localMeeting.extendedProps.duration[0]} min`
                    : `${localMeeting.extendedProps.duration || 30}`}
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-600 text-lg mb-3 font-semibold">
                <MapPin size={20} className="text-gray-500" />
                <span>
                  {localMeeting.extendedProps.platform || "Add a location"}
                </span>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 p-4 lg:w-2/3">
              <CalendarContainer>
                <Calendar
                  onChange={onDateChange}
                  value={selectedDate}
                  tileDisabled={tileDisabled}
                  showNeighboringMonth={true}
                  className="custom-calendar"
                  tileClassName={tileClassName}
                />
              </CalendarContainer>
            </div>
            {selectedDate && timeslots && timeslots.length > 0 && (
              <div className="w-full min-w-[300px] h-full overflow-scroll p-2">
                <h3 className="text-base font-medium text-gray-900 mb-4">
                  Available time slots
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {timeslots.map((slot, index) => {
                    const isSelected = selectedTimeslot === slot;
                    return (
                      <button
                        key={index}
                        onClick={() => handleTimeSelection(slot)}
                        className={`
                            flex items-center justify-center
                            h-12 w-full text-sm font-medium
                            border rounded-md transition-colors
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                            ${isSelected
                            ? "bg-blue-600 text-white border-transparent"
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                          }
                          `}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStep;

const CalendarContainer = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;
  /* Remove any visible border and shadow */
  border: none !important;
  box-shadow: none !important;

  .custom-calendar {
    border: none !important;
    box-shadow: none !important;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.75rem;
  }
  
  button {
    margin: 3px;
    border: 0;
    border-radius: 3px;
    padding: 5px 0;
    &:disabled {
      background-color: #f0f0f0;
      color: black;
      border-radius: 0;
    }
  }
  
  /* Override active tile styles */
  .react-calendar__tile--active,
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #5b6cf3 !important;
    color: #ffffff !important;
    font-weight: bold !important;
  }
  
  /* Custom active class for better active state handling */
  .react-calendar__tile--custom-active {
    background-color: #5b6cf3 !important;
    color: #ffffff !important;
    font-weight: bold !important;
  }
`;