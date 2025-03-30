import React, { useState } from "react";
import { FaBook, FaBookReader, FaClipboardCheck, FaProjectDiagram } from "react-icons/fa";
import { FaHeart, FaRightLong, FaRightToBracket, FaUsers } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import GridPattern from "../../../components/ui/grid-pattern";
import profile from "../../assets/profile.png";
import CareerCard from "./component/skillCard";
import { Banner } from "./component/banner";


const careerData = [
  {
    id: 1,
    img: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/lekfxfhf0amxtgk1bwzr",
    rating: 4.9,
    title: "Frontend Developer", 
    enrolled: "9.2k",
    lessons: 90,
    subtitle: "Frontend Developer",
    tags: ["web-development", "frontend", "javascript", "react"]
  },
  {
    id: 2,
    img: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/lekfxfhf0amxtgk1bwzr",
    rating: 4.8,
    title: "Backend Developer",
    enrolled: "8.5k",
    lessons: 85,
    subtitle: "Backend Developer", 
    tags: ["web-development", "backend", "nodejs", "databases"]
  },
  {
    id: 3,
    img: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/lekfxfhf0amxtgk1bwzr",
    rating: 4.7,
    title: "Python Developer",
    enrolled: "12k",
    lessons: 95,
    subtitle: "Python Developer",
    tags: ["python", "programming", "algorithms", "data-structures"]
  },
  {
    id: 4,
    img: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/lekfxfhf0amxtgk1bwzr",
    rating: 4.9,
    title: "Full Stack Developer",
    enrolled: "15k",
    lessons: 120,
    subtitle: "Full Stack Developer",
    tags: ["web-development", "frontend", "backend", "devops"]
  },
  {
    id: 5,
    img: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/lekfxfhf0amxtgk1bwzr",
    rating: 4.6,
    title: "Data Science",
    enrolled: "7.8k",
    lessons: 88,
    subtitle: "Data Scientist",
    tags: ["python", "data-science", "machine-learning", "statistics"]
  }
  ];

  const allTags = ["All", ...new Set(careerData.flatMap(item => item.tags))];

  const Tag = ({ tag, isActive, onClick }) => (
    <div
      className={` p-3 rounded-md flex-shrink-0 ${
        isActive ? "bg-black text-white" : "bg-gray-200 text-black"
      }`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </div>
  );
function CareerPath() {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState("All");

  const handleClick = () => {
    navigate("/dashboard/skill/details");
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };
  

 

  

  return (
    <div className="final md:pt-4">
      <Banner />
      <div className="final w-11/12 m-auto  hidden md:block">
        <div className="text-3xl font-bold mt-6 mb-4 text-black dark:text-white">
          Featured careerpaths
        </div>
        <div className="flex w-full gap-4 ">
          {careerData.slice(0,3).map((data) => (
            <CareerCard key={data.id} data={data} />
          ))}
        </div>
        <div className="text-3xl font-bold mt-6 mb-4 text-black dark:text-white">
          All SkillPath
        </div>

        {/* Tags */}
        <div
                className={`flex flex-col  gap-4 mb-8 sticky top-0  bg-white h-auto
                }`}
              >
                <div className="flex gap-2 items-center ">
                  <button
                    onClick={() => {
                      const container = document.querySelector(".tag-container");
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
                  <div className="flex w-auto tag-container gap-4 flex-nowrap overflow-x-scroll scrollbarhide">
                    {allTags.map((tag) => (
                      <Tag
                        key={tag}
                        tag={tag}
                        isActive={selectedTag === tag}
                        onClick={handleTagClick}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      const container = document.querySelector(".tag-container");
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
        {/* <div className="text-3xl font-bold mt-6 mb-4">All careerpaths</div> */}
        <div className="grid grid-cols-3 gap-4">
                {careerData
                  .filter(
                    (data) => selectedTag === "All" || data.tags.includes(selectedTag)
                  )
                  .map((data) => (
                    <CareerCard key={data.id} data={data}  />
                  ))}
              </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden block">
        <div class="sticky  top-0 z-10 flex flex-wrap gap-2 mb-2 max-w-[1150px] mx-auto px-4 py-2 bg-white  overflow-hidden md:overflow-auto md:h-auto">
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
        <div className="flex flex-col mb-2 ml-2">
          <div className="flex flex-row gap-4 items-center w-full mb-2">
            <span className="text-sm font-semibold p-1">Sort by:</span>
            <div className="flex  gap-2  flex-row w-auto">
              <div className="flex items-center rounded-3xl border-gray-500 p-1 border text-xs">
                <span className="mr-2">Option 1:</span>
                <select className="border-none focus:outline-none rounded-md font-bold">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center w-full ">
            <span className="text-sm font-semibold p-1">Filter by:</span>
            <div className="flex  gap-1  flex-row w-auto">
              <div className="flex items-center rounded-3xl border-gray-500 p-1 border text-xs ">
                <span className="mr-1">Option 1:</span>
                <select className="border-none focus:outline-none rounded-md font-bold">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex items-center rounded-3xl border-gray-500 p-1 border text-xs">
                <span className="mr-1">Option 1:</span>
                <select className="border-none focus:outline-none rounded-md font-bold">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden grid grid-cols-2 gap-4 pb-10 w-11/12 m-auto">
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <div className="text-[#8677ae]">23 Course</div>
          <div className="font-bold">Data Analyst(R)</div>
          <div className="flex gap-2 text-xs">
            <div>icon</div>
            <div>techsnap</div>
          </div>
          <div className="border border-gray-200 mt-4"></div>
          <div className="flex justify-between mt-2" onClick={handleClick}>
            <div className="text-blue-500">View Path</div>
            <div>
              <FaRightLong className="mt-1 text-blue-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <div className="text-[#8677ae]">23 Course</div>
          <div className="font-bold">Data Analyst(R)</div>
          <div className="flex gap-2 text-xs">
            <div>icon</div>
            <div>techsnap</div>
          </div>
          <div className="border border-gray-200 mt-4"></div>
          <div className="flex justify-between mt-2" onClick={handleClick}>
            <div className="text-blue-500">View Path</div>
            <div>
              <FaRightLong className="mt-1 text-blue-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <div className="text-[#8677ae]">23 Course</div>
          <div className="font-bold">Data Analyst(R)</div>
          <div className="flex gap-2 text-xs">
            <div>icon</div>
            <div>techsnap</div>
          </div>
          <div className="border border-gray-200 mt-4"></div>
          <div className="flex justify-between mt-2 " onClick={handleClick}>
            <div className="text-blue-500">View Path</div>
            <div>
              <FaRightLong className="mt-1 text-blue-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <div className="text-[#8677ae]">23 Course</div>
          <div className="font-bold">Data Analyst(R)</div>
          <div className="flex gap-2 text-xs">
            <div>icon</div>
            <div>techsnap</div>
          </div>
          <div className="border border-gray-200 mt-4"></div>
          <div className="flex justify-between mt-2" onClick={handleClick}>
            <div className="text-blue-500">View Path</div>
            <div>
              <FaRightLong className="mt-1 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPath;
