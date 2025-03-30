// src/components/FinalConfirmationStep.jsx
import React, { useEffect, useRef } from 'react';
import { UserCircle2 } from 'lucide-react';
import { updateMeetingEvent, addMeetingEvent } from '../store/slices/meetingSlice';

const FinalConfirmationStep = ({
  meetingData,
  selectedDate,
  selectedTimeslot,
  meetingStart,
  meetingEnd,
  formatTime,
  formData,
  participants,
  meetingSaved,
  setMeetingSaved,
  dispatch,
  resetBooking,
}) => {
  const meetingTitle = meetingData?.title || "Meeting";
  const platform = meetingData?.extendedProps?.platform || "Google Meet";

  // Compute duration from startTime and endTime if available.
  const computedDuration = (() => {
    if (meetingData && meetingData.startTime && meetingData.endTime) {
      const diff = new Date(meetingData.endTime) - new Date(meetingData.startTime);
      return `${Math.round(diff / (60 * 1000))} min`;
    }
    return meetingData?.extendedProps?.duration || '1 hour';
  })();

  const effectRan = useRef(false);

  useEffect(() => {
    let meetingEvent = {};
    if (!meetingSaved && !effectRan.current) {
      const startDateTime = meetingStart();
      const endDateTime = meetingEnd();
      const eventId = meetingData ? meetingData.id : "meeting-" + Date.now();

      meetingEvent = {
        id: eventId,
        title: meetingTitle,
        startTime: startDateTime.toISOString(),
        endTime: endDateTime.toISOString(),
        extendedProps: {
          description: "Meeting booked via booking page.",
          isMeeting: true,
          // Always use the name from formData
          scheduledBy: formData.name,
          participants: [{ name: formData.name, email: formData.email }, ...participants],
          cc: formData.cc,
          message: formData.message,
          rawStart: startDateTime.toISOString(),
          rawEnd: endDateTime.toISOString(),
          duration: computedDuration,
          platform,
        },
      };

      if (meetingData) {
        dispatch(updateMeetingEvent(meetingEvent));
      } else {
        dispatch(addMeetingEvent(meetingEvent));
      }
      setMeetingSaved(true);
      effectRan.current = true;
    }
  }, [
    meetingSaved,
    meetingStart,
    meetingEnd,
    formData,
    participants,
    dispatch,
    meetingTitle,
    computedDuration,
    platform,
    meetingData,
    setMeetingSaved,
  ]);

  const startTime = meetingStart();
  const endTime = meetingEnd();
  const formattedDate = selectedDate.toLocaleDateString();

  return (
    <div className="min-h-screen w-full bg-[#f7f8fc] flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <UserCircle2 size={48} className="text-[#5b6cf3]" />
          <h2 className="text-2xl font-bold text-gray-800">
            Booking Confirmed!
          </h2>
          <p className="text-gray-600">Thank you for booking your meeting, {formData.name}.</p>
        </div>
        <h1 className="text-2xl font-bold text-[#5b6cf3] mb-4">Meeting Details</h1>
        <div className="mb-6">
          <p className="text-gray-900 font-semibold">Date: {formattedDate}</p>
          <p className="text-gray-900 font-semibold">
            Time: {startTime && endTime ? `${formatTime(startTime)} - ${formatTime(endTime)}` : ''}
          </p>
          <p className="text-gray-900 font-semibold">Duration: {computedDuration}</p>
          <p className="text-gray-900 font-semibold">Platform: {platform}</p>
        </div>
        <h2 className="text-2xl font-bold text-[#5b6cf3] mb-4">Your Details & Participants</h2>
        <div className="mb-6 space-y-2">
          <p className="text-gray-900 font-semibold">Your Name: {formData.name}</p>
          <p className="text-gray-900 font-semibold">Your Email: {formData.email}</p>
          {formData.cc && <p className="text-gray-900 font-semibold">CC: {formData.cc}</p>}
          {formData.message && <p className="text-gray-900 font-semibold">Message: {formData.message}</p>}
          {participants.length > 0 && (
            <div>
              <h3 className="text-lg font-medium">Additional Participants:</h3>
              <ul className="list-disc ml-6">
                {participants.map((p) => (
                  <li key={p.id}>
                    {p.name} ({p.email})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="text-right">
          <button
            onClick={resetBooking}
            className="bg-[#5b6cf3] hover:bg-[#4659e9] text-white px-6 py-3 rounded-md"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalConfirmationStep;
