// src/components/Scheduling.jsx
import React, { useState } from "react";
import { Calendar } from "lucide-react";
import MeetingCard from "./MeetingCard";
import TeamLinks from "./TeamLinks";
import LinksModal from "./LinksModal";
import { Dialog } from "@headlessui/react";
import EventTypeSelector from "./EventTypeselector";
import { useSelector } from "react-redux";

function Scheduling() {
  // Pull meeting templates from Redux
  const meetingTemplates = useSelector((state) => state.meeting.meetingEvents);
  console.log(meetingTemplates);

  const [isEventTypeModalOpen, setIsEventTypeModalOpen] = useState(false);
  const [newMeeting, setNewMeeting] = useState({
    title: "",
    description: "",
    duration: "",
    platform: "Google Meet",
  });

  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("myLinks");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMeeting.title && newMeeting.description && newMeeting.duration) {
      // If needed, dispatch meetingInitialiser here
      setNewMeeting({
        title: "",
        description: "",
        duration: "",
        platform: "Google Meet",
      });
    }
  };

  // Called only when user clicks the Edit (Update) icon in MeetingCard
  const handleEditMeetingClick = (meeting) => {
    setSelectedMeeting(meeting);
    setIsLinksModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <button
                className={`flex items-center space-x-1 ${
                  activeTab === "myLinks"
                    ? "text-blue-600 font-bold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("myLinks")}
              >
                <span className="text-sm">My Links</span>
              </button>
              <button
                className={`flex items-center space-x-1 ${
                  activeTab === "teamLinks"
                    ? "text-blue-600 font-bold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("teamLinks")}
              >
                <span className="text-sm">Team Links</span>
              </button>
              <button
                className={`flex items-center space-x-1 ${
                  activeTab === "roundRobin"
                    ? "text-blue-600 font-bold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("roundRobin")}
              >
                <span className="text-sm">Round Robin</span>
              </button>
              <button
                className={`flex items-center space-x-1 ${
                  activeTab === "hiddenLinks"
                    ? "text-blue-600 font-bold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("hiddenLinks")}
              >
                <span className="text-sm">Hidden Links</span>
              </button>
              <button
                className={`flex items-center space-x-1 ${
                  activeTab === "team"
                    ? "text-blue-600 font-bold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("team")}
              >
                <span className="text-sm">Team</span>
              </button>
            </div>
            <button
              onClick={() => setIsEventTypeModalOpen(true)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-150"
            >
              <Calendar size={16} />
              <span className="text-sm">New Event</span>
            </button>
          </div>
        </div>

        {/* Render content based on active tab */}
        {activeTab === "myLinks" ? (
          <div className="flex flex-wrap gap-3">
            {meetingTemplates.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                meeting={meeting}
                // Only open the LinksModal when user clicks the edit icon
                onEditClick={() => handleEditMeetingClick(meeting)}
              />
            ))}
          </div>
        ) : activeTab === "teamLinks" ? (
          <TeamLinks
            heading="You're not in any Team links"
            description="Team links allow invitees to book time with multiple members of your team."
            buttonText="Create a Team link"
          />
        ) : activeTab === "roundRobin" ? (
          <TeamLinks
            heading="You're not in any Round Robin meetings"
            description="Round Robin meetings help distribute scheduling among team members based on availability."
            buttonText="Create a Round Robin meeting"
          />
        ) : activeTab === "hiddenLinks" ? (
          <TeamLinks
            heading="You're not in any Hidden Links"
            description="Hidden links are private and can be shared selectively."
            buttonText="Create a Hidden Link"
          />
        ) : activeTab === "team" ? (
          <TeamLinks
            heading="You're not in any Team meetings"
            description="Team meetings allow invitees to schedule time with multiple team members."
            buttonText="Create a Team meeting"
          />
        ) : null}
      </div>

      <EventTypeSelector
        isOpen={isEventTypeModalOpen}
        onClose={() => setIsEventTypeModalOpen(false)}
      />

      <Dialog
        open={isLinksModalOpen}
        onClose={() => setIsLinksModalOpen(false)}
        className="relative z-50 w-full h-full"
      >
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center w-full">
          <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 w-full h-full">
            <LinksModal
              isOpen={true}
              onClose={() => setIsLinksModalOpen(false)}
              meeting={selectedMeeting}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default Scheduling;
