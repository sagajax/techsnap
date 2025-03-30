import { FaUserCircle } from "react-icons/fa";

// import { AnimatedCircularProgressBarDemo } from "./temp";
import AnimatedCircularProgressBar from "../../../../components/ui/animated-circular-progress-bar";

function Graph() {
  const LeaderboardCard = () => {
    return (
      <div className="w-1/3 bg-white dark:bg-gray-800 dark:text-white p-3 rounded-lg shadow-lg  self-stretch flex justify-center items-center">
        <div className=" w-full h-full flex flex-col justify-center items-center">
          <div className="w-full space-y-1 ">
            {[
              {
                rank: "#1",
                name: "Abhishek Sharma",
                score: "181039",
                color: "text-green-700",
              },
              {
                rank: "#2",
                name: "Shaikh Tabrez",
                score: "141360",
                color: "text-indigo-800",
              },
              {
                rank: "#3",
                name: "Pradeep Suryavanshi",
                score: "140403",
                color: "text-green-600",
              },
              {
                rank: "#516433",
                name: "Saipavan Saketh",
                score: "200",
                color: "text-yellow-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className=" w-full flex items-center justify-between border-b border-gray-200 "
              >
                <div className=" w-full flex items-center">
                  <span className="mr-2 text-sm font-bold">{item.rank}</span>
                  <FaUserCircle className={`${item.color}`} size={28} />
                  <span className="ml-3 text-xs font-medium">{item.name}</span>
                </div>
                <span className="text-xs font-semibold">{item.score}</span>
              </div>
            ))}
          </div>
          <div className="text-blue-500 text-center text-sm mt-2 cursor-pointer hover:underline hover:text-blue-600">
            View Leaderboard
          </div>
        </div>
      </div>
    );
  };
  const ProgressCard = () => {
    return (
      <div className="  bg-white dark:bg-gray-800 dark:text-white px-3 py-3 rounded-xl shadow-lg flex justify-center items-center self-stretch w-1/3 ">
        <div className=" flex flex-col justify-start items-start self-stretch w-full min-w-[220px]">
          {/* Title */}
          <h2 className=" w-full text-md font-semibold mb-2 text-gray-700 dark:text-gray-200 self-stretch px-4">
            Your Progress
          </h2>

          {/* Progress Content */}
          <div className=" w-full flex justify-center items-center w-fulll gap-4">
            <div className="w-1/3">
              <AnimatedCircularProgressBar
                max={100}
                min={0}
                value={10}
                gaugePrimaryColor="rgb(79 70 229)"
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
              />
            </div>
            {/* <AnimatedCircularProgressBarDemo /> */}
            {/* <CircularProgressChart /> */}

            {/* Progress Details */}
            <div className="w-1/2 mt-2 text-xs space-y-4 ">
              <div className="w-full flex justify-between text-orange-400 font-semibold ">
                <span>Solved:</span>
                <span>1 / 963</span>
              </div>
              <div className="w-full flex justify-between text-blue-400 font-semibold ">
                <span>Attempted:</span>
                <span>1</span>
              </div>
              <div className="w-full flex justify-between text-green-500 font-semibold">
                <span>Accuracy:</span>
                <span>50.00%</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full text-blue-500   text-md font-medium mt-2 px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition ease-in-out duration-200">
            Solve More Problems
          </button>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="flex gap-4 mt-[6px]">
        {/* Leaderboard */}
        <LeaderboardCard />

        <ProgressCard />
        {/* Progress */}
        <div
          className="w-1/3  flex flex-col justify-center items-center gap- bg-white rounded-lg shadow-lg p-3 self-stretch overflow-scroll scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            msOverflowStyle: "none", // Hide scrollbar for IE/Edge
          }}
        >
          {/* Profile Section */}
          <div className="min-w-[222px] w-full flex items-center justify-between">
            <div className=" flex items-center space-x-4">
              <img
                src="https://dummyimage.com/50x50"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className=" w-full  flex flex-col gap-2">
                <p className="text-md font-semibold text-ellipsis line-clamp-1">
                  Hey, sai pavan! {">"}
                </p>
                <div className="flex flex-col gap-1 w-full items-center  text-xs">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                  <span className="w-full text-gray-500 text-xs">
                    Profile 30% complete
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* XP Section */}
          <div className="min-w-[222px] w-full flex justify-between items-center mt-2">
            <div className="flex flex-col items-start">
              <p className="text-gray-500 text-sm">Daily XP</p>
              <p className="text-sm font-bold">
                0<span className="text-gray-500">/250</span>
              </p>
            </div>

            <div className="border-r h-12 mx-6"></div>

            <div className="flex flex-col items-start">
              <p className="text-gray-500 text-xs">Total XP</p>
              <p className="text-xs font-bold">250</p>
            </div>
          </div>

          {/* Daily Streak Section */}
          <div className="min-w-[222px] w-full mt-4">
            <p className="text-gray-500 text-xs">Daily Streak</p>
            <div className="flex justify-start items-start gap-2 mt-2">
              <p className="text-xs font-bold mr-0 text-nowrap">0 days</p>
              <div className="flex space-x-[2px] text-[8px]">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <div
                    key={index}
                    className={`w-5 h-5 flex items-center justify-center border border-gray-300 rounded-full ${
                      index === 0 ? "text-gray-500" : "text-gray-300"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
