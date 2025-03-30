import { useEffect, useState } from "react";
import ChatInterface from "../chatBot";
import { RiResetRightFill } from "react-icons/ri";
import { FaPlay, FaQuora, FaTimes } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import { GoReport } from "react-icons/go";
import { TbClipboardText } from "react-icons/tb";
import { TfiLightBulb } from "react-icons/tfi";
import icon from "../../../../../assets/icon.jpeg";
import { BsStars } from "react-icons/bs";
import { useSideBarSettingStore } from "../../utils/store";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdCopyAll } from "react-icons/md";
import { AiOutlineCompress, AiOutlineExpand } from "react-icons/ai";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function SideBarRndResizableComponent({ children }) {
  const [activeSection, setActiveSection] = useState("question");
  const { isCollapsed, setIsCollapsed } = useSideBarSettingStore();
  const [leftWidth, setLeftWidth] = useState(window.innerWidth / 2);
  const minWidth = 200;
  const maxWidth = window.innerWidth - minWidth;

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = leftWidth;

    const handleMouseMove = (e) => {
      let newWidth = startWidth + (e.clientX - startX);
      newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
      setLeftWidth(newWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const buttonConfig = [
    { id: "question", icon: FaQuora, tooltip: "Question" },
    { id: "clipboard", icon: TbClipboardText, tooltip: "Submissions" },
    { id: "lightbulb", icon: TfiLightBulb, tooltip: "Hint" },
    { id: "chatbot", icon: BsStars, tooltip: "Chatbot" },
  ];

  const getButtonStyles = (currentIndex, buttonConfig, activeSection) => {
    const activeIndex = buttonConfig.findIndex(
      (btn) => btn.id === activeSection
    );
    const isActive = buttonConfig[currentIndex].id === activeSection;

    if (isActive) {
      return "bg-white";
    }

    const isNextToActive = Math.abs(currentIndex - activeIndex) === 1;
    const isAboveActive = currentIndex === activeIndex - 1;
    const isBelowActive = currentIndex === activeIndex + 1;
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === buttonConfig.length - 1;

    let roundedClasses = "bg-[#f6f7f9] ";

    if (isNextToActive) {
      if (isBelowActive) {
        roundedClasses += " rounded-tr-2xl";
      } else if (isAboveActive) {
        roundedClasses += " rounded-br-2xl";
      }
    }

    if (isFirst && activeIndex === 1) {
      roundedClasses += " rounded-br-2xl";
    }
    if (isLast && activeIndex === buttonConfig.length - 2) {
      roundedClasses += " rounded-tr-2xl";
    }

    return roundedClasses.trim();
  };

  return (
    <div className="flex h-full w-full">
      <div
        style={{ width: isCollapsed ? "46px" : leftWidth }}
        className="flex-col relative"
      >
        <div className="bg-white border flex flex-row border-gray-300 shadow-md overflow-y-auto scrollbarhide h-full rounded-r-2xl">
          <div className="flex flex-col  sticky top-0 cursor-pointer ">
            {buttonConfig.map((button, index) => {
              const Icon = button.icon;

              return (
                <TooltipProvider key={button.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`p-4 transition-all duration-200 flex justify-center ${getButtonStyles(
                        index,
                        buttonConfig,
                        activeSection
                      )}`}
                      onClick={() => {
                        setActiveSection(button.id);
                        setIsCollapsed(false);
                      }}
                    >
                      <Icon
                        size={20}
                        className={
                          activeSection === button.id ? "text-[#b13e98]" : "text-gray-600"
                        }
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p className="bg-[#c344a7] text-white p-1 px-2 rounded-lg">{button.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
            <div
              className={`w-full h-full flex items-end justify-center pb-2 bg-[#f6f7f9] ${
                activeSection === "chatbot" ? "rounded-tr-2xl" : ""
              }`}
            >
              <img src={icon} className="h-6 w-6"></img>
            </div>
          </div>

          <div className="relative flex-1 ">
            {!isCollapsed && (
              <div className="absolute flex gap-2 z-10  top-2 right-2 p-2">
                <GoReport />
                <button
                  onClick={() => setIsCollapsed(true)}
                  className="text-gray-600 hover:text-black"
                >
                  <FaTimes size={18} />
                </button>
              </div>
            )}

            {!isCollapsed && (
              <div className="flex-1 w-full h-full overflow-y-auto scrollbarhide">
                {
                  children.slice(0, 3)[
                    buttonConfig.findIndex((b) => b.id === activeSection)
                  ]
                }
                {activeSection === "chatbot" && (
                  <ChatInterface isLeft={false} isHeader={false} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {!isCollapsed && (
        <div
          className="w-2 flex items-center cursor-col-resize  hover:bg-blue-200"
          onMouseDown={handleMouseDown}
        >
          <FaEllipsisVertical size={20} className="text-black" />
        </div>
      )}

      <div className="border-l border-gray-300 shadow-md rounded-2xl h-full flex-1 overflow-hidden bg-[#f6f7f9]">
        <div className="flex justify-between w-full items-center">
          <div className="  inline-flex p-2 px-5 bg-white text-sm justify-center">
            main.cpp
          </div>
          <div className="flex items-center justify-center gap-3 mr-2">
            <RiResetRightFill size={16} className="text-gray-500" />
            {isCollapsed ? (
              <AiOutlineCompress
                size={16}
                className="text-gray-500"
                onClick={() => {
                  setIsCollapsed(false);
                  setLeftWidth(window.innerWidth / 2);
                }}
              />
            ) : (
              <AiOutlineExpand
                size={16}
                className="text-gray-500"
                onClick={() => setIsCollapsed(true)}
              />
            )}
            <MdCopyAll size={16} className="text-gray-500" />
            <IoShareSocialOutline size={16} className="text-gray-500" />
            <button className="flex items-center justify-center p-1 px-3 gap-1  font-bold rounded-lg text-green-400">
              <FaPlay size={10} className="text-green-400" />
              Run
            </button>
          </div>
        </div>
        <div className=" shadow-md h-[95%] overflow-hidden ">{children[3]}</div>
      </div>
    </div>
  );
}
