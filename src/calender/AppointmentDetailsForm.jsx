import React, { useState } from "react";

function AppointmentDetailsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md  text-black">
      <h2 className="text-2xl font-semibold mb-6">Enter Details</h2>
      <form>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="button"
          className="mb-5 text-blue-600 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Guests
        </button>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Please share anything that will help prepare for our meeting.
          </label>
          <textarea
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <p className="text-xs flex flex-row text-gray-500 mb-5">
          By proceeding, you confirm that you have read and agree to{" "}
          
          Calendly's Terms of Use and{" "}Privacy Notice
        </p>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full text-sm"
        >
          Schedule Event
        </button>
      </form>
    </div>
  );
}

export default AppointmentDetailsForm;
