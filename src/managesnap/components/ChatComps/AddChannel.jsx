import React, { useState } from "react";
import { createPortal } from "react-dom";

function AddChannel({ isOpen, onClose }) {
  const [channelName, setChannelName] = useState("");
  const [channelType, setChannelType] = useState("Public");

  const handleChannelNameChange = (e) => setChannelName(e.target.value);

  const handleChannelType = (e) => setChannelType(e.target.value);

  const handleCreateChannel = () => {
    console.log("Channel Name:", channelName);
    console.log("Channel Type:", channelType);
    // Add your logic to create the channel here
    onClose();
  };

  return createPortal(
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 dark:bg-black/20 backdrop-blur-sm">
          <div className="w-full max-w-xs md:max-w-md mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-lg border dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Create Channel</h2>
              <button className="text-gray-400" onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <input
              type="text"
              value={channelName}
              onChange={handleChannelNameChange}
              placeholder="Enter channel name..."
              className="w-full px-3 py-2 mb-4 text-sm bg-transparent rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative mb-4">
              <label className="block text-sm mb-2">Channel Type</label>
              <select
                value={channelType}
                onChange={handleChannelType}
                className="w-full px-3 py-2 text-sm bg-transparent rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              >
                <option value="Public" className="bg-white text-black dark:bg-gray-700 dark:text-white">
                  Public
                </option>
                <option value="Private" className="bg-white text-black dark:bg-gray-700 dark:text-white">
                  Private
                </option>
              </select>
            </div>
            <button
              onClick={handleCreateChannel}
              disabled={!channelName.trim()}
              className={`w-full px-4 py-2 rounded ${
                channelName.trim()
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
            >
              Create
            </button>
          </div>
        </div>
      )}
    </>,
    document.getElementById("portal-root")
  );
}

export default AddChannel;
