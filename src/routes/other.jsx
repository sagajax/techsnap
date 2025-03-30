import React from "react";
import { Route, Routes } from "react-router-dom";
const LandingPage = React.lazy(() => import("@/home/pages/landingPage"));
import Search from "@/home/pages/search/search";
import LearnModule from "@/home/pages/LearningModule/LearnModule";
const TestPage = React.lazy(() => import("@/home/pages/testPage/testPage"));
const TestPage2 = React.lazy(() => import("@/home/pages/testPage/testPage2"));
const CalendarLayout = React.lazy(() => import("@/calender/Layout"));
const Calendar = React.lazy(() => import("@/calender/Calender"));
const Habits = React.lazy(() => import("@/calender/Habits"));
const Priorities = React.lazy(() => import("@/calender/Priorities"));
const Tasks = React.lazy(() => import("@/calender/Tasks"));
const Scheduling = React.lazy(() => import("@/calender/Scheduling"));
const Meeting = React.lazy(() => import("@/calender/Meeting"));
const TestPage3 = React.lazy(() =>
  import("@/home/pages/myFeed/component/comment/test")
);
const AppointmentBooking = React.lazy(() =>
  import("@/calender/AppointmentBooking")
);

export default function OtherRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="learningmodule" element={<LearnModule />} />
      <Route path="testpage" element={<TestPage />} />
      <Route path="testpage2" element={<TestPage2 />} />
      <Route path="test" element={<TestPage3 />} />
      <Route path="meeting" element={<Meeting />} />
      <Route path="booking" element={<AppointmentBooking />} />
      <Route path="calender" element={<CalendarLayout />}>
        <Route index element={<Calendar />} />
        <Route path="habits" element={<Habits />} />
        <Route path="priorities" element={<Priorities />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="scheduling" element={<Scheduling />} />
      </Route>
    </Routes>
  );
}
