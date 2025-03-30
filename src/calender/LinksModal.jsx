// src/components/LinksModal.jsx
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  Info,
  MapPin,
  Clock,
  Video,
  ChevronDown,
} from "lucide-react";
import { GoogleLogo, VideoCamera, Phone } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  meetingInitialiser,
  updateMeetingEvent,
} from "../store/slices/meetingSlice";

function LinksModal({ isOpen, onClose, onCancelAll, meeting }) {
  if (!isOpen) return null;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [eventName, setEventName] = useState(meeting?.title || "");

  // Use durationOption to hold the selected option and customDuration for the custom value.
  const [durationOption, setDurationOption] = useState(
    meeting?.duration || meeting?.extendedProps?.duration || "30 min"
  );
  const [customDuration, setCustomDuration] = useState("");

  const [platform, setPlatform] = useState(
    meeting?.platform || meeting?.extendedProps?.platform || "Google Meet"
  );

  useEffect(() => {
    setEventName(meeting?.title || "");
    const initialDuration =
      meeting?.duration || meeting?.extendedProps?.duration || "30 min";
    // If the initial duration is not one of the preset options, use the custom option.
    if (!["15 min", "30 min", "45 min", "60 min"].includes(initialDuration)) {
      setDurationOption("custom");
      setCustomDuration(initialDuration);
    } else {
      setDurationOption(initialDuration);
      setCustomDuration("");
    }
    setPlatform(
      meeting?.platform ||
      meeting?.extendedProps?.platform ||
      "Google Meet"
    );
  }, [meeting]);

  const handleContinue = () => {
    let meetingKey;
    if (meeting && meeting.id) {
      meetingKey = meeting.id.split("meeting-")[1];
    } else {
      meetingKey = Date.now().toString();
    }
    
    const finalDurationRaw = durationOption === "custom" ? customDuration : durationOption;
    
    const durationInMinutes =
      typeof finalDurationRaw === "string"
        ? parseInt(finalDurationRaw, 10)  // e.g. "45 min" becomes 45
        : finalDurationRaw;
    
    console.log("Duration in minutes:", durationInMinutes);
    
    const startTime = meeting && meeting.startTime ? new Date(meeting.startTime) : new Date();
    const newEndTime = new Date(startTime.getTime() + durationInMinutes * 60 * 1000);
    
    const updatedMeeting = meeting
      ? {
          ...meeting,
          title: eventName,
          endTime: newEndTime.toISOString(),
          extendedProps: {
            ...(meeting.extendedProps || {}),
            duration: finalDurationRaw,
            platform,
          },
        }
      : {
          id: meetingKey,
          title: eventName,
          description: "",
          duration: finalDurationRaw,
          platform: platform,
          startTime: startTime.toISOString(),
          endTime: newEndTime.toISOString(),
        };
    
    if (meeting && meeting.id) {
      dispatch(updateMeetingEvent(updatedMeeting));
    } else {
      dispatch(meetingInitialiser(updatedMeeting));
    }
    
    navigate(`/meeting?key=${meetingKey}`);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 bg-white text-gray-900 flex flex-col md:flex-row overflow-scroll">
      <div className="w-full md:w-5/12 h-full border-r border-gray-200 md:max-w-[420px] flex flex-col">
        <div className="flex items-start gap-3 justify-between px-6 py-4 border-b border-gray-300 flex-col">
          <button
            onClick={() => {
              if (onCancelAll) {
                onCancelAll();
              } else {
                onClose();
              }
            }}
            className="text-sm items-center gap-1 text-gray-600 hover:underline flex flex-row"
          >
            <ChevronLeft size={20} color="gray" /> Cancel
          </button>
          <h2 className="text-2xl font-semibold text-gray-900">
            New Event Type
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="mb-6">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              Event name <Info size={14} className="text-gray-400" />
            </label>
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: "#a855f7" }}
              />
              <input
                type="text"
                value={eventName}
                required={true}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Name your event"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              Duration <Info size={14} className="text-gray-400" />
            </label>
            <select
              value={durationOption}
              onChange={(e) => setDurationOption(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            >
              <option value="15 min">15 min</option>
              <option value="30 min">30 min</option>
              <option value="45 min">45 min</option>
              <option value="60 min">60 min</option>
              <option value="custom">Custom</option>
            </select>
            {durationOption === "custom" && (
              <input
                type="text"
                value={customDuration}
                onChange={(e) => setCustomDuration(e.target.value)}
                placeholder="Enter custom duration (e.g., 90 min)"
                className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            )}
          </div>
          <div className="mb-6">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              Location <Info size={14} className="text-gray-400" />
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setPlatform("Zoom")}
                className={`px-4 py-2 border border-gray-500 rounded-md text-sm flex items-center gap-1 hover:bg-gray-100 ${platform === "Zoom" ? "bg-gray-100" : ""
                  }`}
              >
                <VideoCamera size={20} color="black" /> Zoom
              </button>
              <button
                onClick={() => setPlatform("Phone call")}
                className={`px-4 py-2 border border-gray-500 rounded-md text-sm flex flex-col items-center hover:bg-gray-100 ${platform === "Phone call" ? "bg-gray-100" : ""
                  }`}
              >
                <Phone size={20} color="black" /> <span>Phone call</span>
              </button>
              <button
                onClick={() => setPlatform("Google Meet")}
                className={`px-4 py-2 border border-gray-500 rounded-md text-sm flex flex-col items-center hover:bg-gray-100 ${platform === "Google Meet" ? "bg-gray-100" : ""
                  }`}
              >
                <GoogleLogo size={20} weight="bold" color="black" />{" "}
                <span>Google Meet</span>
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex flex-col items-center hover:bg-gray-100">
                <ChevronDown size={20} color="black" /> All options
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-end">
          <button
            onClick={handleContinue}
            disabled={!eventName}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-3xl text-base"
          >
            Create
          </button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col p-6 justify-center md:items-center">
        <div className="rounded-3xl lg:w-[75%] h-full md:w-[90%] max-w-[800px] overflow-hidden shadow-lg shadow-gray-300 lg:h-[85%]">
          <div className="bg-gray-800 text-white text-sm p-5">
            This is a preview. To book an event, share this link with your invitees.
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Subham Kumar
            </h3>
            <p className="text-2xl font-semibold text-blue-800 mb-5">
              {eventName || "Event name here"}
            </p>
            <div className="flex items-center gap-1 text-gray-600 text-lg mb-3 font-semibold">
              <Clock size={20} className="text-gray-500" />
              <span>
                {durationOption === "custom" ? customDuration : durationOption}
              </span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-lg mb-3 font-semibold">
              <MapPin size={20} className="text-gray-500" />
              <span>
                {platform || "Add a location for it to show here"}
              </span>
            </div>
            <hr className="mb-4 mt-6" />
            <div className="md:h-64 flex justify-center items-center">
              <p className="text-lg text-center font-semibold text-gray-500">
                A preview of your availability will show on the next step
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinksModal;
