import React from "react";
import { FaArrowRight, FaClock, FaDownload, FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import GridPattern from "../../../components/ui/grid-pattern";
import { FollowerPointerCard } from "../../../components/ui/following-pointer";
import FadeWrapper from "../../../components/ui/fadeWrapper";
import { Avatar } from "@mui/material";
import MiniView from "./components/miniView";
import { BsStar, BsStars } from "react-icons/bs";
import BackgroundDots from "../../../components/ui/Background";

const TitleComponent = ({ title, color, borderColor }) => (
  <div className="-mt-3 ml-1 flex items-center space-x-2">
    <p
      className={`rounded-bl-full rounded-br-full rounded-tr-full border text-[16px] text-white sm:text-[12px] ${color} ${borderColor} px-2 py-1 font-[500]`}
    >
      {title}
    </p>
  </div>
);

const Pointer = ({
  title,
  cursorColor,
  strokeColor,
  color,
  borderColor,
  className,
}) => (
  <>
    <div className={`${className}`}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className={`h-6 w-6 sm:h-4 sm:w-4 ${cursorColor} stroke -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform ${strokeColor} stroke-[1px]`}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <TitleComponent title={title} color={color} borderColor={borderColor} />
    </div>
  </>
);

function Projects() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects/details");
  };
  const CareerCard = () => {
    return (
      <div className="flex flex-col p-4 bg-white shadow-md border">
        <div className="text-[#8677ae] text-sm">ASSESMENT</div>
        <div className="font-bold text-black">Azure Fundamentals</div>

        <div className="border border-gray-200 mt-10"></div>
        <div className="flex justify-between mt-2" onClick={handleClick}>
          <div className="text-gray-800">Theory</div>
          <div className="flex gap-3">
            <div className="text-blue-500 font-semibold">Topics</div>
            <div className="border border-gray-800 rounded-md px-2 text-black ">
              Start
            </div>
          </div>
        </div>
      </div>
    );
  };
  const MainCard = () => {
    return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          Multiplayer Game - Connect4
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          If you ever wondered how multiplayer games are made or wanted to make
          a game for your weekend, this is the project for you. In this Python
          project, you will be creating a multiplayer Connect4 game for you and
          your friends using the fundamentals of PyGame, Sockets, and game
          development.
        </p>
        <div className="mb-4">
          <span className="font-semibold dark:text-white">Author:</span>
          <span className="text-gray-600 dark:text-gray-300">Apoorv Goyal</span>
          <FaUserFriends className="inline-block ml-1 dark:text-white" />
        </div>
        <div className="mb-4">
          <span className="font-semibold dark:text-white">
            Collaborator(s):
          </span>{" "}
          <span className="text-gray-600 dark:text-gray-300">
            {" "}
            Kevin Paulose, Kiran{" "}
          </span>
          <FaUserFriends className="inline-block ml-1 dark:text-white" />
        </div>
        <div className="mb-4">
          <span className="font-semibold dark:text-white">
            Prerequisite(s):
          </span>{" "}
          <span className="text-gray-600 dark:text-gray-300">Python</span>
        </div>
        <div className="flex flex-row items-center mb-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
          <div className="mr-2 flex flex-row gap-2 text-gray-700 dark:text-gray-300">
            <FaClock className="mt-1" />
            <div>25 hours</div>
          </div>
          <span className="text-gray-500 dark:text-gray-400">
            | Difficulty: Intermediate
          </span>
        </div>
        <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
          Skills to be Learned
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "Pygame",
            "Game Development",
            "Networking Fundamentals",
            "Socket Communication",
            "Game Engine",
          ].map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 rounded border border-green-600 text-green-600 hover:bg-green-400/10 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400/20 transition duration-300"
            onClick={handleClick}
          >
            View Project
          </button>
          <button className="px-4 py-2 rounded flex items-center bg-green-600 text-white hover:bg-green-500 transition duration-300">
            <FaDownload className="mr-2" /> Download Project
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="final md:pt-4">
        {/* <div
          className="relative flex size-full overflow-hidden rounded-lg border bg-gradient-to-l from-pink-50 to-blue-50
    dark:bg-gradient-to-l dark:from-gray-500 dark:via-gray-700 dark:to-gray-900
      dark:bg-blackTheme p-8 md:shadow-xl"
        >
          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
            )}
          />
          <div className="w-2/3 mx-0 md:p-0 p-6 text-black dark:text-white">
            <div className="md:text-5xl text-2xl font-bold mt-4 ">
              Learn Programming by Building projects
            </div>
            <div className="mt-4 text-sm">
              Explore reputable programs, distinguished careers, and resources
              you may need along the way. we give you the information, tools,
              and support you need to quickly get into a tech career. Find the
              right carrer for you and make a change.
            </div>

            <div className="md:pt-8 pt-2 ">Start Building Projects</div>
          </div>
        </div> */}

        <FollowerPointerCard
          cursorColor="text-[#12B76A]"
          className="group relative overflow-hidden flex items-center border p-8 pb-0 pr-0 rounded-xl bg-gradient-to-r from-black via-80% via-[#29224e] to-80% to-[#86177e]  md:flex-row gap-4 shadow-2xl"
          title={
            <TitleComponent
              title="You"
              color="bg-[#12B76A]"
              borderColor="border-[#039855]"
            />
          }
        ><BackgroundDots
        dotSize={1.8}
        dotColor="#e0cfd7"
        backgroundColor=""
        gap={15}
        className="custom-class"
        fade={true}
      />
       
       <img src="https://clickup.com/assets/glows/glow-vector.png" className="absolute top-0 -right-32 w-full z-[0] h-full" alt="glow" />
       <img src="https://clickup.com/assets/glows/glow-vector.png" className="absolute top-0 right-0  z-0 h-full" alt="glow" />
          <div className="w-[40%] flex flex-col gap-2 z-[2] py-4">
            <div className="text-sm bg-purple-500 inline-flex transition-all duration-150 w-fit hover:gap-4 gap-2 px-2 py-1 items-center text-white rounded-full"><span className="flex gap-1"><BsStars className="text-yellow-300"/>$7.5M Sudents excelled through our project</span><FaArrowRight/></div>

            <p className="text-4xl flex flex-col gap-2 items-start font-bold  text-white ">
              Impactful Projects. Made effortlessly
              <span className="text-sm  font-normal">
                TechSnap is a modern format of presentations. Deliver
                impressive, interactive stories without the design guesswork!
              </span>
            </p>
          </div>
          <div className="w-[60%] flex flex-col  items-center justify-center p-4 pb-0 pr-0  rounded-tl-2xl bg-white backdrop-blur-xl bg-opacity-15">
            <MiniView />
          </div>

          <Pointer
            className="absolute left-[20%] top-[6%] translate-x-0 transition-all duration-500 group-hover:translate-x-[20%] md-2xl:left-[10%] x-sm:top-[0%]"
            title="Saketh"
            cursorColor="text-[#FFD700]"
            strokeColor="stroke-[#121212]"
            color="bg-[#FFD700]"
            borderColor="border-[#121212]"
          />
          <Pointer
            className="absolute bottom-[20%] left-[13%] translate-x-0 transition-all duration-[400ms] group-hover:-translate-y-[40%] md-2xl:bottom-[25%] x-sm:bottom-[20%]"
            title="Sanjana"
            cursorColor="text-[#2E90FA]"
            strokeColor="stroke-[#1570EF]"
            color="bg-[#2E90FA]"
            borderColor="border-[#1570EF]"
          />
          <Pointer
            className="absolute left-[54%] top-[10%] translate-x-0 transition-all duration-500 group-hover:translate-y-[10%] group-hover:translate-x-[5%] sm:right-[10%] md-2xl:right-[10%] md-2xl:top-[1%] x-sm:right-[0%]"
            title="Prince"
            cursorColor="text-[#FF479F]"
            strokeColor="stroke-[#B11C64]"
            color="bg-[#FF479F]"
            borderColor="border-[#B11C64]"
          />
        </FollowerPointerCard>
      </div>
      <div className="final px-4">
        <div className="text-3xl font-bold mt-6 mb-4 text-black dark:text-white">
          Featured Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto mt-4">
          <MainCard />
          <MainCard />
        </div>
        <div className="sticky  top-0 bg-white ">
        <div className="text-3xl font-bold mt-6 mb-4 text-black dark:text-white">
          All Projects
        </div>
        <div class=" z-10 flex flex-wrap gap-2 mb-2 max-w-[1150px] mx-auto px-4 py-2  overflow-hidden md:overflow-auto md:h-auto">
          <div
            class="tagCourse p-3 bg-black text-white rounded-md flex-shrink-0"
            data-tag="all"
          >
            All
          </div>
          <div
            class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
            data-tag="python"
          >
            Python
          </div>
          <div
            class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
            data-tag="web-development"
          >
            Web Development
          </div>
          <div
            class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
            data-tag="frontend"
          >
            Frontend
          </div>

          <div
            class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
            data-tag="python"
          >
            Python
          </div>
          <div
            class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
            data-tag="web-development"
          >
            Web Development
          </div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  m-auto mt-4">
          <MainCard />
          <MainCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
