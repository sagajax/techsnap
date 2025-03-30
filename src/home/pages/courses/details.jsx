import React, { useState } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaDumbbell,
  FaPlayCircle,
  FaShareAlt,
  FaStar,
  FaVideo,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import GridPattern from "../../../components/ui/grid-pattern";
import FAQ from "./component/syllabus";
import { TfiDirectionAlt } from "react-icons/tfi";
import { LuGraduationCap } from "react-icons/lu";
import { GoDotFill, GoPeople } from "react-icons/go";
import { SideCards } from "./component/sideCards";
import {
  FaChevronDown,
  FaChevronUp,
  FaCross,
  FaRegBookmark,
} from "react-icons/fa6";
import { IoClose, IoTimeOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import AnimatedGridPattern from "../../../components/ui/animated-grid-pattern";
import Syllabus from "./component/syllabus";

const tracks = [
  "Associate Data Scientist",
  "Data Analyst",
  "Data Manipulation",
];
const prerequisities = ["Intermediate Python"];
const collaborators = [
  {
    name: "Amy Peterson",
    designation: "Data Science Instructor",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Adel Nehme",
    designation: "Senior Data Scientist",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Alex Yarosh",
    designation: "Machine Learning Engineer",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const adItems = [
  "I'm new to Python, what should I learn?",
  "What job can I get with Python?",
  "What can I build with Python?",
];

const footerItems = [
  { icon: IoTimeOutline, text: "4 Hours" },
  { icon: CiPlay1, text: "14 Videos" },
  { icon: FaDumbbell, text: "39 Exercises" },
  { icon: GoPeople, text: "49,078 participants" },
];

function CourseDetails() {
  const [lineClamp, setLineClamp] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="final md:pt-4">
      <div className=" flex flex-col gap-2 relative size-full overflow-hidden rounded-lg border bg-[#101523] text-white p-8 md:shadow-xl">
        <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1100px_circle_at_right,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
        <div className="text-gray-500">Course</div>
        <div className="md:text-3xl text-2xl font-bold mt-4 dark:text-white">
          Introduction to Pandas and Numpy for Data Analysis
          <div className="mt-4 text-sm md:text-base w-[80%] dark:text-gray-300">
            Introduction to Pandas and Numpy for Data Analysis Introduction to
            Pandas and Numpy for Data Analysis Pandas and Numpy for Data
            Analysis Introduction to Pandas and Numpy for Data Analysis
            Introduction to Pandas and Numpy for Data Analysis
          </div>
        </div>
        <div className=" text-white flex gap-3  mt-4">
          <div className="flex gap-2 rounded-sm items-center">
            <GoDotFill className="text-green-400" />
            <span>Beginner</span>
          </div>
          {footerItems.map((item, index) => (
            <div
              key={index}
              className="flex bg-[#213147] gap-2 rounded-sm p-1 items-center "
            >
              <item.icon size={18} />
              <span className="">{item.text}</span>
            </div>
          ))}

          <div className="bg-yellow-400 rounded-sm text-black p-1 text-sm text-center flex items-center">
            3000 XP
          </div>
        </div>
        <div className="flex gap-2 justify-start mt-4 ">
          <button
            onClick={() => {
              navigate("/learningmodule");
            }}
            className="text-md py-2 px-4 bg-purple-500 text-white rounded-lg transition-all hover:bg-white hover:text-black "
          >
            Get Started
          </button>
          <button className="text-md  flex gap-2 items-center py-2 px-4 text-white border border-gray-100  rounded-lg transition-all">
            <FaRegBookmark size={20} className="text-yellow-500" />
            Bookmark
          </button>
          <button className="text-md  flex gap-2 items-center py-2 px-4 text-white border border-gray-100   rounded-lg transition-all">
            <FaShareAlt />
            Share
          </button>
        </div>
      </div>
      <div className="justify-between flex md:flex-row flex-col">
        <div className="md:w-[72%] ">
          <div
            className={`w-full flex-col bg-purple-400 relative text-xl font-semibold border p-4 mt-4 rounded-xl ${
              isOpen ? "flex " : "hidden"
            } `}
          >
            Need guidance? Ask our AI Learning Assistant
            <button onClick={() => setIsOpen(false)}>
              <IoClose className="text-white absolute top-3 right-3" />
            </button>
            <div className="flex gap-2 mt-4">
              {adItems.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2  items-center bg-transparent border shadow-sm text-white p-2 text-sm font-medium rounded-lg"
                >
                  <BsStars size={20} className="text-white" />
                  <span className="text-[.7rem]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`text-2xl font-bold mt-8 flex flex-col ${
              lineClamp ? "mb-0" : "mb-16"
            } dark:text-white relative`}
          >
            Course Overview
            <div
              className={`mt-6 text-justify font-normal text-base dark:text-gray-300  `}
            >
              Introduction to Pandas and Numpy for Data Analysis Introduction to
              Pandas and Numpy for Data Analysis Introduction to Pandas and
              Numpy for Data Analysis Introduction to Pandas and Numpy for Data
              Analysis Pandas and Numpy for Data Analysis Introduction to Pandas
              and Numpy for Data Analysis Introduction to Pandas and Numpy for
              Data Analysis
            </div>
            <div
              className={`absolute flex w-full ${
                lineClamp ? "bottom-0" : "-bottom-12"
              } bg-white `}
            >
              <button
                className="text-sm mx-auto font-normal flex text-blue-600 gap-2 transition-all items-center py-2 px-4 mt-4 "
                onClick={() => setLineClamp(!lineClamp)}
              >
                {lineClamp ? "Read More" : "Read Less"}
                {lineClamp ? (
                  <FaChevronDown size={20} />
                ) : (
                  <FaChevronUp size={20} />
                )}
              </button>
            </div>
          </div>

          <Syllabus />
          <div>
            <div className="text-3xl font-bold mt-6 mb-4 dark:text-white">
              Projects
            </div>
            <div className="flex md:justify-between flex-col md:flex-row gap-2">
              <div className="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm ">
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
                  Beginner
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  porro culpa harum quae provident reprehenderit? Cumque,
                </p>
                <div className="border-b border-gray-300 dark:border-gray-600 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500 dark:text-gray-400" />
                    <span>1h</span>
                  </div>
                  <button className="flex items-center border border-gray-800 dark:border-gray-500 px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                    <span>Start</span>
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm mx-auto">
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
                  Beginner
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  porro culpa harum quae provident reprehenderit? Cumque,
                </p>
                <div className="border-b border-gray-300 dark:border-gray-600 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500 dark:text-gray-400" />
                    <span>1h</span>
                  </div>
                  <button className="flex items-center border border-gray-800 dark:border-gray-500 px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                    <span>Start</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold mt-6 mb-4 dark:text-white">
              Skill Assessments
            </div>
            <div className="flex md:justify-between flex-col md:flex-row gap-2">
              <div className="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm ">
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>
                <div className="border-b border-gray-300 dark:border-gray-600 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500 dark:text-gray-400" />
                    <span>1h</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 font-bold hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                      <span>Topics</span>
                    </button>
                    <button className="flex items-center border border-gray-800 dark:border-gray-500 px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                      <span>Start</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm mx-auto">
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>
                <div className="border-b border-gray-300 dark:border-gray-600 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500 dark:text-gray-400" />
                    <span>1h</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 font-bold hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                      <span>Topics</span>
                    </button>
                    <button className="flex items-center border border-gray-800 dark:border-gray-500 px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                      <span>Start</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="bg-gray-800 text-white p-8 mt-4 mb-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Earn a certificate of completion
            </h2>
            <p className="mb-6">
              Show your network you've done the work by earning a certificate of
              completion for each course or path you finish.
            </p>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-12 0v1z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Show proof</h4>
                <p>
                  Receive a certificate that demonstrates you've completed a
                  course or path.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v8m0 0H8m4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Download or print</h4>
                <p>
                  Download your certificate as a printable PDF to share in your
                  professional network or print for your records.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[25%] mr-0 w-11/12 ">
          <SideCards
            tracks={tracks}
            prerequisities={prerequisities}
            collaborators={collaborators}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
