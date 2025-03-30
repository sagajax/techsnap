// src/components/Habits.jsx
import React, { useState } from "react";
import { List, FileText, Eye } from "lucide-react";
import Template from "./Template";

const INITIAL_DAILY_REMINDERS = [
  {
    title: "📧 Morning Reminder",
    startTime: "09:00",
    endTime: "09:30",
    borderColor: "#22c55e",
    backgroundColor: "transparent",
    textColor: "black",
    daysOfWeek: [1, 2, 3, 4, 5],
    className: "morning-reminder dotted-border",
  },
  {
    title: "🍱 Lunch Break",
    startTime: "12:00",
    endTime: "13:00",
    borderColor: "#ef4444",
    backgroundColor: "#fecaca",
    textColor: "white",
    daysOfWeek: [1, 2, 3, 4, 5],
    className: "lunch-reminder",
  },
  {
    title: "📧 Evening Task",
    startTime: "17:00",
    endTime: "17:30",
    borderColor: "#8b5cf6",
    backgroundColor: "transparent",
    textColor: "black",
    daysOfWeek: [1, 2, 3, 4, 5],
    className: "evening-reminder dotted-border",
  },
];

function Habits() {
  const [dailyReminders, setDailyReminders] = useState(INITIAL_DAILY_REMINDERS);
  const [showForm, setShowForm] = useState(false);
  // Tabs: "allHabits", "templates", "detected"
  const [activeTab, setActiveTab] = useState("allHabits");

  // Form state for adding a new habit
  const initialFormState = {
    title: "",
    startTime: "",
    endTime: "",
    daysOfWeek: "1,2,3,4,5",
  };
  const [newHabit, setNewHabit] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHabit({ ...newHabit, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newHabit.title && newHabit.startTime && newHabit.endTime) {
      const daysArray = newHabit.daysOfWeek
        .split(",")
        .map((s) => Number(s.trim()))
        .filter((n) => !isNaN(n));
      const finalHabit = {
        title: newHabit.title,
        startTime: newHabit.startTime,
        endTime: newHabit.endTime,
        daysOfWeek: daysArray,
      };
      setDailyReminders([...dailyReminders, finalHabit]);
      setNewHabit(initialFormState);
      setShowForm(false);
    } else {
      alert("Please fill out all required fields (Title, Start Time, End Time).");
    }
  };

  const handleCancel = () => {
    setNewHabit(initialFormState);
    setShowForm(false);
  };

  return (
    <div className="h-screen overflow-y-scroll p-4 text-black">
      {/* Full-width Tab Bar */}
      <div className="w-full flex justify-between items-center mb-4 border-b pb-2">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("allHabits")}
            className={`flex items-center space-x-1 px-3 py-2 ${
              activeTab === "allHabits"
                ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <List size={18} />
            <span className="text-sm">All Habits</span>
          </button>
          <button
            onClick={() => setActiveTab("templates")}
            className={`flex items-center space-x-1 px-3 py-2 ${
              activeTab === "templates"
                ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <FileText size={18} />
            <span className="text-sm">Templates</span>
          </button>
          <button
            onClick={() => setActiveTab("detected")}
            className={`flex items-center space-x-1 px-3 py-2 ${
              activeTab === "detected"
                ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <Eye size={18} />
            <span className="text-sm">Detected</span>
          </button>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          New Habit
        </button>
      </div>

      {/* New Habit Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded p-6 mb-4 max-w-xl mx-auto"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={newHabit.title}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Time
            </label>
            <input
              type="time"
              name="startTime"
              value={newHabit.startTime}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              End Time
            </label>
            <input
              type="time"
              name="endTime"
              value={newHabit.endTime}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Days of Week
            </label>
            <input
              type="text"
              name="daysOfWeek"
              value={newHabit.daysOfWeek}
              onChange={handleInputChange}
              placeholder="e.g. 1,2,3,4,5"
              required
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
            <p className="text-xs text-gray-600 mt-1">
              Enter days as numbers (0=Sunday, 1=Monday, …, 6=Saturday), separated by commas.
            </p>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Add Habit
            </button>
          </div>
        </form>
      )}

      {/* Tab Content */}
      {activeTab === "allHabits" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dailyReminders.map((habit, index) => (
            <Template key={index} reminder={habit} />
          ))}
        </div>
      )}

      {activeTab === "templates" && (
        <div className="flex flex-col items-center py-10">
          <FileText size={48} className="text-gray-400" />
          <h2 className="text-xl font-semibold text-gray-700 mt-2">
            Elegant Habit Templates
          </h2>
          <p className="text-center text-gray-600 mt-2 max-w-md">
            Explore our curated collection of habit templates designed to inspire and streamline your daily routines.
          </p>
        </div>
      )}

      {activeTab === "detected" && (
        <div className="flex flex-col items-center py-10">
          <Eye size={48} className="text-gray-400" />
          <h2 className="text-xl font-semibold text-gray-700 mt-2">
            No Detected Habits
          </h2>
          <p className="text-center text-gray-600 mt-2 max-w-md">
            If Reclaim finds existing recurring events on your calendar, it will suggest converting them over to Habits.
          </p>
        </div>
      )}
    </div>
  );
}

export default Habits;

export {INITIAL_DAILY_REMINDERS as DAILY_REMINDERS}