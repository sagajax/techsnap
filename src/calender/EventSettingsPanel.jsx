// src/components/EventSettingsPanel.jsx
import React, { useState } from "react";
import {
  ArrowLeft,
  Share2,
  Link as LinkIcon,
  Settings,
  Menu,
  Users,
  Calendar,
  CreditCard,
  ChevronRight,
} from "lucide-react";

import SchedulingSettingsForm from "./SchedulingSettingsForm";
import EventDetailsForm from "./EventDetailsForm";
import BookingPageOptionsForm from "./BookingPageOptionsForm"; // <-- NEW IMPORT
import { useNavigate, useNavigation } from "react-router-dom";

export default function EventSettingsPanel({ data, setLocalMeeting }) {
  const [activePanel, setActivePanel] = useState("default");
  let navigate = useNavigate();
  if (!data) return null;

  if (activePanel === "default") {
    return (
      <div className="w-full h-full border-r border-gray-200 md:max-w-[420px] flex flex-col text-black">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="flex items-center gap-1 text-blue-600 hover:underline">
            <ArrowLeft size={20} />
            <button className="text-base font-medium"
            onClick={() => navigate('/calender/scheduling')}
            >Done</button>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <Settings size={24} className="text-gray-700" />
            </button>
            <button>
              <LinkIcon size={24} className="text-gray-700" />
            </button>
            <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition text-base">
              <Share2 size={16} />
              Share
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="px-4 pt-4 pb-2 border-b border-gray-200">
          <h1 className="text-2xl font-semibold">{data.title}</h1>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto">
          {/* (1) Event details */}
          <button
            className="w-full text-left px-4 py-3 flex items-start gap-3 mt-4 hover:bg-gray-50"
            onClick={() => setActivePanel("eventDetails")}
          >
            <div>
              <Menu size={24} className="text-gray-700" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">
                Event details
              </h2>
              <p className="text-base text-gray-500">
                {Array.isArray(data.extendedProps.duration)
                  ? `${data.extendedProps.duration[0]} min`
                  : data.extendedProps.duration || "30 min"}
              </p>
              <div className="mt-1 bg-blue-50 border-l-4 border-blue-300 p-2 text-sm text-gray-700 rounded-r-md">
                {data.extendedProps.platform ? (
                  <p className="flex gap-1">
                    <strong>Platform: </strong> {data.extendedProps.platform}
                  </p>
                ) : (
                  <p>
                    <strong>Tip:</strong> Specify the location (phone, Zoom, etc.)
                  </p>
                )}
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400 mt-1" />
          </button>
          <hr className="my-4" />

          {/* (2) Hosts and invitees */}
          <button className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-gray-50">
            <div>
              <Users size={24} className="text-gray-700" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">
                Hosts and invitees
              </h2>
              <p className="text-base text-gray-500">Subham Kumar (you)</p>
              <p className="text-base text-gray-500">One-on-one event</p>
            </div>
            <ChevronRight size={20} className="text-gray-400 mt-1" />
          </button>
          <hr className="my-4" />

          {/* (3) Scheduling settings */}
          <button
            className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-gray-50"
            onClick={() => setActivePanel("schedulingSettings")}
          >
            <div>
              <Calendar size={24} className="text-gray-700" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">
                Scheduling settings
              </h2>
              <p className="text-base text-gray-500">60 rolling calendar days</p>
              <p className="text-base text-gray-500">Weekdays, 9 am - 5 pm</p>
            </div>
            <ChevronRight size={20} className="text-gray-400 mt-1" />
          </button>
          <hr className="my-4" />

          {/* (4) Booking page options */}
          <button
            className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-gray-50"
            onClick={() => setActivePanel("bookingPageOptions")} // <-- NEW
          >
            <div>
              <CreditCard size={24} className="text-gray-700" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">
                Booking page options
              </h2>
              <p className="text-base text-gray-500">
                Asking for name, email, +1 question
              </p>
              <p className="text-base text-gray-500">
                Calendly confirmation page
              </p>
            </div>
            <ChevronRight size={20} className="text-gray-400 mt-1" />
          </button>
        </div>
      </div>
    );
  } else if (activePanel === "eventDetails") {
    return (
      <EventDetailsForm
        data={data}
        setLocalMeeting={setLocalMeeting}
        onCancel={() => setActivePanel("default")}
      />
    );
  } else if (activePanel === "schedulingSettings") {
    return (
      <SchedulingSettingsForm
        data={data}
        setLocalMeeting={setLocalMeeting}
        onCancel={() => setActivePanel("default")}
      />
    );
  } 
  // NEW: bookingPageOptions
  else if (activePanel === "bookingPageOptions") {
    return (
      <BookingPageOptionsForm
        data={data}
        setLocalMeeting={setLocalMeeting}
        onCancel={() => setActivePanel("default")}
      />
    );
  } else {
    return null;
  }
}
