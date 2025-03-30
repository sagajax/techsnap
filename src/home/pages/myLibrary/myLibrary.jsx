import { useState } from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { RiGraduationCapLine } from "react-icons/ri";
import { EmptyState } from "./components/cards";

function MyLibrary() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All", count: 0 },
    { id: "bookmarks", label: "Bookmarks", count: 0 },
    { id: "inProgress", label: "In Progress", count: 0 },
    { id: "completed", label: "Completed", count: 0 },
  ];

  const sections = [
    {
      id: "bookmarks",
      Icon: BsFillJournalBookmarkFill,
      message:
        "Start bookmarking content to keep track of all learning opportunities.",
    },
    {
      id: "inProgress",
      Icon: RiGraduationCapLine,
      message: "Start learning to see all of your in-progress items here.",
    },
    {
      id: "completed",
      Icon: RiGraduationCapLine,
      message:
        "Keep up the good work! Once you complete a course or a track, your accomplishment will appear here.",
    },
  ];

 

  return (
    <>
      <div className="p-6 border-b border-gray-200">
        <div className="flex gap-8 final">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-1 px-2 ${
                activeTab === tab.id
                  ? "bg-black text-white flex rounded-sm"
                  : "bg-gray-200 text-gray-600 flex rounded-sm"
              } font-inter`}
            >
              {`${tab.label} ${tab.count}`}
            </button>
          ))}
        </div>
      </div>
      <div className="final py-4 bg-white h-full">
        <div className="grid gap-6">
          {(activeTab === "all" || activeTab === "bookmarks") && (
            <div className="space-y-2 ">
              <h2 className="text-xl font-semibold font-inter text-gray-900">
                Bookmarks
              </h2>
              <EmptyState
                Icon={sections[0].Icon}
                message={sections[0].message}
               
              />
            </div>
          )}

          {(activeTab === "all" || activeTab === "inProgress") && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-inter text-gray-900">
                In Progress
              </h2>
              <EmptyState
                Icon={sections[1].Icon}
                message={sections[1].message}
              />
            </div>
          )}

          {(activeTab === "all" || activeTab === "completed") && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-inter text-gray-900">
                Completed
              </h2>
              <EmptyState
                Icon={sections[2].Icon}
                message={sections[2].message}
                isButton={false}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyLibrary;
