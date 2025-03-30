import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calender.css";
import "react-calendar/dist/Calendar.css";
import { ArrowLeftCircle, Clock, MapPin } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

function AppointmentBooking() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const bookingKey = searchParams.get("key");
  const meeting = useSelector((state) =>
    state.meeting.meetingEvents.find((e) => e.id === `meeting-${bookingKey}`)
  );

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeslot, setSelectedTimeslot] = useState("");
  const [step, setStep] = useState(1);
  const [showForm, setShowForm] = useState(false);
  
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const timeslots = [
    "09:00 AM", "09:15 AM", "09:30 AM", "09:45 AM",
    "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM", "11:00 AM",
    "11:15 AM", "11:30 AM", "11:45 AM", "12:00 PM", "12:15 PM",
    "12:30 PM", "12:45 PM", "01:00 PM", "01:15 PM", "01:30 PM",
    "01:45 PM", "02:00 PM", "02:15 PM", "02:30 PM", "02:45 PM",
    "03:00 PM", "03:15 PM", "03:30 PM", "03:45 PM", "04:00 PM",
    "04:15 PM", "04:30 PM", "04:45 PM", "05:00 PM", "05:15 PM",
  ];

  const onDateChange = (date) => {
    setSelectedDate(date);
    setShowForm(false); // Reset form view when date changes
    setSelectedTimeslot(""); // Reset selected timeslot when date changes
  };

  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const maxAllowed = new Date(today);
      maxAllowed.setDate(today.getDate() + 30);
      
      // Allowed meeting date range
      const meetingStart = new Date(meeting?.startDate);
      const meetingEnd = new Date(meeting?.endDate);
      
      // Disable if the date is outside the meeting range
      if (date < meetingStart || date > meetingEnd) {
        return true;
      }
      
      // Also disable if the date is before today, after max allowed, or if it's a Sunday
      return date < today || date > maxAllowed || date.getDay() === 0;
    }
    return false;
  };

  // Custom tile class function to match reference
  const tileClassName = ({ date, view }) => {
    if (
      selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    ) {
      return "react-calendar__tile--custom-active";
    }
    return null;
  };

  const handleTimeSelection = (slot) => {
    setSelectedTimeslot(slot);
  };

  const handleNextClick = () => {
    if (!selectedDate || !selectedTimeslot) {
      alert("Please select a date and timeslot before proceeding.");
      return;
    }
    setShowForm(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill out required fields.");
      return;
    }
    setStep(2);
  };

  let computedDuration = "N/A";
  if (meeting && meeting.extendedProps?.duration) {
    const duration = Array.isArray(meeting.extendedProps.duration) 
      ? meeting.extendedProps.duration[0] 
      : meeting.extendedProps.duration;
    computedDuration = `${duration} min`;
  }

  if (!meeting) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5b6cf3]" />
      </div>
    );
  }

  return (
    <div className="md:h-screen overflow-hidden w-full bg-[#f7f8fc] flex items-center justify-center flex-col md:flex-row">
      <div className="w-full h-full flex flex-col p-6 justify-center md:items-center lg:p-4">
        {step === 1 && (
          <div className="rounded-3xl lg:w-auto h-auto md:w-auto sm:overflow-scroll lg:overflow-hidden shadow-lg shadow-gray-300 lg:h-[85%] bg-white">
            <div className="bg-gray-800 text-white text-sm p-5">
              This is a preview. To book an event, share this link with your invitees.
            </div>
            {/* Back button shown when form view is active */}
            {showForm && (
              <div className="pt-4 pl-4">
                <button
                  onClick={() => setShowForm(false)}
                  className=" text-gray-800 rounded-md transition-colors text-sm font-medium"
                >
                  <ArrowLeftCircle size={24} className="text-blue-600" />
                </button>
              </div>
            )}
            <div className="flex w-full h-full flex-col xl:flex-row p-3">
              <div className="flex flex-col w-full h-full p-6 lg:w-1/3 min-w-[260px]">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  {meeting.extendedProps?.scheduledBy || "Subham Kumar"}
                </h3>
                <p className="text-2xl font-semibold text-blue-800 mb-5">
                  {meeting.title || "Event name here"}
                </p>
                <div className="flex items-center gap-1 text-gray-600 text-lg mb-3 font-semibold">
                  <Clock size={20} className="text-gray-500" />
                  <span>
                    {Array.isArray(meeting.extendedProps?.duration)
                      ? `${meeting.extendedProps?.duration[0]} min`
                      : `${meeting.extendedProps?.duration || 30}`}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-600 text-lg mb-3 font-semibold">
                  <MapPin size={20} className="text-gray-500" />
                  <span>
                    {meeting.extendedProps?.platform || "Google Meet"}
                  </span>
                </div>
              </div>
              
              {!showForm ? (
                <>
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
                    <div className="w-full min-w-[300px] h-full lg:overflow-scroll p-2">
                      <h3 className="text-base font-medium text-gray-900 mb-4">
                        Available time slots
                      </h3>
                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 pb-4">
                        {timeslots.map((slot, index) => {
                          const isSelected = selectedTimeslot === slot;
                          return (
                            <div key={index} className="flex items-center gap-2 w-full">
                              <button
                                onClick={() => handleTimeSelection(slot)}
                                className={`
                                  flex items-center justify-center
                                  h-12 ${isSelected ? "w-3/5" : "w-full"}
                                  text-sm font-medium transition-all duration-200
                                  border rounded-md 
                                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                                  ${isSelected
                                    ? "bg-blue-600 text-white border-transparent"
                                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                                  }
                                `}
                              >
                                {slot}
                              </button>
                              {isSelected && (
                                <button
                                  onClick={handleNextClick}
                                  className="bg-blue-600 text-white h-12 w-2/5 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center"
                                >
                                  Continue
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="lg:w-2/3 p-6">
                  <div className="max-w-md mx-auto bg-white rounded-md text-black">
                    <h2 className="text-2xl font-semibold mb-6">Enter Details</h2>
                    <form onSubmit={handleSubmitForm}>
                      <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <button
                        type="button"
                        className="mb-5 text-blue-600 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Add Guests
                      </button>
                      <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Please share anything that will help prepare for our meeting.
                        </label>
                        <textarea
                          rows="3"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mb-5">
                        By proceeding, you confirm that you have read and agree to Calendly's Terms of Use and Privacy Notice
                      </p>
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full text-sm"
                      >
                        Schedule Event
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-3xl shadow-lg shadow-gray-300 p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointment Confirmed!</h2>
              <p className="text-gray-600 mb-2">
                Your appointment has been successfully booked for{" "}
                <span className="font-medium">
                  {selectedDate?.toLocaleDateString()} at {selectedTimeslot}
                </span>
              </p>
              <p className="text-gray-600 mb-6">
                A confirmation email has been sent to{" "}
                <span className="font-medium">{email}</span>
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                Add to Calendar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentBooking;

const CalendarContainer = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;

  /* Remove calendar border */
  .custom-calendar {
    border: none !important;
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
      border-radius:0px;
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
`;
