// src/components/MeetingCard.jsx
import React from "react";
import { Edit, Copy, Signal, Clock, Video, UserCircle2 } from "lucide-react";

function MeetingCard({ meeting, onEditClick }) {
  const { id, title, description, startTime, endTime } = meeting;
  const { platform, scheduledBy } = meeting.extendedProps || {};

  // Compute the meeting duration based on startTime and endTime
  let computedDuration = "";
  if (startTime && endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diffMinutes = Math.round((end - start) / (60 * 1000));
    computedDuration = `${diffMinutes} min`;
  } else {
    computedDuration = "N/A";
  }

  // Set default platform to "Google Meet" if not provided
  const meetingPlatform = platform || "Google Meet";

  // Extract the meeting key from id
  let meetingKey = "";
  if (id && typeof id === "string" && id.includes("meeting-")) {
    meetingKey = id.split("meeting-")[1];
  } else {
    meetingKey = id;
  }

  // Generate a public booking link for invitees
  const bookingLink = `${window.location.origin}/booking?key=${meetingKey}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingLink);
    // Optionally show a toast or success message
  };

  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4 w-80 relative">
      {/* Icons in Top Right */}
      <div className="absolute top-3 right-3 flex space-x-2 text-gray-400">
        {/* Edit icon triggers the onEditClick callback */}
        <Edit
          size={16}
          className="cursor-pointer hover:text-gray-600"
          onClick={onEditClick}
        />
        <Copy
          size={16}
          className="cursor-pointer hover:text-gray-600"
          onClick={handleCopy}
        />
        <Signal size={16} className="cursor-pointer hover:text-gray-600" />
      </div>

      {/* Header Icon */}
      <div className="w-10 h-10 bg-yellow-100 flex items-center justify-center rounded-lg mb-2">
        <span className="text-yellow-500 text-lg">💡</span>
      </div>

      {/* Title & Description */}
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-500 text-sm">{description}</p>

      <div className="flex flex-col items-start gap-1 mt-4">
        {/* Scheduled By */}
        <div className="flex flex-row items-center gap-2 text-gray-500 mb-5">
          <UserCircle2 size={20} className="text-gray-500" />
          <span>{scheduledBy}</span>
        </div>
        {/* Duration */}
        <div className="flex items-center text-gray-600 text-sm gap-2">
          <Clock size={18} />
          <span>{computedDuration}</span>
        </div>
      </div>

      {/* Meeting Type */}
      <div className="flex items-center mt-1 gap-2">
        <Video size={20} className="text-gray-600" />
        <span className="text-gray-600 text-sm">{meetingPlatform}</span>
      </div>

      {/* Booking Link */}
      <div className="mt-4">
        <span className="text-blue-600 text-sm font-medium">Booking Link:</span>
        <input
          type="text"
          readOnly
          value={bookingLink}
          className="mt-1 w-full border rounded px-2 py-1 text-sm text-blue-600 bg-gray-50"
          onClick={(e) => e.target.select()}
        />
      </div>
    </div>
  );
}

export default MeetingCard;
