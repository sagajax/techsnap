import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/sidebar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiListBullets } from "react-icons/pi";

export default function LayoutProjects({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col items-center justify-center relative bg-white dark:bg-[#2e2e2c] w-full h-screen overflow-hidden">
        <SidebarTrigger
          className="absolute left-0 top-3 text-gray-800 hover:bg-gray-200 
            dark:text-white dark:hover:bg-[#1a1918] dark:hover:text-white"
        />
        <div className="text-xl border-b flex w-full font-bold justify-end items-center gap-4  p-2 shadow-sm ">
          <div className=" text-white bg-violet-500 shadow-sm flex gap-2 items-center justify-center rounded-md px-3 py-1 cursor-pointer">
            Go Pro
          </div>
          <div className="flex items-center ">
            <PiListBullets size={20} />
          </div>
          <div className="cursor-pointer">
            <IoSettingsOutline size={20} />
          </div>
          <div className="cursor-pointer">
            <IoMdNotificationsOutline size={22} />
          </div>

          <div className="cursor-pointer">
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
