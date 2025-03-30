import { useState } from "react";
import { Link } from "react-router-dom";
import { useSettingStore } from "../utils/store";
import SidePopup from "./sidePopup";
import { FaChevronRight } from "react-icons/fa6";

const chapters = [
  {
    id: 1,
    title: "Introduction",
    lessons: [
      { name: "Topic 1.1", xp: 100 },
      { name: "Topic 1.2", xp: 100 }
    ],
  },
  {
    id: 2,
    title: "Select Records",
    lessons: [
      { name: "SQL SELECT", xp: 150 },
      { name: "SELECT WHERE", xp: 150 },
      { name: "AND, OR and NOT", xp: 200 }
    ],
  },
  {
    id: 3,
    title: "Aggregate Functions",
    lessons: [
      { name: "Topic 3.1", xp: 200 },
      { name: "Topic 3.2", xp: 200 }
    ],
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openChapters, setOpenChapters] = useState({});
  const {isPopupRight, setIsPopupRight} = useSettingStore();

  const toggleChapter = (id) => {
    setOpenChapters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <SidePopup isOpen={isOpen} closeSettingBar={toggleSidebar} className="bg-white" isFooter={false}>
      
        <h2 className="text-xl font-semibold mb-8 mt-4">Learn SQL Basics</h2>
          <ul className="flex flex-col gap-4">
            {chapters.map(({ id, title, lessons }) => (
              <li key={id} className={` rounded-2xl ${openChapters[id] ? 'border' : 'border-none'}`} onClick={() => toggleChapter(id)}>
                <div
                  className={`text-left w-full border border-gray-200 rounded-2xl p-4 text-gray-700 font-bold flex justify-between items-center ${openChapters[id] ? 'bg-[#eef1f3]' : 'bg-transparent'} `}
                  
                >
                  <div className="flex flex-col">
                  <span className="text-sm text-gray-400">Stage {id}</span> <span className="text-lg font-semibold text-black">{title}</span></div>
                  <FaChevronRight className={`transition-transform ${openChapters[id] ? '-rotate-90' : 'rotate-90'}`} />
                </div>
                {openChapters[id] && (
                  <ul className="p-4">
                    {lessons.map((lesson, index) => (
                      <li key={index} className="mb-2 pl-4 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <Link className="text-black font-medium w-full flex justify-between"><div>{lesson.name}</div> <div>{lesson.xp}{" "}XP</div></Link>
                      </li>
                    ))}
                  </ul>
                )}
                
              </li>
            ))}
          </ul>
      </SidePopup>

  );
};

export default Sidebar;
