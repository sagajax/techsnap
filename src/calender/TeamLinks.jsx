import React from "react";
import { Link2, MailCheck } from "lucide-react";

// Accept props to show different texts for different tabs
const TeamLinks = ({ heading, description, buttonText }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
      {/* Icon */}
      <div className="bg-yellow-100 p-3 rounded-full">
        <Link2 className="text-yellow-500 w-6 h-6" />
      </div>

      {/* Title & Description */}
      <h2 className="text-lg font-semibold text-gray-900 mt-4">{heading}</h2>
      <p className="text-gray-600 max-w-md mt-2">
        {description}
      </p>

      {/* Button & Link */}
      <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
        {buttonText}
      </button>

      <a href="#" className="mt-2 text-blue-600 text-sm hover:underline">
        Learn more
      </a>

      {/* Footer */}
      <div className="mt-10 text-gray-500 text-sm flex flex-col items-center">
        <p>Send & personalize Scheduling Links from Gmail</p>
        <div className="flex items-center space-x-2 mt-1">
          <MailCheck className="w-5 h-5" />
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
            Add to Gmail
          </a>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamLinks;
