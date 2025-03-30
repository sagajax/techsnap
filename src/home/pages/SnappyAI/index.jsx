import { IoChatbubblesOutline } from "react-icons/io5";
import { recents } from "./components/sidebar";
import { FaAngleDown, FaAngleUp, FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuPin, LuShare } from "react-icons/lu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const greetings = [
  "Hello! How can I help you today?",
  "Hi there! Ready to assist you!",
  "Welcome! Let's work together.",
  "Greetings! What can I do for you?",
  "Hey! Looking forward to helping you!",
];

export default function SnappieAI() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [randomGreeting, setRandomGreeting] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setRandomGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }, []);

  return (
    <>
      <div className=" flex self-end mt-4 mr-4 items-center gap-4">
        <button>
          <LuPin className="mt-1" size={20} />
        </button>
        <button>
          <LuShare size={20} />
        </button>
        <Popover>
          <PopoverTrigger >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-48 bg-white dark:bg-[#3c3c3a] rounded-lg shadow-lg py-2 mr-2">
          <div className="flex flex-col gap-2">
            <button className="text-left w-full">Profile</button>
            <button className="text-left w-full">Settings</button>
            <button className="text-left w-full">Logout</button>
          </div>
        </PopoverContent></Popover>

      </div>
      <div className="my-auto w-full flex flex-col items-center">
        <h1 className="text-lg mg:text-3xl font-medium text-gray-800 dark:text-[#cbcac5]">
          {randomGreeting}
        </h1>
        <textarea
          className="w-[90%] md:w-1/2 rounded-xl scrollbarhide h-20 md:h-36 resize-none border shadom-sm shodow-gray-50 bg-white dark:bg-zinc-800 
          text-gray-800 dark:text-white mt-4 px-4 
          placeholder:text-gray-500 dark:placeholder:text-white 
          placeholder:opacity-50 placeholder:pt-4
          focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="How can SnappieAI help you today?"
        />

        <div className="w-[90%] md:w-1/2 text-gray-800 dark:text-[#f5f4ef] mt-10">
          <div className="flex justify-between items-center">
            <h2 className="flex gap-1 text-sm md:text-base items-center font-medium">
              <IoChatbubblesOutline className="text-blue-700" />
              Your Recent Chats
              {isCollapsed ? (
                <FaAngleDown
                  className="cursor-pointer text-gray-600 dark:text-gray-400"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                />
              ) : (
                <FaAngleUp
                  className="cursor-pointer text-gray-600 dark:text-gray-400"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                />
              )}
            </h2>
            <div
              className="flex gap-1 items-center hover:underline text-base font-medium cursor-pointer"
              onClick={() => navigate("/SnappieAi/all-chats")}
            >
              View All <FaArrowRight size={14} />
            </div>
          </div>
          
          <div
            className={`mt-2 grid md:grid-cols-3 md:gap-4 ${
              isCollapsed ? "invisible" : "visible"
            }`}
          >
            {recents.slice(0,3).map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-1 line-clamp-1 p-4 h-f rounded-lg 
                border border-gray-200 dark:border-[#3c3c3a] 
                bg-white dark:bg-transparent
                text-gray-800 dark:text-[#cbcac5] mt-2 
                hover:bg-gray-50 dark:hover:bg-[#1a1918]/50
                transition-colors duration-200"
                onClick={() => navigate(`/SnappieAi/${item.id}`)}
              >
                <IoChatbubblesOutline className="self-start" />
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
