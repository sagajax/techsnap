import React, { useState, useEffect, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const DataSnapLayout = React.lazy(() => import("@/datasnap/components/Layout"));
const BBLayout = React.lazy(() => import("../datasnap/components/BBLayout"));
const BlogHome = React.lazy(() => import("@/datasnap/components/Home"));
const BlogExplore = React.lazy(() => import("@/datasnap/components/Explore"));
const BlogDrafts = React.lazy(() => import("@/datasnap/components/Drafts"));
const BlogPublished = React.lazy(() => import("@/datasnap/components/Publised"));
const BlogBookmarks = React.lazy(() => import("@/datasnap/components/Bookmarks"));
const BlogSearch = React.lazy(() => import("@/datasnap/components/Search"));
const BlogCreate = React.lazy(() => import("@/datasnap/components/Blog/BlogCreate"));
const BlogEdit = React.lazy(() => import("@/datasnap/components/Blog/BlogEdit"));
const BlogComments = React.lazy(() => import("@/datasnap/components/Comments"));
const BlogNotifications = React.lazy(() => import("@/datasnap/components/Alerts"));
const BlogSettings = React.lazy(() => import("@/datasnap/components/Settings"));
const BlogDetails = React.lazy(() => import("@/datasnap/components/Details"));
const Account = React.lazy(() => import("../datasnap/components/Settings/Account"));
const Profile = React.lazy(() => import("../datasnap/components/Settings/Profile"));
const Privacy = React.lazy(() => import("../datasnap/components/Settings/Privacy"));
const Preferences = React.lazy(() => import("../datasnap/components/Settings/Preferences"));
const Notify = React.lazy(() => import("../datasnap/components/Settings/Notify"));

export default function DataSnapRoutes() {
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
          <Route path="/datasnap" element={<BBLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<BlogHome />} />
            <Route path="explore" element={<BlogExplore />} />
            <Route path="drafts" element={<BlogDrafts />} />
            <Route path="published" element={<BlogPublished />} />
            <Route path="bookmarks" element={<BlogBookmarks />} />
            <Route path="notifications" element={<BlogNotifications />} />
            <Route path="details" element={<BlogDetails />} />
            <Route path="settings" element={<BlogSettings />}>
              <Route index element={<Navigate to="account" replace />} />
              <Route path="account" element={<Account />} />
              <Route path="profile" element={<Profile />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="preferences" element={<Preferences />} />
              <Route path="notifications" element={<Notify />} />
            </Route>
            <Route path="/datasnap/:id" element={<BlogComments />} />
          </Route>
        ) : (
          <Route path="/datasnap" element={<DataSnapLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<BlogHome />} />
            <Route path="explore" element={<BlogExplore />} />
            <Route path="drafts" element={<BlogDrafts />} />
            <Route path="published" element={<BlogPublished />} />
            <Route path="bookmarks" element={<BlogBookmarks />} />
            <Route path="notifications" element={<BlogNotifications />} />
            <Route path="details" element={<BlogDetails />} />
            <Route path="settings" element={<BlogSettings />}>
              <Route index element={<Navigate to="account" replace />} />
              <Route path="account" element={<Account />} />
              <Route path="profile" element={<Profile />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="preferences" element={<Preferences />} />
              <Route path="notifications" element={<Notify />} />
            </Route>
            <Route path="/datasnap/:id" element={<BlogComments />} />
          </Route>
        )}

        <Route path="ds/create" element={<BlogCreate />} />
        <Route path="/ds/edit/:id" element={<BlogEdit />} />
        <Route path="ds/search" element={<BlogSearch />} />
      </Routes>
    </Suspense>
  );
}
