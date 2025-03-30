import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { IoAlbumsOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { GoGoal, GoTasklist } from "react-icons/go";
import { MdOutlineSpaceDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { Avatar } from "@mui/material";
import logo from "../../../../assets/icon.jpeg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { RiTimeLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";

export const links = [
  { name: "Goal", url: "/projects/details/goals", icon: <GoGoal /> },
  { name: "Outline", url: "/projects/details", icon: <IoAlbumsOutline /> },

  { name: "Timeline", url: "/projects/details/timeline", icon: <RiTimeLine /> },
  { name: "Summary", url: "/projects/details/summary", icon: <CiGlobe /> },
];
export const developments = [
  { name: "Tasks", url: "/projects/details/issues", icon: <GoTasklist /> },
  {
    name: "Board",
    url: "/projects/details/board",
    icon: <MdOutlineSpaceDashboard />,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const [planning, setPlanning] = useState(true);
  const [development, setDevelopment] = useState(true);

  return (
    <Sidebar  className="border-none">
      <SidebarContent className="h-full custom-scrollbar p-4  dark:bg-[#21211f]">
        <div className="flex flex-col gap-6">
          <span className="flex gap-2 items-center text-black">
            <img src={logo} className="h-6 w-6" /> SnapLabs
          </span>
          <div className="flex gap-2 items-center text-black text-sm font-bold">
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
              alt="profile"
              className="h-8 w-8 rounded-sm "
            />
            <span className="flex flex-col">
              Prince
              <span className="text-[0.6rem] font-light">
                working at TechSnap
              </span>
            </span>
          </div>
        </div>

        <ul className="text-lg font-normal mt-4 flex flex-col gap-2">
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
                key={link.name}
                className="flex gap-2 ml-2 items-center"
                onClick={() => navigate(link.url)}
              >
                {link.icon}
                {link.name}
              </li>
            ))}
        </ul>
        <ul className="text-lg font-normal mt-4 flex flex-col gap-2">
          <button
            className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-[#f5f4ef]"
            onClick={() => setDevelopment(!development)}
          >
            <span>Development</span>
            <span>{development ? <FaChevronUp /> : <FaChevronDown />}</span>
          </button>
          {development &&
            developments.map((link) => (
              <li
                key={link.name}
                className="flex gap-2 ml-2 items-center"
                onClick={() => navigate(link.url)}
              >
                {link.icon}
                {link.name}
              </li>
            ))}
        </ul>
        <div className=" flex justify-center text-[.7rem] mt-auto gap-4 ">
          <button className="bg-gray-200 border items-center flex gap-1 text-black p-1 px-3 rounded-sm">
            {" "}
            <MdOutlineSupportAgent size={12} />
            Get Support
          </button>{" "}
          <button className=" text-black p-1 items-center flex gap-1 px-3 rounded-sm border border-black ">
            <BsStars size={14} />
            Ai History
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
