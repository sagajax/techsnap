// src/components/ConfirmationStep.jsx
import React from 'react';
import { UserCircle2, Calendar as CalendarIcon, Users } from 'lucide-react';

const ConfirmationStep = ({
  meetingData,
  selectedDate,
  selectedTimeslot,
  meetingStart,
  meetingEnd,
  formatTime,
  formData,
  handleInputChange,
  participants,
  handleAddParticipant,
  handleParticipantChange,
  handleRemoveParticipant,
  handleFormSubmit,
}) => {
  const startTime = meetingStart();
  const endTime = meetingEnd();
  const formattedDate = selectedDate.toLocaleDateString();

  // Use the name from formData as the scheduled-by value.
  const pageTitle = formData.name || "User";
  const meetingTitle = meetingData?.title || "Meeting";
  const duration =
    meetingData?.extendedProps?.duration
      ? Array.isArray(meetingData.extendedProps.duration)
        ? `${meetingData.extendedProps.duration[0]} min`
        : meetingData.extendedProps.duration
      : '1 hour';
  const platform = meetingData?.extendedProps?.platform || "Google Meet";

  return (
    <div className="min-h-screen w-full bg-[#f7f8fc] flex items-center justify-center p-6 text-black">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <UserCircle2 size={48} className="text-[#5b6cf3]" />
          <h2 className="text-xl font-bold text-gray-800">{pageTitle}'s Booking Page</h2>
          <div className="flex items-center mt-2">
            <CalendarIcon size={20} className="text-green-500 mr-2" />
            <span className="text-lg font-semibold text-gray-800">{meetingTitle}</span>
          </div>
          <div className="flex items-center mt-1">
            <Users size={20} className="text-purple-500 mr-2" />
            <span className="text-lg font-semibold text-gray-800">with {pageTitle}</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[#5b6cf3] mb-4">Meeting Confirmation</h1>
        <div className="mb-6">
          <p className="text-gray-900 font-semibold">Date: {formattedDate}</p>
          <p className="text-gray-900 font-semibold">
            Time: {startTime && endTime ? `${formatTime(startTime)} - ${formatTime(endTime)}` : ''}
          </p>
          <p className="text-gray-900 font-semibold">Duration: {duration}</p>
          <p className="text-gray-900 font-semibold">Platform: {platform}</p>
        </div>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Your Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="cc" className="block text-gray-700 font-medium mb-1">CC</label>
            <input
              id="cc"
              type="email"
              value={formData.cc}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Email to CC (optional)"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              id="message"
              rows="3"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Your message (optional)"
            ></textarea>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Additional Participants</h3>
            {participants.map((p) => (
              <div key={p.id} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Participant Name"
                  value={p.name}
                  onChange={(e) => handleParticipantChange(p.id, 'name', e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <input
                  type="email"
                  placeholder="Participant Email"
                  value={p.email}
                  onChange={(e) => handleParticipantChange(p.id, 'email', e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveParticipant(p.id)}
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
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#5b6cf3] hover:bg-[#4659e9] text-white px-6 py-3 rounded-md"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationStep;
