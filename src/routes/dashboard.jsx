import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route } from "react-router-dom";

const MainLayout = React.lazy(() => import("./../home/pages/layout"));
const Job = React.lazy(() => import("./../home/pages/job/dekstop/job"));
const Notification = React.lazy(() =>
  import("./../home/pages/notification/notification")
);
const MyProgress = React.lazy(() =>
  import("./../home/pages/myProgress/myprogress")
);
const MyFeed = React.lazy(() => import("@/home/pages/myFeed/myfeed"));
const MyFeedDetail = React.lazy(() =>
  import("@/home/pages/myFeed/component/feedDetail")
);
const Topics = React.lazy(() => import("@/home/pages/topics/topics"));
const Competitions = React.lazy(() =>
  import("@/home/pages/competitions/competitions")
);
const CreateCompetition = React.lazy(() =>
  import("@/home/pages/competitions/CreateCompetition")
);
const YourWork = React.lazy(() =>
  import("@/home/pages/competitions/YourWork")
);
const CompetitionDetails =React.lazy(()=>
  import("@/home/pages/competitions/CompetitionsDetail")
);
const LeaderBoard = React.lazy(() =>
  import("@/home/pages/leaderboard/leaderboard")
);
const Courses = React.lazy(() => import("@/home/pages/courses/courses"));
const CareerPath = React.lazy(() =>
  import("@/home/pages/careerPath/careerPath")
);
const SkillPath = React.lazy(() => import("@/home/pages/skillPath/skillPath"));
const Projects = React.lazy(() => import("@/home/pages/projects/projects"));
const AccountSettings = React.lazy(() =>
  import("@/home/pages/accountSettings/accountsSettings")
);
const CoursesMobile = React.lazy(() =>
  import("@/home/pages/mobile/courses/courses")
);
const CareerPathMobile = React.lazy(() =>
  import("@/home/pages/mobile/careerPath/careerPath")
);
const SkillPathMobile = React.lazy(() =>
  import("@/home/pages/mobile/skillPath/skillPath")
);
const MyProgressMobile = React.lazy(() =>
  import("@/home/pages/mobile/myProgress/myprogress")
);
const MyFeedMobile = React.lazy(() =>
  import("@/home/pages/mobile/myFeed/myfeed")
);
const MyFeedDetailMobile = React.lazy(() =>
  import("@/home/pages/mobile/myFeed/myfeed")
);
const ProjectsMobile = React.lazy(() =>
  import("@/home/pages/mobile/projects/projects")
);

const Planet = React.lazy(() => import("@/home/pages/competitions/planet/planet"));
import TagProfile from "@/home/pages/topics/oneTopic";
import CourseDetails from "@/home/pages/courses/details";
import ProjectDetails from "@/home/pages/projects/details";
import CareerDetails from "@/home/pages/careerPath/details";
import { default as CareerPathMoreDetails } from "@/home/pages/careerPath/moreDetails";

const SkillPathMoreDetails = React.lazy(() =>
  import("@/home/pages/skillPath/moreDetails")
);
const ProfileMobile = React.lazy(() =>
  import("@/home/pages/mobile/profile/secondProfile")
);
import SkillPathDetails from "@/home/pages/skillPath/detail";
import LiveEvent from "@/home/pages/liveEvent/liveEvent";
import Assement from "@/home/pages/assesment/assement";
import AssementDetails from "@/home/pages/assesment/deatils";
import Catalog from "@/home/pages/catalog/catalog";
import ProfilePage from "@/home/pages/profile/firstProfile";
import SecondProfilePage from "@/home/pages/profile/secondProfile";
import { Routes } from "react-router-dom";
import Footer from "../home/component/layoutComp/Footer";
import ScrollToTop from "./scrolltop";
import SnappieAI from "../home/pages/SnappyAI/index";
import Layout from "../home/pages/SnappyAI/layout";
import AllChat from "../home/pages/SnappyAI/allChat";
import Chat from "../home/pages/SnappyAI/chat";
import LayoutProjects from "../home/pages/projects/layout";
import JiraBoard from "../home/pages/projects/jiraBoard";
import Backlog from "../home/pages/projects/backlog";
import IssueList from "../home/pages/projects/issue";
import Goal from "../home/pages/projects/goal";
import MyLibrary from "../home/pages/myLibrary/myLibrary";

