import React, { useState } from "react";

const MeetingEditModal = ({ meetingEvent, onSave, onCancel }) => {
  // Prefer startTime/endTime if available; otherwise, fall back to rawStart/rawEnd or start/end.
  const startValue =
    meetingEvent.startTime || meetingEvent.rawStart || meetingEvent.start;
  const endValue =
    meetingEvent.endTime || meetingEvent.rawEnd || meetingEvent.end;
  const { extendedProps } = meetingEvent;

  // Extract only the date part and time (HH:MM)
  const initialDate = new Date(startValue).toISOString().split("T")[0];
  const initialStartTime = new Date(startValue).toISOString().substr(11, 5);
  const initialEndTime = new Date(endValue).toISOString().substr(11, 5);

  const [date, setDate] = useState(initialDate);
  const [startTime, setStartTime] = useState(initialStartTime);
  const [endTime, setEndTime] = useState(initialEndTime);
  const [description, setDescription] = useState(
    extendedProps.description || ""
  );
  const [participants, setParticipants] = useState(
    extendedProps.participants || []
  );

  const handleParticipantChange = (index, field, value) => {
    const newParticipants = participants.map((p, i) =>
      i === index ? { ...p, [field]: value } : p
    );
    setParticipants(newParticipants);
  };

  const handleAddParticipant = () => {
    setParticipants([...participants, { name: "", email: "" }]);
  };

  const handleRemoveParticipant = (index) => {
    const newParticipants = participants.filter((_, i) => i !== index);
    setParticipants(newParticipants);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStart = new Date(`${date}T${startTime}`).toISOString();
    const newEnd = new Date(`${date}T${endTime}`).toISOString();
    const updatedEvent = {
      ...meetingEvent,
      // Update both top-level and extended properties
      startTime: newStart,
      endTime: newEnd,
      start: newStart,
      end: newEnd,
      extendedProps: {
        ...extendedProps,
        description,
        participants,
        rawStart: newStart,
        rawEnd: newEnd,
      },
    };
    onSave(updatedEvent);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Edit Meeting</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 mr-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Time
              </label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Time
              </label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Participants</h3>
            {participants.map((participant, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={participant.name}
                  onChange={(e) =>
                    handleParticipantChange(index, "name", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={participant.email}
                  onChange={(e) =>
                    handleParticipantChange(index, "email", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveParticipant(index)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddParticipant}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Add Participant
            </button>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-red-100 border border-red-600 text-red-700 rounded-xl hover:bg-red-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#5263f3] text-white rounded-xl hover:bg-[#4758ef]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeetingEditModal;
