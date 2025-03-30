import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import JiraBoard from "../jiraBoard";
import Backlog from "../backlog";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiListBullets } from "react-icons/pi";
import Goal from "../goal";

export default function MiniView() {
  const [planning, setPlanning] = useState(true);

  const links = ["Board", "Goal",  "Outline"];

  const epics = [
    { id: 1, name: "Dashboard" },
    { id: 2, name: "My Feed" },
    { id: 3, name: "Topics" },
    { id: 4, name: "Competitions" },
    { id: 5, name: "Leaderboard" },
  ];

  const sprints = [
    { id: 1, version: "1.0", status: "in_progress" },
    { id: 2, version: "1.1", status: "planned" },
    { id: 3, version: "1.2", status: "planned" },
  ];

  const [selectedComponent, setSelectedComponent] = useState("Board");

  return (
    <div className="flex h-96 w-full rounded-tl-lg border shadow-md overflow-hidden z-[2] bg-gray-50">
      <aside className="w-36 bg-white shadow-lg">
        <div className="p-2">
          <h1 className="text-lg font-bold text-purple-700">SnapLabs</h1>
        </div>

        <div className="px-2 border-b">
          <div className="flex items-center space-x-2">
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
              alt="User avatar"
              className="w-6 h-6 rounded-full"
            />
            <div>
              <div className="text-sm font-medium">Saketh</div>
              <div className="text-[.6rem] text-gray-500">
                Working at TechSnap
              </div>
            </div>
          </div>
        </div>

        <ul className="text-xs font-normal mt-2 px-2 flex flex-col gap-1">
          <button
            className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-[#f5f4ef]"
            onClick={() => setPlanning(!planning)}
          >
            <span>Planning</span>
            <span>{planning ? <FaChevronUp /> : <FaChevronDown />}</span>
          </button>
          {planning &&
            links.map((link) => (
              <li
                key={link}
                className={`flex gap-1 ml-1 items-center  ${
                  selectedComponent === link ? "text-purple-700" : ""
                }`}
                onClick={() => setSelectedComponent(link)}
              >
                {link}
              </li>
            ))}
        </ul>
      </aside>

      <main className="flex-1">
        <div className="text-xs border-b flex w-full font-bold justify-end items-center gap-2  p-1 shadow-sm ">
          <div className=" text-white bg-violet-500 text-[.6rem] shadow-sm flex items-center justify-center rounded-sm p-[.2rem] ">
            Go Pro
          </div>
          <div className="flex items-center ">
            <PiListBullets size={14} />
          </div>
          <div className="">
            <IoSettingsOutline size={14} />
          </div>
          <div className="">
            <IoMdNotificationsOutline size={16} />
          </div>

          <div className="">
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
              alt="profile"
              className="h-6 w-6 rounded-full"
            />
          </div>
        </div>
        {selectedComponent === "Goal" && <Goal compact={true} />}
        {selectedComponent === "Board" && <JiraBoard compact={true} />}
        {selectedComponent === "Outline" && <Backlog compact={true} />}
      </main>
    </div>
  );
}
