import TrendingCourse from "./trendingCourse";
import TrendingProject from "./trendingProject";
import TrendingCareer from "./trendingCareer";
import TrendingSkillPath from "./trendingSkillpath";
import TrendingSessiions from "./trendingSessions";
import TrendingEvents from "./trendingEvents";
import TrendingAss from "./trendingAss";

function Progress() {
  return (
    <div className="final pb-16 ">
      {/* Trending Career with Swiper */}
      <div className="mb-4 mt-4 flex justify-between">
        <h1 className="text-lg font-bold dark:text-white ">
          Trending Career Paths
        </h1>
      </div>
      <TrendingCareer />
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4 dark:text-white">
          Trending Skillpath
        </h1>
      </div>
      <TrendingSkillPath />
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4 dark:text-white">
          Trending Courses
        </h1>
      </div>
      <TrendingCourse />
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4 mb-4 dark:text-white">
          Trending Projects
        </h1>
      </div>
      <TrendingProject />

      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4 mb-4 dark:text-white">
          Trending Assignments
        </h1>
      </div>
      <TrendingAss />
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4 dark:text-white">
          Trending Sessions
        </h1>
      </div>
      <TrendingSessiions />
      <div className="mb-4 flex justify-between">
        <h1 className="text-lg font-bold mt-4 dark:text-white">
          Trending Events
        </h1>
      </div>
      <TrendingEvents />
    </div>
  );
}

export default Progress;
