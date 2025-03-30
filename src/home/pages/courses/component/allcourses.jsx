import { useState } from "react";
import { Card } from "./courseCard";
import { IoMdSwitch } from "react-icons/io";
import { RiResetLeftFill } from "react-icons/ri";

const tags = [
  "All",
  "React",
  "Kodo",
  "JavaScript",
  "ES6",
  "CSS",
  "Design",
  "Components",
  "Node.js",
  "Backend",
  "TypeScript",
  "Typing",
];

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



export default function AllCourse({ datas, handleClick }) {
  const [selectedTag, setSelectedTag] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilters, setStatusFilters] = useState([]);
  const [sortBy, setSortBy] = useState("relevant");
  const [prerequisitesMet, setPrerequisitesMet] = useState(false);

  const toggleFilter = (filter) => {
    setStatusFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
   
    <div className="final py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-black">All Courses</h1>
      <div
        className={`flex flex-col  gap-4 mb-8 sticky top-16  bg-white h-auto`}
        
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
            {tags.map((tag) => (
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
        <div className="flex justify-between items-center mb-4 ">
          <div className="inline-flex items-center rounded-full border-gray-500 p-2 border">
            <span className="text-sm">Sort by:</span>
            <select className="border-none focus:outline-none rounded-md text-[.7rem] font-semibold bg-transparent">
              <option>Most Popular</option>
              <option>Filter</option>
              <option>Filter</option>
            </select>
          </div>
          <div className="relative flex gap-4 ">
            <input
              type="text"
              placeholder="Topic"
              className="border border-gray-500 rounded-md p-2"
            />

            <button
              className="p-3 border border-black flex gap-2 items-center rounded-md text-sm font-semibold"
              onClick={() => setShowFilters(!showFilters)}
            >
              <IoMdSwitch size={18} />
              More Filters
            </button>

            {showFilters && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md w-auto z-50">
                <div className="p-3 relative flex flex-col items-center">
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-xl absolute top-2 right-2"
                  >
                    &times;
                  </button>

                  <div className="flex gap-16">
                    <div className="mb-3">
                      <span className="text-base font-semibold ">Status</span>

                      {["Not Started", "In Progress", "Completed"].map(
                        (status) => (
                          <label
                            key={status}
                            className="flex items-center text-sm font-light gap-2 mb-1"
                          >
                            <input
                              type="checkbox"
                              checked={statusFilters.includes(status)}
                              onChange={() => toggleFilter(status)}
                            />
                            {status}
                          </label>
                        )
                      )}
                    </div>

                    <div className="mb-3">
                      <span className=" font-semibold ">Sort by</span>
                      {["relevant", "newest"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center text-sm font-light gap-2"
                        >
                          <input
                            type="radio"
                            name="sortBy"
                            value={option}
                            checked={sortBy === option}
                            onChange={() => setSortBy(option)}
                          />
                          {option === "relevant" ? "Most relevant" : "Newest"}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3 w-full flex items-center gap-2">
                    <span className="font-semibold text-base">
                      Prerequisites met
                    </span>
                    <label className="flex cursor-pointer select-none items-center">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={prerequisitesMet}
                          onChange={() =>
                            setPrerequisitesMet(!prerequisitesMet)
                          }
                          className="sr-only"
                        />
                        <div
                          className={`block h-4 w-10 rounded-full border transition-colors duration-300 ${
                            prerequisitesMet
                              ? "bg-blue-600 border-blue-600"
                              : "border-[#BFCEFF] bg-[#EAEEFB]"
                          }`}
                        ></div>
                        <div
                          className={`absolute left-[.2rem] top-[.15rem] h-3 w-3 rounded-full bg-white transition-transform duration-300 ${
                            prerequisitesMet ? "transform translate-x-6" : ""
                          }`}
                        ></div>
                      </div>
                    </label>
                  </div>

                  <button
                    className="w-fit border border-black text-black rounded-md p-2 flex items-center justify-center gap-2"
                    onClick={() => {
                      setStatusFilters([]);
                      setSortBy("relevant");
                      setPrerequisitesMet(false);
                    }}
                  >
                    <RiResetLeftFill />
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {datas
          .filter(
            (data) => selectedTag === "All" || data.tags.includes(selectedTag)
          )
          .map((data) => (
            <Card key={data.id} data={data} onClick={handleClick} />
          ))}
      </div>
    </div>
  );
}
