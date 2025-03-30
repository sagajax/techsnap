import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearMailData } from "../../../features/mail/mailSlice";
import { logout } from "../../../features/user/userSlice";
import account from "./../../assets/account (1).png";
import careerchoice from "./../../assets/career-choice.png";
import clipboard from "./../../assets/clipboard.png";
import edit from "./../../assets/edit (1).png";
import leaderboard from "./../../assets/leaderboard.png";
import logoutImage from "./../../assets/logout (1).png";
import onlineCourse from "./../../assets/online-course2.png";
import productmanagement from "./../../assets/project-management (2).png";
import selfGrowth from "./../../assets/self-growth3.png";
import stage from "./../../assets/stage.png";
import { RiProgress3Line } from "react-icons/ri";
import { CiGrid41 } from "react-icons/ci";
import { TbStack2 } from "react-icons/tb";
// import { Hastag } from "/hash.svg";
import { CiSettings } from "react-icons/ci";

const Sidebar = ({ isActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearMailData());
    navigate("/");
  };

  return (
    <aside className=" font-feixen pt-1 h-[calc(100vh-3.5rem)] mb-24 bg-white dark:bg-blackTheme text-black dark:text-white min-w-[220px] flex flex-col max-[900px]:hidden lg:flex transition-all duration-75 z-40 max-w-[220px] w-[250px] overflow-y-auto">
      <div className="myMenu flex flex-col justify-center  mt-2 text-sm">
        <Link
          to="/dashboard/progress"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/progress")
              ? "bg-gray-300 dark:bg-gray-500"
              : ""
          }`}
        >
          {/* <img
            src={selfGrowth}
            alt="progress"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          /> */}
          <RiProgress3Line size={16} />
          <p className="w-[70%] ml-[10px]">Progress</p>
        </Link>
        <Link
          to="/dashboard/myfeed"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/myfeed") ? "bg-gray-300 dark:bg-gray-500" : ""
          }`}
        >
          {/* <img
            src={selfGrowth}
            alt="feed"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          /> */}
          <CiGrid41 size={16} style={{ strokeWidth: "0.8px" }} />
          <p className="w-[70%] ml-[10px]">Feed</p>
        </Link>
        <Link
          to="/dashboard/myLibrary"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/myLibrary") ? "bg-gray-300 dark:bg-gray-500" : ""
          }`}
        >
          {/* <img
            src={selfGrowth}
            alt="feed"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          /> */}
          <TbStack2 size={16} />
          <p className="w-[70%] ml-[10px]">My Library</p>
        </Link>
        <Link
          to="/dashboard/topics"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/topics") ? "bg-gray-300 dark:bg-gray-500" : ""
          }`}
        >
          {/* <img
            src={"/hash.svg"}
            alt="topics"
            className="w-4 h-4 text-black filter invert dark:invert-0"
          /> */}
          <svg
            className="h-4 w-4 fill-black dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490 490"
          >
            <g>
              <path d="M327.08,180.984H192.677L161.05,309.958h133.984L327.08,180.984z M180.58,294.646l24.12-98.35h102.791l-24.419,98.35 H180.58z" />
              <path d="M60.517,490h72.241l32.763-133.386h102.492L235.639,490h72.211l32.763-133.386h117.625v-61.968H355.702l24.434-98.35 h78.103v-61.968h-63.044L427.957,0h-72.615l-32.763,134.328H219.728L252.492,0h-72.256l-32.748,134.328H31.762v61.968h100.683 l-24.12,98.35H31.762v61.968h61.519L60.517,490z M47.074,341.301v-31.343h73.273l31.627-128.975h-104.9v-31.343H159.51 l32.748-134.328h40.734l-32.763,134.328h134.373l32.763-134.328h41.093l-32.763,134.328h67.231v31.343h-74.753l-32.061,128.975 h106.814v31.343H328.621l-32.763,133.386h-40.749l32.375-133.386H153.529l-32.763,133.386H80.047l32.763-133.386H47.074z" />
            </g>
          </svg>

          <p className="w-[70%] ml-[10px]">Topics</p>
        </Link>
        <Link
          to="/dashboard/competitions"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/competitions")
              ? "bg-gray-300 dark:bg-gray-500"
              : ""
          }`}
        >
          <img
            src={stage}
            alt="competitions"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          />
          <p className="w-[70%] ml-[10px]">Competitions</p>
        </Link>
        <Link
          to="/dashboard/leaderboard"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/leaderboard")
              ? "bg-gray-300 dark:bg-gray-500"
              : ""
          }`}
        >
          <img
            src={leaderboard}
            alt="leaderboard"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          />
          <p className="w-[70%] ml-[10px]">Leaderboard</p>
        </Link>
        <hr className="border-gray-400 dark:border-gray-600 w-[80%] mx-auto" />
      </div>
      <div className="myMenu flex flex-col text-sm justify-center mt-2">
        <div className="title w-full pl-5 ">
          <h4 className="uppercase text-md font-bold py-2">Catalog</h4>
        </div>
        <Link
          to="/dashboard/career"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/career") ? "bg-gray-300 dark:bg-gray-500" : ""
          }`}
        >
          <img
            src={careerchoice}
            alt="career"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          />
          <p className="w-[70%] ml-[10px]">Career Paths</p>
        </Link>
        <Link
          to="/dashboard/skill"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/skill") ? "bg-gray-300 dark:bg-gray-500" : ""
          }`}
        >
          <img
            src={careerchoice}
            alt="career"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          />
          <p className="w-[70%] ml-[10px]">Skill Paths</p>
        </Link>
        <Link
          to="/dashboard/courses"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/courses") ? "bg-gray-300 dark:bg-gray-500" : ""
          }`}
        >
          <img
            src={onlineCourse}
            alt="courses"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          />
          <p className="w-[70%] ml-[10px]">Courses</p>
        </Link>
        <Link
          to="/dashboard/projects"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/projects")
              ? "bg-gray-300 dark:bg-gray-500"
              : ""
          }`}
        >
          <img
            src={productmanagement}
            alt="projects"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          />
          <p className="w-[70%] ml-[10px]">Projects</p>
        </Link>
        <Link
          to="/dashboard/assessment"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/assessment")
              ? "bg-gray-300 dark:bg-gray-500"
              : ""
          }`}
        >
          <img
            src={clipboard}
            alt="assessment"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          />
          <p className="w-[70%] ml-[10px]">Assessment</p>
        </Link>
        <hr className="border-gray-400 dark:border-gray-600 w-[80%] mx-auto" />
      </div>
      <div className="myMenu flex flex-col justify-center text-sm  mt-2">
        <div className="title w-full pl-5 ">
          <h4 className="uppercase  text-md font-bold py-2">Account</h4>
        </div>
        <Link
          to="/dashboard/profile"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/profile") ? "bg-gray-300 dark:bg-gray-500" : ""
          }`}
        >
          <img
            src={account}
            alt="profile"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          />
          <p className="w-[70%] ml-[10px]">My Profile</p>
        </Link>
        <Link
          to="/dashboard/editprofile"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/editprofile")
              ? "bg-gray-300 dark:bg-gray-500"
              : ""
          }`}
        >
          <img
            src={edit}
            alt="edit profile"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          />
          <p className="w-[70%] ml-[10px]">Edit Profile</p>
        </Link>
        <Link
          to="/dashboard/accountSettings"
          className={`flex h-8 w-full justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
            isActive("/dashboard/accountSettings")
              ? "bg-gray-300 dark:bg-gray-500"
              : ""
          }`}
        >
          <CiSettings size={20} />
          <p className="w-[70%] ml-[10px]">Settings</p>
        </Link>
        <div
          onClick={handleLogout}
          className="flex h-10 w-full cursor-pointer justify-center items-center hover:bg-red-500 dark:hover:bg-red-700 transition-colors duration-300 text-black dark:text-white"
        >
          <img
            src={logoutImage}
            alt="logout"
            className="w-4 h-4 text-white filter invert dark:invert-0"
          />

          <p className="w-[70%] ml-[10px]">Logout</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
