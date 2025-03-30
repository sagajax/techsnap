import React from "react";
import { ChevronLeft, Lock } from "lucide-react";
import { Plus } from "@phosphor-icons/react";

export default function BookingPageOptionsForm({
  data,
  setLocalMeeting,
  onCancel,
  onSave,
}) {
  // Example handler for changing the event link
  const handleChangeEventLink = (e) => {
    const newLink = e.target.value;
    setLocalMeeting((prev) => ({
      ...prev,
      extendedProps: {
        ...prev.extendedProps,
        eventLink: newLink,
      },
    }));
  };

  // Example handler for toggling "allow invitees to add guests"
  const handleToggleGuests = () => {
    setLocalMeeting((prev) => ({
      ...prev,
      extendedProps: {
        ...prev.extendedProps,
        allowGuests: !prev.extendedProps.allowGuests,
      },
    }));
  };

  // Example for adding a new question
  const handleAddQuestion = () => {
    // If you store questions as an array in extendedProps, push a new one
    setLocalMeeting((prev) => {
      const questions = prev.extendedProps.questions || [];
      const newQuestion = {
        id: Date.now(),
        label: "New question",
        type: "text", // or "multiple lines" etc.
      };
      return {
        ...prev,
        extendedProps: {
          ...prev.extendedProps,
          questions: [...questions, newQuestion],
        },
      };
    });
  };

  // Example for saving changes
  const handleSaveAndClose = () => {
    if (onSave) {
      onSave();
    }
  };

  // Grab data from extendedProps to display
  const eventLink = data.extendedProps?.eventLink || "calendly.com/subhamrahar22/";
  const allowGuests = data.extendedProps?.allowGuests ?? true;
  const questions = data.extendedProps?.questions || [
    {
      id: 1,
      label: "Name, Email",
      type: "text",
    },
    {
      id: 2,
      label: "Q1: Please share anything that will help prepare for our meeting.",
      type: "multiline",
    },
  ];

  return (
    <div className="w-full md:max-w-[420px] h-full border-r border-gray-200 flex flex-col text-black">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-1 text-blue-600 hover:underline">
          <button onClick={onCancel} className="flex items-center gap-1">
            <ChevronLeft size={20} />
            <span>Cancel</span>
          </button>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Event Type Summary</h2>
          <p className="text-sm text-gray-600">Booking page options</p>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Event link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event link <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={eventLink}
            onChange={handleChangeEventLink}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Booking Form */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Booking form
          </h3>

          {/* Invitee Questions Card */}
          <div className="border border-gray-300 rounded-md p-4 space-y-3 bg-gray-50">
            <div className="flex items-center gap-2">
              {/* Lock icon for illustration only */}
              <Lock size={16} className="text-gray-600" />
              <span className="text-sm font-medium">Invitee questions</span>
            </div>

            {/* Example: Name, Email + allow guests */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <span className="text-sm text-gray-700">
                Name, Email
              </span>
              <div className="flex items-center gap-2 text-sm">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowGuests}
                    onChange={handleToggleGuests}
                  />
                  <span>Allow invitees to add guests</span>
                </label>
              </div>
            </div>

            {/* Example question */}
            {questions.map((q) => (
              <div key={q.id} className="flex items-start flex-col border-b border-gray-200 pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0">
                <span className="text-sm text-gray-700 font-medium">
                  {q.label}
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  {q.type === "multiline" ? "Multiple Lines" : "Single Line"}
                </span>
              </div>
            ))}

            {/* Add new question */}
            <button
              onClick={handleAddQuestion}
              className="flex items-center gap-1 text-sm text-blue-600 hover:underline mt-2"
            >
              <Plus size={16} />
              Add new question
            </button>
          </div>
        </div>

        {/* Collect payment on form */}
        <div>
          <button className="text-blue-600 hover:underline text-sm font-medium">
            + Collect payment
          </button>
        </div>

        {/* Confirmation Page */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Confirmation page
          </h3>
          <p className="text-sm text-gray-600">
            After booking: Calendly confirmation page
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-end">
        <button
          onClick={handleSaveAndClose}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl text-base"
        >
          Save and close
        </button>
      </div>
    </div>
  );
}
