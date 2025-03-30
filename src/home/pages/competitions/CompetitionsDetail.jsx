import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import CompetitionOverview from "./CompetionOverview";
import Leaderboard from "./planet/comp/leaderboard";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CompetitionDetails = () => {
  const [activeTab, setActiveTab] = useState("Settings");

  const tabs = [
    "Settings",
    "Overview",
    "Discussion",
    "Leaderboard",
    "Rules",
    "Team",
  ];

  const settingsMenu = [
    { title: "Basic Details", current: true },
    { title: "Images", current: false },
    { title: "Hosts", current: false },
    { title: "Prizes & Awards", current: false },
    { title: "Evaluation Metric", current: false },
    { title: "Teams & Submissions", current: false },
    { title: "Launch Checklist", current: true },
  ];

  const setupTasks = [
    {
      title: "Create Competition",
      description: "Set title, description, and participant access",
      completed: true,
    },
    {
      title: "Set Deadline",
      description:
        "Competitions typically last two to four months, and cannot last longer than a year after launch",
      completed: false,
    },
    {
      title: "Edit Rules",
      description: "Define the rules for this competition",
      completed: false,
    },
    {
      title: "Edit Overview Tab",
      description:
        "Publish at least one section. All sections must not have their default content",
      completed: false,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Settings":
        return (
          <div className="flex">
            {/* Progress Circle */}
            <div className="w-12 h-12 flex-shrink-0 mr-6">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                <div
                  className="absolute inset-0 border-4 border-green-500 rounded-full"
                  style={{ clipPath: "polygon(0 0, 10% 0, 10% 100%, 0 100%)" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-medium">1/10</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-5">
                  <h2 className="text-xl font-semibold">
                    You're off to a great start!
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    This competition is in draft mode. You have 9 more tasks to
                    complete before you can launch.
                  </p>
                </div>

                <div className="border-t border-gray-200">
                  <div className="px-6 py-5">
                    <h3 className="text-lg font-medium">Content & Setup</h3>
                    <div className="mt-4 space-y-4">
                      {setupTasks.map((task, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            {task.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                            )}
                          </div>
                          <div className="ml-3">
                            <h4 className="text-base font-medium">
                              {task.title}
                            </h4>
                            <p className="mt-1 text-sm text-gray-500">
                              {task.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Overview":
        return <CompetitionOverview />;
      case "Discussion":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold">Discussion</h2>
            <p className="mt-2 text-gray-600">
              This is the discussion section where participants can ask
              questions, share ideas, and discuss the competition.
            </p>
          </div>
        );
      case "Leaderboard":
        return <Leaderboard />;
      case "Rules":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold">Rules</h2>
            <p className="mt-2 text-gray-600">
              This section outlines the rules and guidelines that participants
              must follow during the competition.
            </p>
          </div>
        );
      case "Team":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold">Team</h2>
            <p className="mt-2 text-gray-600">
              Here you can manage your team members and their roles in the
              competition.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Go Back Button */}
      <div className=" p-8 ">
        <Link
          to="/dashboard/competitions"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft size={20} />
          <span className="text-lg">Go Back</span>
        </Link>
      </div>

      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-semibold text-gray-900">twefwefwe</h1>
            <span className="text-sm text-gray-500">wefvgwrfwefe</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Launch Checklist
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Content */}
          <div className="flex-1">{renderTabContent()}</div>

          {/* Right Sidebar (Settings Menu) - Conditionally Rendered */}
          {activeTab === "Settings" && (
            <div className="ml-8 w-64">
              <nav className="space-y-1">
                {settingsMenu.map((item) => (
                  <a
                    key={item.title}
                    href="#"
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitionDetails;
