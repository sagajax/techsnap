// src/components/HostSelectionModal.jsx
import React, { useState } from "react";
import LinksModal from "./LinksModal";
import { X, ChevronDown } from "lucide-react";

function HostSelectionModal({ isOpen, onClose }) {
  const [isEventTypeModalOpen, setIsEventTypeModalOpen] = useState(false);

  // If not open, render nothing
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Who will host this one-on-one event type?
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X size={20} />
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-6">
          Create a one-on-one event type for yourself or on behalf of another user.
        </p>

        {/* Host Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Choose a host
          </label>
          <button
            className="w-full flex items-center justify-between
                       px-3 py-2 border border-gray-300 rounded-md shadow-sm
                       bg-white hover:bg-gray-50"
          >
            <span className="text-gray-900">Subham Kumar (me)</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
          <p className="text-xs text-gray-500 mt-1">
            You'll be the owner of this event type so you'll be able to edit it.
          </p>
        </div>

        {/* Footer: Cancel / Next */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsEventTypeModalOpen(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      </div>

      {/* LinksModal opens full-screen if user clicks "Next" */}
      <LinksModal
        isOpen={isEventTypeModalOpen}
        onClose={() => setIsEventTypeModalOpen(false)}
        onCancelAll={() => {
          setIsEventTypeModalOpen(false);
          onClose(); // Closes HostSelectionModal (and cascades to EventTypeSelector)
        }}
      />
    </div>
  );
}

export default HostSelectionModal;
