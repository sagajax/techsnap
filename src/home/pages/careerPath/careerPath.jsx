import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCareer from "./components/cardCareer";
import { FaRightLong, FaRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import careerpaths from "./data/career.json";
import Banner from "./components/careerDetailBanner";
import InteractiveGrid from "./components/carrerBanner";


const tags = [
  "All",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "HTML",
  "CSS",
  "Python",
  "Java",
  "APIs",
  "R",
  "Machine Learning",
  "Docker",
  "Kubernetes",
  "AWS",
  "Jenkins",
  "Network Security",
  "Ethical Hacking",
  "Security Tools",
  "TensorFlow",
  "PyTorch",
  "Mathematics",
  "Azure",
  "GCP",
  "Cloud Security",
  "Figma",
  "Adobe XD",
  "UI Design",
  "User Research",
  "Solidity",
  "Web3.js",
  "Smart Contracts",
  "Ethereum",
];

const featured = [
  "Backend Developer",
  "Full-Stack Engineer",
  "Frontend Developer",
];

const FilterTag = ({ tag, isActive, onClick }) => (
  <button
    onClick={() => onClick(tag)}
    className={`px-4 py-2 rounded-md flex-shrink-0 transition-colors
          ${
            isActive
              ? "bg-slate-500 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
  >
    {tag}
  </button>
);

function CareerPath() {
  const featuredPaths = careerpaths.filter((path) =>
    featured.includes(path.title)
  );
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/career/:id");
  };
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (tag) => {
    setActiveFilter(activeFilter === tag ? "All" : tag);
  };
  const filteredPaths =
    activeFilter === "All"
      ? careerpaths
      : careerpaths.filter(
          (path) =>
            path.requirements && path.requirements.includes(activeFilter)
        );

  return (
    <div className="final md:pt-4 mx-auto max-w-[1500px]">
      <InteractiveGrid />
      <div className="final w-11/12 m-auto block">
        <div className="text-3xl font-bold mt-6 mb-4 text-black dark:text-white">
          Featured careerpaths
        </div>
        <div className="flex justify-center 1300:justify-start flex-wrap mt-10">
          {featuredPaths.map((path) => (
            <CardCareer key={path.id} path={path} />
          ))}
        </div>
        <div>
          <div className="sticky top-0 py-6 z-10  bg-white   ">
            <div className="text-3xl font-bold  mb-4 text-black dark:text-white">
              All careerpaths
            </div>
            <div className="flex items-center gap-2  md:overflow-auto overflow-x-scroll ">
             
                <button
                  onClick={() => {
                    const container = document.querySelector(".scrollbarhide");
                    container.scrollBy({ left: -200, behavior: "smooth" });
                  }}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 19l-7-7 7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              

              <div className="flex flex-nowrap items-center gap-2  h-14 overflow-hidden md:overflow-auto md:h-auto overflow-x-scroll scrollbarhide">
                {tags.map((tag) => (
                  <FilterTag
                    key={tag}
                    tag={tag}
                    isActive={activeFilter === tag}
                    onClick={handleFilterClick}
                  />
                ))}
              </div>

              
                <button
                  onClick={() => {
                    const container = document.querySelector(".scrollbarhide");
                    container.scrollBy({ left: 200, behavior: "smooth" });
                  }}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              
            </div>
          </div>

          
          <div className="flex w-auto mt-10 flex-wrap">
            {filteredPaths.map((path) => (
              <CardCareer key={path.id} path={path} />
            ))}
            {filteredPaths.length === 0 && (
              <div className="w-full text-center text-gray-500 py-10">
                No career paths found for this filter.
              </div>
            )}
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default CareerPath;
