import React from "react";
import { CiSettings } from "react-icons/ci";
import {
  IoIosNotifications,
  IoIosSettings,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaInfo } from "react-icons/fa";
import CourseContent from "./info.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosNavigate } from "react-icons/io";
import Notification from "./notification.jsx";
import Profile from "./profile.jsx";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { PiListBullets } from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
const Navbar = ({ toggleSidebar, toggleSettingBar, currentContent }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCourseContentOpen, setIsCourseContentOpen] = useState(false);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleCourseContent = () => {
    setIsCourseContentOpen(!isCourseContentOpen);
  };
  const bgColor = {
    main: "bg-[#c344a7]",
    video: "bg-[#c344a7]",
    content: "bg-[#c344a7]",
    quiz: "bg-[#c344a7]",
    complete: "bg-[#c344a7]",
  };

  return (
    <>
      <nav className="bg-white border border-gray-100 fixed w-full z-10 top-0">
        <div className="mx-auto px-4">
          <div className="flex justify-between h-[55px]">
            <img
              src="https://www.techsnap.in/assets/assets/img/logo-black.png"
              alt="logo"
              className="h-16 w-auto object-contain"
            />
            <TooltipProvider>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger>
                    <div className={`px-6 py-1 rounded ${currentContent === "main" ? bgColor.main : "bg-gray-200"}`}></div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#c344a7] text-white p-1 px-2 rounded-lg">Start</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <div className={`px-6 py-1 rounded ${currentContent === "content" ? bgColor.main : "bg-gray-200"}`}></div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#c344a7] text-white p-1 px-2 rounded-lg">Content</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <div className={`px-6 py-1 rounded ${currentContent === "video" ? bgColor.video : "bg-gray-200"}`}></div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#c344a7] text-white p-1 px-2 rounded-lg">Video</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <div className={`px-6 py-1 rounded ${currentContent === "quiz" ? bgColor.quiz : "bg-gray-200"}`}></div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#c344a7] text-white p-1 px-2 rounded-lg">Quiz</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <div className={`px-6 py-1 rounded ${currentContent === "complete" ? bgColor.complete : "bg-gray-200"}`}></div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#c344a7] text-white p-1 px-2 rounded-lg">Complete</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
           

            <div className="flex items-center space-x-4">
              <div className=" text-white bg-violet-500 shadow-sm flex gap-2 items-center justify-center rounded-md px-3 py-1 cursor-pointer"> Go Pro</div>
              <div className="flex items-center " onClick={toggleSidebar}>
                  <PiListBullets size={20} />
                
              </div>
              <div onClick={toggleSettingBar} className="cursor-pointer">
                <IoSettingsOutline size={20} />
              </div>
              <div onClick={toggleNotification} className="cursor-pointer">
                <IoMdNotificationsOutline size={22} />
              </div>
              {/* <Link to="/detailsPages/first" className="cursor-pointer">
                <MdOutlineSupportAgent size={23} />
              </Link>
              <div onClick={toggleCourseContent} className="cursor-pointer">
                <AiOutlineThunderbolt size={21} />
              </div> */}
              <div onClick={toggleProfile} className="cursor-pointer">
                <img
                  src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
                  alt="profile"
                  className="h-8 w-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Course Info  */}
        {isCourseContentOpen && <CourseContent onClose={toggleCourseContent} />}

        {/* Notification */}
        {isNotificationOpen && <Notification onClose={toggleNotification} />}
        {/* Profile */}
        {isProfileOpen && <Profile onClose={toggleProfile} />}
      </nav>
    </>
  );
};

export default Navbar;
