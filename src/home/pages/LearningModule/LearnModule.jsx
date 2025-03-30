import React, { useState } from "react";
import Lecture from "./Lecture.jsx";
import Video from "./Video.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import Quiz from "./Quiz.jsx";
import CompletePage from "./components/completePage.jsx";
import Content from "./components/content.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SettingBar from "./components/Settingbar.jsx";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { PiSparkleFill } from "react-icons/pi";
import { useSettingStore } from "./utils/store.js";
import ChatInterface from "./components/chatBot.jsx";
import SidePopup from "./components/sidePopup.jsx";

function LearnModule() {
  const [currentContent, setCurrentContent] = useState("main");
  const { isButtonExpanded, setIsButtonExpanded, isChatOpen, setIsChatOpen} = useSettingStore();

  // Lifted state from Navbar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingBarOpen, setIsSettingBarOpen] = useState(false);
  

  const handleNextLesson = () => {
    if (currentContent === "main") {
      setCurrentContent("content");
    } else if (currentContent === "content") {
      setCurrentContent("video");
    } else if (currentContent === "video") {
      setCurrentContent("quiz");
    } else if (currentContent === "quiz") {
      setCurrentContent("complete");
    }
  };

  const handlePrevLesson = () => {
    if (currentContent === "quiz") {
      setCurrentContent("video");
    } else if (currentContent === "video") {
      setCurrentContent("content");
    } else if (currentContent === "content") {
      setCurrentContent("main");
    } else if (currentContent === "complete") {
      setCurrentContent("quiz");
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSettingBar = () => setIsSettingBarOpen(!isSettingBarOpen);
  const handlePositionChange = (position) => setPopupPosition(position);
  const handleChatToggle = () => setIsChatOpen(!isChatOpen);

  return (
    <div className="">
      <Navbar
        toggleSidebar={toggleSidebar}
        toggleSettingBar={toggleSettingBar}
        isSidebarOpen={isSidebarOpen}
        isSettingBarOpen={isSettingBarOpen}
        currentContent={currentContent}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <SettingBar
        isOpen={isSettingBarOpen}
        closeSettingBar={toggleSettingBar}
        onPositionChange={handlePositionChange}
      />
      <div
        className={` mt-[60px] ${
          isSidebarOpen ? "blur-sm overflow-hidden" : ""
        } ${isSettingBarOpen ? "blur-sm overflow-hidden" : ""} 
        } `}
      >
        {currentContent === "main" ? (
          <Lecture />
        ) : currentContent === "content" ? (
          <Content />
        ) : currentContent === "video" ? (
          <Video />
        ) : currentContent === "quiz" ? (
          <Quiz />
        ) : currentContent === "complete" ? (
          <CompletePage
            onNextLesson={handleNextLesson}
            onPrevLesson={handlePrevLesson}
          />
        ) : null}
      </div>

      
      <div className="fixed bottom-5 right-5 flex gap-3">
        <button
          onClick={handlePrevLesson}
          disabled={currentContent === "main"}
          className={`flex items-center gap-2 ${
            isButtonExpanded ? "px-4" : "px-2"
          } py-2 rounded-full transition-all duration-200
            ${
              currentContent === "main"
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 hover:border-gray-400"
            }`}
        >
          <MdNavigateBefore size={20} />
          {isButtonExpanded && <span>Previous</span>}
        </button>

        <button
          onClick={handleNextLesson}
          disabled={currentContent === "complete"}
          className={`flex items-center gap-2 ${
            isButtonExpanded ? "px-4" : "px-2"
          }  py-2 rounded-full transition-all duration-200
            ${
              currentContent === "complete"
                ? "bg-blue-300 text-white cursor-not-allowed"
                : "bg-violet-500 hover:bg-violet-600 text-white"
            }`}
        >
          {isButtonExpanded && <span>Next</span>}
          <MdNavigateNext size={20} />
        </button>
      </div>
    </div>
  );
}

export default LearnModule;
