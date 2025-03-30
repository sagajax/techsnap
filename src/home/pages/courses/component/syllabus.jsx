import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCog, FaProjectDiagram } from "react-icons/fa";
import { FaBookOpen, FaCode, FaCubes, FaDownload, FaPlay } from "react-icons/fa6";

const FAQItem = ({ data, index, isOpen, onClick }) => {
  return (
    <div
      className="border border-gray-200 p-4 flex flex-col justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="flex w-full border-b border-gray-200 pb-4">
        <div className="flex flex-col w-full gap-3">
          <div className="text-lg flex items-center gap-2 font-bold text-gray-800 dark:text-gray-200">
            <div className="bg-gray-200 text-gray-500 rounded-full h-4 w-4 flex items-center justify-center text-sm p-3 font-semibold">
              {index}
            </div>
            {data.question}
          </div>
          <p className="text-sm text-gray-600 text-justify w-[98%]">
            {data.summary}
          </p>
        </div>
      </div>

      <div className="flex w-full justify-between items-center mt-4">
        <button className="text-blue-500 flex items-center gap-2 font-semibold dark:text-blue-300 hover:bg-gray-200">
          View Chapter Details {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        <button className="bg-purple-400 text-bold px-4 py-2 rounded-lg text-black hover:bg-gray-300">
          Start Chapter
        </button>
      </div>

      {isOpen && (
        <div className="mt-2 w-full text-gray-600 dark:text-gray-400">
          <ul className="w-full flex flex-col gap-2">
            {data.xp.map((item, index) => (
              <li key={index} className="flex items-center font-bold justify-between gap-2">
                <span className="flex gap-1 items-center">
                  <item.icon className="h-4 w-4" />
                  {item.lesson}
                </span>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-300">
                  {item.xp} XP
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Syllabus = () => {
  const [openStates, setOpenStates] = useState({});
  const [expandedAll, setExpandedAll] = useState(false);

  const toggleItem = (index) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleExpandAll = () => {
    const newStates = {};
    faqs.forEach((_, index) => {
      newStates[index] = !expandedAll;
    });
    setOpenStates(newStates);
    setExpandedAll(!expandedAll);
  };

  const faqs = [
    {
      question: "What is Python?",
      summary:
        "It's time to power-up your business intelligence skills! Through hands-on exercises, you'll learn how to change and format a wide range of visualizations, before moving on to sorting data and creating hierarchies—making it possible for you to drill into your reports.",
      xp: [
        { lesson: "Introduction to Python", xp: 50, icon: FaBookOpen },
        { lesson: "Data Types and Variables", xp: 40, icon: FaCode },
        { lesson: "Control Flow", xp: 60, icon: FaProjectDiagram },
        { lesson: "Functions and Modules", xp: 70, icon: FaCubes },
      ],
    },
    {
      question: "How do I install Python?",
      summary: "You can install Python from the official website.",
      xp: [
        { lesson: "Installing Python", xp: 30, icon: FaDownload },
        { lesson: "Setting up Environment", xp: 40, icon: FaCog },
        { lesson: "Running First Program", xp: 50, icon: FaPlay },
      ],
    },
  ];

  return (
    <div className="mt-6 dark:border-white  dark:bg-gray-800">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-black dark:text-white">Syllabus</h2>
        <button onClick={handleExpandAll} className="text-blue-500 dark:text-blue-300 hover:underline">
          {expandedAll ? "Collapse all sections" : "Expand all sections"}
        </button>
      </div>
      <div className="mb-3 text-gray-600 dark:text-gray-400">
        14 lessons • 12 projects • 12 quizzes
      </div>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            data={faq}
            index={index + 1}
            isOpen={openStates[index] || expandedAll}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
