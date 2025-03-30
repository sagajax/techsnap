// src/components/MeetingBookingPage.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import BookingStep from "./BookingStep";
import ConfirmationStep from "./Confirmationstep";
import FinalConfirmationStep from "./FinalConfirmationStep";

const MeetingBookingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const meetingKey = new URLSearchParams(location.search).get("key");

  const meetingData = useSelector((state) =>
    state.meeting.meetingEvents.find((m) => m.id === `meeting-${meetingKey}`)
  );

  // Steps: 1 = booking, 2 = confirmation, 3 = final confirmation.
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeslot, setSelectedTimeslot] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", cc: "", message: "" });
  const [participants, setParticipants] = useState([]);
  const [meetingSaved, setMeetingSaved] = useState(false);

  const onDateChange = (date) => setSelectedDate(date);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutesStr}${ampm}`;
  };

  const generateTimeslots = () => {
    const times = [];
    const start = new Date();
    start.setHours(9, 0, 0, 0);
    const end = new Date();
    end.setHours(16, 0, 0, 0);
    let current = new Date(start);
    while (current <= end) {
      times.push(formatTime(current));
      current = new Date(current.getTime() + 15 * 60 * 1000);
    }
    return times;
  };

  const timeslots = generateTimeslots();
  const maxDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);

  const parseTimeSlot = (timeslot) => {
    const regex = /(\d+):(\d+)(am|pm)/;
    const match = timeslot.match(regex);
    if (!match) return null;
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const period = match[3];
    if (period === "pm" && hours !== 12) hours += 12;
    if (period === "am" && hours === 12) hours = 0;
    return { hours, minutes };
  };

  const meetingStart = () => {
    if (!selectedDate || !selectedTimeslot) return null;
    const parsed = parseTimeSlot(selectedTimeslot);
    if (!parsed) return null;
    const { hours, minutes } = parsed;
    const start = new Date(selectedDate);
    start.setHours(hours, minutes, 0, 0);
    return start;
  };

  const meetingEnd = () => {
    const start = meetingStart();
    if (!start) return null;
    let duration = 60;
    if (meetingData && meetingData.extendedProps?.duration) {
      duration = Array.isArray(meetingData.extendedProps.duration)
        ? meetingData.extendedProps.duration[0]
        : parseInt(meetingData.extendedProps.duration, 10);
    }
    return new Date(start.getTime() + duration * 60 * 1000);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddParticipant = () => {
    setParticipants((prev) => [...prev, { id: Date.now(), name: "", email: "" }]);
  };

  const handleParticipantChange = (id, field, value) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const handleRemoveParticipant = (id) => {
    setParticipants((prev) => prev.filter((p) => p.id !== id));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedTimeslot(null);
    setFormData({ name: "", email: "", cc: "", message: "" });
    setParticipants([]);
    setMeetingSaved(false);
    navigate("/calender/scheduling");
  };

  switch (step) {
    case 1:
      return (
        <BookingStep
          meetingData={meetingData}
          selectedDate={selectedDate}
          onDateChange={onDateChange}
          maxDate={maxDate}
          timeslots={timeslots}
          selectedTimeslot={selectedTimeslot}
          setSelectedTimeslot={setSelectedTimeslot}
          setStep={setStep}
          parseTimeSlot={parseTimeSlot}
        />
      );
    case 2:
      return (
        <ConfirmationStep
          meetingData={meetingData}
          selectedDate={selectedDate}
          selectedTimeslot={selectedTimeslot}
          meetingStart={meetingStart}
          meetingEnd={meetingEnd}
          formatTime={formatTime}
          formData={formData}
          handleInputChange={handleInputChange}
          participants={participants}
          handleAddParticipant={handleAddParticipant}
          handleParticipantChange={handleParticipantChange}
          handleRemoveParticipant={handleRemoveParticipant}
          handleFormSubmit={handleFormSubmit}
        />
      );
    case 3:
      return (
        <FinalConfirmationStep
          meetingData={meetingData}
          selectedDate={selectedDate}
          selectedTimeslot={selectedTimeslot}
          meetingStart={meetingStart}
          meetingEnd={meetingEnd}
          formatTime={formatTime}
          formData={formData}
          participants={participants}
          meetingSaved={meetingSaved}
          setMeetingSaved={setMeetingSaved}
          dispatch={dispatch}
          resetBooking={resetBooking}
        />
      );
    default:
      return null;
  }
};

export default MeetingBookingPage;
