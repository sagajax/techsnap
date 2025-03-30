import { IoIosAddCircle, IoMdSearch } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { recents } from "./components/sidebar";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { RiCheckDoubleLine } from "react-icons/ri";

export default function AllChat() {
  const navigate = useNavigate();
  const [selectedChats, setSelectedChats] = useState([]);

  return (
    <>
      <div className="w-full flex mt-2 pl-10 pr-2 justify-between">
        <h2 className="flex gap-1 text-gray-800 dark:text-[#cbcac5] text-base items-center font-medium">
          <IoChatbubblesOutline />
          Your Chat History
        </h2>
        <button
          className="flex items-center  px-2 md:px-4 py-1  text-sm md:text-base bg-orange-600 dark:bg-[#b15f3b] font-normal gap-2 rounded-md text-white"
          onClick={() => navigate("/SnappieAi")}
        >
          <IoIosAddCircle />
          Start new chat
        </button>
      </div>
      <div className="mb-auto mt-20 w-[90%] md:w-1/2 flex flex-col gap-2">
        <div className="relative">
          <IoMdSearch
            className="absolute left-2 top-2 text-gray-600 dark:text-white"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 rounded-md pl-8 bg-gray-100 dark:bg-[#3c3c3a] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        {selectedChats.length ? (
          <div className="flex justify-between items-center">
            <div className="text-blue-600 flex gap-1 items-center">
              <RiCheckDoubleLine /> {selectedChats.length} selected chat
            </div>
            <div className="flex gap-2 text-sm items-center">
              <div
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={() => setSelectedChats([...recents])}
              >
                Select All
              </div>
              <div
                className="cursor-pointer text-gray-800 dark:text-[#cbcac5] font-semibold px-2 py-1 rounded-sm bg-gray-200 dark:bg-[#1a1918]"
                onClick={() => setSelectedChats([])}
              >
                Cancel
              </div>
              <div className="cursor-pointer text-white font-semibold px-2 py-1 rounded-sm bg-red-400">
                Delete Selected
              </div>
            </div>
          </div>
        ) : (
          <div className="text-lg font-semibold mt-2 text-gray-800 dark:text-[#cbcac5]">
            You have {recents.length} previous chats with SnappieAI
          </div>
        )}
        <div className="flex w-full flex-col h-[50vh] gap-3">
          {recents.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col group gap-1 p-4 relative rounded-lg border 
                ${
                  selectedChats.includes(item)
                    ? "border-blue-500 bg-blue-400 bg-opacity-20"
                    : "border-gray-200 dark:border-[#3c3c3a]"
                } 
                text-gray-800 dark:text-[#cbcac5] mt-2`}
            >
              {item.title}
              <input
                type="checkbox"
                checked={selectedChats.includes(item)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedChats([...selectedChats, item]);
                  } else {
                    setSelectedChats(
                      selectedChats.filter((chat) => chat !== item)
                    );
                  }
                }}
                className="absolute -left-[.4rem] top-1/2 -translate-y-1/2 group-hover:block hidden"
              />
              <MdDelete
                className="absolute right-2 top-2 text-gray-600 dark:text-[#cbcac5] group-hover:block hidden"
                onClick={() =>
                  setSelectedChats(
                    selectedChats.filter((chat) => chat !== item)
                  )
                }
              />
              <span className="text-[.7rem] text-gray-600 dark:text-gray-400">
                Last Message at {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