export default function DashboardRoutes() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/SnappieAi"
          element={
            <Layout>
              <SnappieAI />
            </Layout>
          }
        />
        <Route
          path="/SnappieAi/:id"
          element={
            <Layout>
              <Chat />
            </Layout>
          }
        />
        <Route
          path="/SnappieAi/all-chats"
          element={
            <Layout>
              <AllChat />
            </Layout>
          }
        />
        <Route path="topics" element={<Topics />} />
        <Route path="topics/oneTopic" element={<TagProfile />} />

        <Route path="competitions" element={<Competitions />} />

        {/* <Route path="competitions/host" element={<CreateCompetition />} /> */}

        <Route path="competitions/create" element={<CreateCompetition />} />
        <Route path="competitions/your-work" element={<YourWork />} />
        <Route path="competitions/:competitionId/*" element={<CompetitionDetails />} />
        
        <Route path="competitions/competitionPage" element={<Planet />} />

        <Route path="leaderboard" element={<LeaderBoard />} />

        <Route
          path="projects/details"
          element={
            <LayoutProjects>
              <Backlog />
            </LayoutProjects>
          }
        />
        <Route
          path="projects/details/board"
          element={
            <LayoutProjects>
              <JiraBoard />
            </LayoutProjects>
          }
        />
        <Route
          path="projects/details/issues"
          element={
            <LayoutProjects>
              <IssueList />
            </LayoutProjects>
          }
        />
        <Route
          path="projects/details/goals"
          element={
            <LayoutProjects>
             <Goal />
            </LayoutProjects>
          }
        />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="footer" element={<Footer />} />
          <Route path="job" element={<Job />} />
          <Route path="notification" element={<Notification />} />

          <Route
            path="progress"
            index
            element={isMobile ? <MyProgressMobile /> : <MyProgress />}
          />
          <Route
            path="myfeed"
            element={isMobile ? <MyFeedMobile /> : <MyFeed />}
          />
          <Route
          path="myLibrary"
          element={<MyLibrary />}/>
          <Route
            path="myfeed/feeddetail"
            element={isMobile ? <MyFeedDetailMobile /> : <MyFeedDetail />}
          />
          <Route path="topics" element={<Topics />} />
          <Route path="topics/oneTopic" element={<TagProfile />} />

          <Route path="competitions" element={<Competitions />} />
          {/* <Route
                      path="competitions/host"
                      element={<CreateCompetition />}
                    /> */}

          <Route path="competitions/competitionPage" element={<Planet />} />

          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route
            path="courses"
            element={isMobile ? <CoursesMobile /> : <Courses />}
          />
          <Route path="courses/details" element={<CourseDetails />} />
          <Route path="career" element={<CareerPath />} />
          <Route path="career/:careerId" element={<CareerDetails />} />
          <Route path="details/:detailId" element={<CareerPathMoreDetails />} />

          <Route
            path="skill"
            element={isMobile ? <SkillPathMobile /> : <SkillPath />}
          />
          <Route path="skill/details" element={<SkillPathDetails />} />
          <Route path="skill/more" element={<SkillPathMoreDetails />} />

          <Route
            path="projects"
            element={isMobile ? <ProjectsMobile /> : <Projects />}
          />

          <Route path="liveevent" element={<LiveEvent />} />

          <Route path="assessment" element={<Assement />} />
          <Route path="assessment/details" element={<AssementDetails />} />
          <Route path="catalog" element={<Catalog />} />
          <Route
            path="editprofile"
            // element={isMobile ? <EditProfileMobile /> : <ProfilePage />}
            element={<ProfilePage />}
          />
          <Route
            path="profile"
            element={isMobile ? <ProfileMobile /> : <SecondProfilePage />}
          />
          <Route path="accountSettings" element={<AccountSettings />} />
        </Route>
      </Routes>
    </>
  );
}
