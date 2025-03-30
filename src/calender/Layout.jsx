import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function CalendarLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden no-scrollbar">
      <Sidebar />
      <main className="flex-1 bg-white overflow-hidden no-scrollbar">
        <Outlet />
      </main>
    </div>
  );
}

export default CalendarLayout;