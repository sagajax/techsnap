import TrendingCourse from "./trendingCourse";
import TrendingProject from "./trendingProject";
import TrendingCareer from "./trendingCareer";
import TrendingSkillPath from "./trendingSkillpath";
import TrendingSessiions from "./trendingSessions";
import TrendingEvents from "./trendingEvents";
import TrendingAssignment from "./trendingAss";

function Progress() {
  return (
    <div className="final">
      {/* Trending Course with Swiper */}
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4">Trending Courses</h1>
      </div>
      <TrendingCourse />
      {/* Trending Career with Swiper */}
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4">Trending Projects</h1>
      </div>
      <TrendingProject />
      {/* Trending Career with Swiper */}
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4">Trending Career Paths</h1>
      </div>
      <TrendingCareer />
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4">Trending Skill Paths</h1>
      </div>
      <TrendingSkillPath />
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4">Trending Sessions</h1>
      </div>
      <TrendingSessiions />
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4">Trending Events</h1>
      </div>
      <TrendingEvents />
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4">Trending Assignments</h1>
      </div>
      <TrendingAssignment />
    </div>
  );
}

export default Progress;
