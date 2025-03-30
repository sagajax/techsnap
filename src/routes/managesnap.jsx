import React, { useEffect, useState, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const MSMobileLayout = React.lazy(() => import("@/managesnap/components/Mobileview/Layout"));
const MSMobileChannels = React.lazy(() => import("@/managesnap/components/Mobileview/Home"));
const MSMobileMessages = React.lazy(() => import("@/managesnap/components/Mobileview/Messages"));
const MSMobileCalendar = React.lazy(() => import("@/managesnap/components/Mobileview/Calendar"));
const MSMobileNotification = React.lazy(() => import("@/managesnap/components/Mobileview/Notification"));
const MSMobileSettings = React.lazy(() => import("@/managesnap/components/Mobileview/Settings"));
const MSMobileChat = React.lazy(() => import("@/managesnap/components/Mobileview/Chat"));
const MSMobileProfile = React.lazy(() => import("@/managesnap/components/Mobileview/Profile"));
const MSMobileSearch = React.lazy(() => import("@/managesnap/components/Mobileview/Search"));
const Members = React.lazy(() => import("../managesnap/components/ChatComps/ManageMembers"));

const MSLayout = React.lazy(() => import("@/managesnap/components/MSLayout"));
const MSHome = React.lazy(() => import("@/managesnap/components/Home"));
const MSDMs = React.lazy(() => import("@/managesnap/components/DMs"));
const MSNotifications = React.lazy(() => import("../managesnap/components/Activity"));
const MSSettings = React.lazy(() => import("@/managesnap/components/Settings"));
const MSSearch = React.lazy(() => import("../managesnap/components/Search"));
const CKEDitor = React.lazy(() => import("../CKEditor"));

export default function ManageSnapRoutes() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {isMobile ? (
          <>
            <Route path="/managesnap" element={<MSMobileLayout />}>
              <Route index element={<Navigate to="channels" replace />} />
              <Route path="channels" element={<MSMobileChannels />} />
              <Route path="dms" element={<MSMobileMessages />} />
              <Route path="calendar" element={<MSMobileCalendar />} />
              <Route path="notifications" element={<MSMobileNotification />} />
              <Route path="settings" element={<MSMobileSettings />} />
            </Route>
            <Route path="/managesnap/chat/:type/:id" element={<MSMobileChat />} />
            <Route path="/managesnap/profile/:id" element={<MSMobileProfile />} />
            <Route path="/managesnap/search" element={<MSMobileSearch />} />
          </>
        ) : (
          <>
            <Route path="dashboard/ckeditor" element={<CKEDitor />} />
            <Route path="/managesnap" element={<MSLayout />}>
              <Route index element={<Navigate to="home" replace />} />
              <Route path="home" element={<MSHome />} />
              <Route path="home/:channelId" element={<MSHome />} />
              <Route path="home/:chatId" element={<MSHome />} />
              <Route path="dms" element={<MSDMs />} />
              <Route path="notifications" element={<MSNotifications />} />
              <Route path="settings" element={<MSSettings />} />
              <Route path="search" element={<MSSearch />} />
              <Route path="manage-members" element={<Members />} />
            </Route>
            
          </>
        )}
      </Routes>
    </Suspense>
  );
}
