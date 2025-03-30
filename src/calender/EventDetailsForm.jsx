import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ChevronLeft, Info, ChevronRight } from "lucide-react";
import { Phone, VideoCamera } from "@phosphor-icons/react";
import { GoogleLogo } from "@phosphor-icons/react/dist/ssr";
import { updateMeetingEvent } from "../store/slices/meetingSlice";

export default function EventDetailsForm({ data, setLocalMeeting, onCancel }) {
  const dispatch = useDispatch();
  const allowedOptions = ["15", "30", "45", "60"];

  const handleChangeTitle = (e) => {
    const newTitle = e.target.value;
    setLocalMeeting((prev) => ({
      ...prev,
      title: newTitle,
    }));
  };

  // Initialize local state for duration selection
  const [durationOption, setDurationOption] = useState(() => {
    const current =
      Array.isArray(data.extendedProps.duration)
        ? data.extendedProps.duration[0].toString()
        : data.extendedProps.duration
        ? data.extendedProps.duration.toString()
        : "30";
    return allowedOptions.includes(current) ? current : "custom";
  });

  const [customDuration, setCustomDuration] = useState(() => {
    const current =
      Array.isArray(data.extendedProps.duration)
        ? data.extendedProps.duration[0].toString()
        : data.extendedProps.duration
        ? data.extendedProps.duration.toString()
        : "30";
    return allowedOptions.includes(current) ? "" : current;
  });

  useEffect(() => {
    const current =
      Array.isArray(data.extendedProps.duration)
        ? data.extendedProps.duration[0].toString()
        : data.extendedProps.duration
        ? data.extendedProps.duration.toString()
        : "30";
    if (allowedOptions.includes(current)) {
      setDurationOption(current);
      setCustomDuration("");
    } else {
      setDurationOption("custom");
      setCustomDuration(current);
    }
  }, [data.extendedProps.duration]);

  const handleDurationOptionChange = (e) => {
    const value = e.target.value;
    setDurationOption(value);
    if (value !== "custom") {
      setLocalMeeting((prev) => ({
        ...prev,
        extendedProps: {
          ...prev.extendedProps,
          duration: [parseInt(value, 10)],
        },
      }));
    }
  };

  const handleCustomDurationChange = (e) => {
    const value = e.target.value;
    setCustomDuration(value);
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      setLocalMeeting((prev) => ({
        ...prev,
        extendedProps: {
          ...prev.extendedProps,
          duration: [parsed],
        },
      }));
    }
  };

  const handleSelectPlatform = (platformValue) => {
    setLocalMeeting((prev) => ({
      ...prev,
      extendedProps: {
        ...prev.extendedProps,
        platform: platformValue,
      },
    }));
  };

  const handleSubmit = () => {
    // Calculate new end time based on duration
    const duration = durationOption === "custom" 
      ? parseInt(customDuration, 10) 
      : parseInt(durationOption, 10);
    
    const startTime = new Date(data.start);
    const endTime = new Date(startTime.getTime() + duration * 60000);

    const updatedMeeting = {
      ...data,
      start: startTime.toISOString(),
      end: endTime.toISOString(),
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
    };

    dispatch(updateMeetingEvent(updatedMeeting));
    onCancel(); // Close the form
  };

  const handleCancel = () => {
    dispatch(updateMeetingEvent(data)); // Save current state before canceling
    onCancel();
  };

  return (
    <div className="w-full md:w-5/12 h-full border-r border-gray-200 md:max-w-[420px] flex flex-col text-black">
      {/* Header */}
      <div className="flex items-start gap-3 justify-between px-6 py-4 border-b border-gray-300 flex-col">
        <button
          onClick={handleCancel}
          className="text-sm flex items-center gap-1 text-gray-600 hover:underline"
        >
          <ChevronLeft size={20} color="gray" />
          Cancel
        </button>
        <h2 className="text-2xl font-semibold text-gray-900">New Event Type</h2>
      </div>

      {/* Form Fields */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {/* Event Name */}
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
              value={data.title || ""}
              onChange={handleChangeTitle}
              placeholder="Name your event"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
          </div>
        </div>

        {/* Duration */}
        <div className="mb-6">
          <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
            Duration <Info size={14} className="text-gray-400" />
          </label>
          <select
            value={durationOption}
            onChange={handleDurationOptionChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            <option value="45">45 min</option>
            <option value="60">60 min</option>
            <option value="custom">Custom</option>
          </select>
          {durationOption === "custom" && (
            <input
              type="text"
              value={customDuration}
              onChange={handleCustomDurationChange}
              placeholder="Enter custom duration in minutes"
              className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
          )}
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
            Location <Info size={14} className="text-gray-400" />
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSelectPlatform("Zoom")}
              className={`px-4 py-2 border border-gray-500 rounded-md text-sm flex items-center gap-1 hover:bg-gray-100 ${
                data.extendedProps.platform === "Zoom" ? "bg-gray-100" : ""
              }`}
            >
              <VideoCamera size={20} color="black" />
              Zoom
            </button>
            <button
              onClick={() => handleSelectPlatform("Phone call")}
              className={`px-4 py-2 border border-gray-500 rounded-md text-sm flex flex-col items-center hover:bg-gray-100 ${
                data.extendedProps.platform === "Phone call" ? "bg-gray-100" : ""
              }`}
            >
              <Phone size={20} color="black" />
              <span>Phone call</span>
            </button>
            <button
              onClick={() => handleSelectPlatform("Google Meet")}
              className={`px-4 py-2 border border-gray-500 rounded-md text-sm flex flex-col items-center hover:bg-gray-100 ${
                data.extendedProps.platform === "Google Meet" ? "bg-gray-100" : ""
              }`}
            >
              <GoogleLogo size={20} weight="bold" color="black" />
              <span>Google Meet</span>
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex flex-col items-center hover:bg-gray-100">
              <ChevronRight size={20} color="black" />
              <span>All options</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-3xl text-base"
        >
          Save & close
        </button>
      </div>
    </div>
  );
}