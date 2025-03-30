import React, { useState } from "react";
import SidePopup from "./sidePopup";

const courseSections = [
  {
    title: "Coding Fundamentals",
    progress: 25,
    lessons: [
      { title: "Introduction to Programming", xp: 50 },
      { title: "Variables and Data Types", xp: 100 },
      { title: "Control Structures", xp: 100 },
    ],
  },
  {
    title: "Advanced Topics",
    progress: 0,
    lessons: [
      { title: "Functions and Methods", xp: 150 },
      { title: "Object-Oriented Programming", xp: 200 },
    ],
  },
];

const CourseContent = ({ onClose }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <SidePopup isOpen={true} closeSettingBar={onClose}>
          <div >
            <h1 className="text-2xl font-bold mb-6">Course Content</h1>
            {courseSections.map((section, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  <span className="font-bold">
                    {index + 1}. {section.title}
                  </span>
                  <span>{section.progress}%</span>
                </div>
                {openSection === index && (
                  <div id={`section${index}`} className="mt-2 space-y-2">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="font-semibold">{lesson.title}</span>
                        <span className="font-semibold">{lesson.xp} XP</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </SidePopup>
  );
};

export default CourseContent;
