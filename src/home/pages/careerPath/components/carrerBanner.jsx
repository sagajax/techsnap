import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LuCodeXml, LuClipboardList } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import { MdArrowOutward, MdChecklistRtl } from "react-icons/md";
import { motion, LayoutGroup } from "framer-motion";

const gridItems = [
    {
      color: "bg-[#9bc9ff]",
      isFirst: true,
      isLast: false,
      title: "Coding Practice",
      description: "Level up your coding skills by practicing hiring questions.",
      footer: "400+ Questions",
      icon: "LuCodeXml",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/images/65684639b6339_frame_1000013082.png?d=706x536",
    },
    {
      color: "bg-[#ffb1cc]",
      isFirst: false,
      isLast: false,
      title: "Interview Preparation",
      description: "Crack Top companies in just 5 days.",
      footer: "20+ Companies",
      icon: "CiViewList",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/images/65703989a601b_frame_1000013082.png?d=706x536",
    },
    {
      color: "bg-[#c8bbff]",
      isFirst: false,
      isLast: false,
      title: "Projects",
      description: "Projects epitomize perfect synergy for success.",
      footer: "15+ Projects",
      icon: "LuClipboardList",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/images/657039d9cecf0_frame_1000013082_1.png?d=706x536",
    },
    {
      color: "bg-[#ffdd80]",
      isFirst: false,
      isLast: true,
      title: "Skill Assessment",
      description: "Assess your skills and get ahead of the curve.",
      footer: "2000+ Questions",
      icon: "MdChecklistRtl",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/images/65703a1e05bd4_frame_1000013082_2.png?d=706x536",
    },
  ];
  
const iconMapping = {
  LuCodeXml,
  LuClipboardList,
  CiViewList,
  MdChecklistRtl,
};

const Icon = ({ name, size = 24, className = "" }) => {
  const IconComponent = iconMapping[name];
  return IconComponent ? (
    <IconComponent size={size} className={className} />
  ) : null;
};

const CompactCard = ({ data }) => (
  <div className={`w-full h-full flex flex-col p-6 bg-[#fff] border`}>
    <div
      className={`w-16 h-16 rounded-full ${data.color} flex items-center justify-center`}
    >
      <Icon name={data.icon} size={32} className="text-black" />
    </div>
    <h3 className="text-xl font-semibold mt-4 text-black">{data.title}</h3>
    <p className="text-slate-500 text-sm mt-2">{data.description}</p>
    <div className="flex gap-2 mt-auto justify-between items-center">
      <p className="text-slate-700 text-sm">{data.footer}</p>
      <IoIosArrowForward />
    </div>
  </div>
);

const ExpandedCard = ({ data }) => (
  <div
    className={`w-full relative h-full flex flex-col overflow-hidden p-8 ${data.color}`}
  >
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      className="content-container"
    >
      <div
        className={`w-16 h-16 rounded-full bg-[#fff] flex items-center justify-center`}
      >
        <Icon name={data.icon} size={32} className="text-black" />
      </div>
      <h3 className="text-2xl font-bold mt-4 text-black">{data.title}</h3>
      <p className="text-slate-700 text-lg mt-2 w-1/3 md:line-clamp-3 lg:line-clamp-none">{data.description}</p>
      <p className="text-slate-900 mt-6 font-semibold text-lg">{data.footer}</p>
    </motion.div>
    <motion.div 
    initial={{ x: -10 }}
    animate={{ x: 0 }}
    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
    className="mt-auto">
      <button className="text-white px-4 py-2 flex gap-1 items-center rounded-full bg-blue-600 text-sm">
        Start Now <MdArrowOutward />
      </button>
    </motion.div>

    <motion.img
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 40 }}
      src={data.img}
      alt="img"
      className="absolute bottom-0 right-0 w-[60%] h-auto"
    />
  </div>
);

const InteractiveGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const getColSpan = (index) => {
    if (hoveredIndex === null) {
      return index === 0 ? 3 : 1;
    } else if (hoveredIndex === index) {
      return 3;
    } else {
      return 1;
    }
  };

  return (
    <LayoutGroup>
      <div className="hidden md:grid grid-cols-6 h-[432px] rounded-lg shadow-2xl">
        {gridItems.map((item, index) => {
          const colSpan = getColSpan(index);
          const isExpanded = colSpan === 3;

          return (
            <motion.div
              key={index}
              layout
              initial={false}
              transition={{
                layout: { duration: 1, type: "spring", bounce: 0.25 },
              }}
              className={`
                w-auto h-[432px]
                ${item.isFirst ? "rounded-l-lg" : ""}
                ${item.isLast ? "rounded-r-lg" : ""}
                overflow-hidden
              `}
              style={{
                gridColumn: `span ${colSpan} / span ${colSpan}`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {isExpanded ? (
                <ExpandedCard data={item} />
              ) : (
                <CompactCard data={item} />
              )}
            </motion.div>
          );
        })}
      </div>
    </LayoutGroup>
  );
};

export default InteractiveGrid;
