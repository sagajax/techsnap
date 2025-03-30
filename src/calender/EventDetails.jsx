// src/components/EventDetails.jsx
import React, { useState } from "react";
import {
  Edit,
  X,
  CalendarDays,
  Clock,
  AlignLeft,
  UserCircle2,
  RepeatIcon,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { updateMeetingEvent } from "../store/slices/meetingSlice";
import MeetingEditModal from "./MeetingEditModal";

const EventDetails = ({ event, onClose }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <CalendarDays size={48} className="mb-4 opacity-50" />
        <p className="text-lg">Select an event to view details</p>
      </div>
    );
  }

  const isRecurring = event.extendedProps?.isRecurring;
  const isMeeting = event.extendedProps?.isMeeting;
  const meetingMembers = event.extendedProps?.participants || [];
  const currentUserEmail = "subhamk1978@gmail.com";
  // Allow edit if current user is the creator or among participants.
  const isCurrentUser =
    isMeeting &&
    (event.extendedProps?.scheduledBy === currentUserEmail ||
      (meetingMembers &&
        meetingMembers.some((member) =>
          typeof member === "object"
            ? member.email === currentUserEmail
            : member === currentUserEmail
        )));

  // Use rawStart/rawEnd (ISO strings) to format dates.
  const formattedStart = event.rawStart
    ? new Date(event.rawStart).toLocaleString()
    : "";
  const formattedEnd = event.rawEnd
    ? new Date(event.rawEnd).toLocaleString()
    : "";

  const handleSaveEdit = (updatedEvent) => {
    // Dispatch the update action so that changes persist.
    dispatch(updateMeetingEvent(updatedEvent));
    setIsEditing(false);
  };

  return (
    <div className="overflow-scroll no-scrollbar">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-semibold text-gray-900">Event Details</h3>
        <div>
          {isCurrentUser && (
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-md mr-2"
            >
              Edit Meeting
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg mb-6">
        <div className="px-4 py-3 border-l-4 border-blue-500 rounded-l bg-gradient-to-r from-blue-50 to-transparent">
          <h4 className="text-lg font-medium text-gray-900">
            {event.title}
            {isRecurring && (
              <span className="ml-2 inline-flex items-center">
                <RepeatIcon size={16} className="text-gray-500" />
                <span className="ml-1 text-sm text-gray-500">Recurring</span>
              </span>
            )}
          </h4>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            <Clock size={17} className="text-[#5263f3]" />
            <div className="font-medium text-[#5263f3]">Time</div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col text-gray-600">
              <span>Starts: {formattedStart}</span>
              <span>Ends: {formattedEnd}</span>
              {isRecurring && (
                <span className="text-sm text-gray-500 mt-1">
                  Repeats every weekday (Mon-Fri)
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMeeting && event.extendedProps?.scheduledBy && (
        <div className="mb-6">
          <div className="flex items-center gap-1">
            <UserCircle2 size={20} className="text-gray-500" />
            <span className="font-medium text-gray-700">
              Scheduled By: {event.extendedProps.scheduledBy}
            </span>
          </div>
        </div>
      )}

      {event.description && (
        <div className="space-y-2 mb-6">
          <div className="flex items-start space-x-3">
            <AlignLeft className="w-5 h-5 text-gray-500 mt-1" />
            <div className="flex-1">
              <div className="font-medium text-gray-700 mb-1">Description</div>
              <div className="text-gray-600 bg-gray-50 rounded-lg p-4">
                {event.description}
              </div>
            </div>
          </div>
        </div>
      )}

      {isMeeting && meetingMembers.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            Meeting Participants
          </h4>
          <ul className="list-disc ml-6 text-gray-600">
            {meetingMembers.map((member, index) => (
              <li key={index}>
                {typeof member === "object"
                  ? `${member.name} (${member.email})`
                  : member}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isEditing && (
        <MeetingEditModal
          // Pass the full meeting data, using rawStart/rawEnd for editing.
          meetingEvent={{
            ...event,
            startTime: event.rawStart,
            endTime: event.rawEnd,
          }}
          onSave={handleSaveEdit}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default EventDetails;
