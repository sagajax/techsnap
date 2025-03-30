// src/components/EventTypeSelector.jsx
import React, { useState } from "react";
import HostSelectionModal from "./HostSelectionModal";
import { ArrowLeft, ChevronRight } from "lucide-react";
import {
  ArrowsLeftRight,
  UsersThree,
  UserList,
  ArrowsClockwise,
} from "@phosphor-icons/react";

function EventTypeSelector({ isOpen, onClose }) {
  const [showHostModal, setShowHostModal] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  // If not open, render nothing
  if (!isOpen) return null;

  const eventTypes = [
    {
      title: "One-on-One",
      description: "One host with one invitee",
      subtext: "Good for: coffee chats, 1:1 interviews, etc.",
      icon: (
        <ArrowsLeftRight className="text-blue-500" size={24} weight="duotone" />
      ),
    },
    {
      title: "Group",
      description: "One host with group of invitees",
      subtext: "Good for: webinars, online classes, etc.",
      icon: <UsersThree className="text-blue-500" size={24} weight="duotone" />,
    },
    {
      title: "Collective",
      description: "More than one host with one invitee",
      subtext: "Good for: panel interviews, group sales calls, etc.",
      icon: <UserList className="text-blue-500" size={24} weight="duotone" />,
    },
    {
      title: "Round Robin",
      description: "One rotating host with one invitee",
      subtext: "Good for: distributing incoming sales leads",
      icon: (
        <ArrowsClockwise className="text-blue-500" size={24} weight="duotone" />
      ),
    },
  ];

  const handleEventTypeSelect = (eventType) => {
    setSelectedType(eventType);
    setShowHostModal(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-xl w-full max-w-2xl h-[600px] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex flex-col">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="text-blue-500 hover:text-blue-600 flex items-center gap-1"
            >
              <ArrowLeft size={16} className="stroke-2" />
              <span className="text-sm font-medium">Back</span>
            </button>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mt-4">
            Create New Event Type
          </h1>
        </div>

        {/* Body: List of event types */}
        <div className="overflow-auto h-[calc(100%-80px)]">
          {eventTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => handleEventTypeSelect(type)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-0"
            >
              <div className="flex gap-4 items-start">
                <div className="pt-1">{type.icon}</div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-900">{type.title}</h3>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {type.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{type.subtext}</p>
                </div>
              </div>
              <ChevronRight className="text-gray-400 stroke-2" size={20} />
            </button>
          ))}
        </div>
      </div>

      {/* Child Modal for Host Selection */}
      <HostSelectionModal
        isOpen={showHostModal}
        onClose={() => {
          setShowHostModal(false);
          onClose(); // Closes the EventTypeSelector modal as well
        }}
      />
    </div>
  );
}

export default EventTypeSelector;
