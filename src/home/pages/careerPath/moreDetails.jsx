import React, { useState } from "react";
import "./moreDetails.css";
import banner from "./photo.jpg";
import { RelatedExpertsCard } from "./components/expertCard";
import CardCareer, { CuratedCard } from "./components/cardCareer";
import Paths from "./data/career.json";
import details from "./data/details.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import experts from "./data/experts.json";
import Roadmap from "./components/roadmap";
import { useParams } from "react-router-dom";
import Banner from "./components/detailBanner";
import Module from "./components/moduleRoadmap";
import { MagicCard } from "../../../components/ui/magic-card";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import { mnc } from "./components/careerDetailBanner";
import { FileTree } from "./components/treeRoadmap";
import { useBeamStore } from "./utils/store";

const customStyles = `
  .react-multi-carousel-list {
   position: static ;
  
   
  }
`;
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className=" absolute left-0 md:left-[-20px] top-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
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
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 md:right-[-20px] top-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
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
);

// Roadmap Component
const RoadmapCard = ({ text, marginTop, alignEnd = false }) => {
  return (
    <div
      className="more_roadmap_card"
      style={{ marginTop: marginTop, alignSelf: alignEnd ? "end" : "start" }}
    >
      <p>{text}</p>
    </div>
  );
};
const RoadmapPath = ({ type }) => {
  return (
    <div className="more_path">
      <svg
        className="svg-line scale-change"
        xmlns="http://www.w3.org/2000/svg"
        height="96"
        viewBox="0 0 128 100"
        fill="none"
        preserveAspectRatio="none"
      >
        {type === "type1" ? (
          <path
            d="M126 2.12159V2.12159C115.974 38.3765 88.8647 67.4445 53.3959 79.9706L2 98.1216"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="8 8"
            vectorEffect="non-scaling-stroke"
          ></path>
        ) : (
          <path
            d="M10 10C20 40 50 70 90 90"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 5"
            vectorEffect="non-scaling-stroke"
          ></path>
        )}
      </svg>
    </div>
  );
};

const MoreDetailsRoadmap = () => {
  return (
    <div className="more_roadmap">
      <h3 className="more_roadmap_heading">Roadmap</h3>
      <div className="more_roadmap_cont">
        <RoadmapCard text="HTML Tag" />
        <RoadmapPath type="type1" />
        <RoadmapCard text="HTML Tag" alignEnd />
        <RoadmapPath type="type2" />
        <RoadmapCard text="HTML Tag" />
        <RoadmapPath type="type1" />
        <RoadmapCard text="HTML Tag" alignEnd />
      </div>
    </div>
  );
};

// Curated Courses Component
const CuratedCourses = () => {
  return (
    <div className="more-simplified">
      <div className="more_roadmap_heading">
        <p>Techsnap Curated Courses</p>
      </div>
      <div className="relative w-auto mt-10">
        <style>{customStyles}</style>
        <Carousel
          responsive={responsive}
          infinite={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {Paths.map((path) => (
            <CardCareer key={path.id} path={path} className={"w-auto"} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const ProjectCard = ({ imgSrc, title, description, prerequisites }) => {
  return (
    <div className="more-course-card projects-card">
      <div className="more-project-heading">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="projects-content">
        <p>Practice Project</p>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h3>
          Prerequisite(s)
          <br />
          {prerequisites}
        </h3>
        <div className="projects-btn">View Project</div>
      </div>
    </div>
  );
};

const ProjectList = () => {
  const projects = [
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__",
      title: "Amazon clone using React",
      description:
        "Nowadays the first thing someone does when they create a new business for trading goods is to...",
      prerequisites: "HTML, CSS, JavaScript",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__",
      title: "Amazon clone using React",
      description:
        "Nowadays the first thing someone does when they create a new business for trading goods is to...",
      prerequisites: "HTML, CSS, JavaScript",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__",
      title: "Amazon clone using React",
      description:
        "Nowadays the first thing someone does when they create a new business for trading goods is to...",
      prerequisites: "HTML, CSS, JavaScript",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__",
      title: "Amazon clone using React",
      description:
        "Nowadays the first thing someone does when they create a new business for trading goods is to...",
      prerequisites: "HTML, CSS, JavaScript",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__",
      title: "Amazon clone using React",
      description:
        "Nowadays the first thing someone does when they create a new business for trading goods is to...",
      prerequisites: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <div className="more-course-cont overflow-x-scroll">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          prerequisites={project.prerequisites}
        />
      ))}
    </div>
  );
};

const ExternalResourceCard = ({ imgSrc, title, addedBy, backgroundColor }) => {
  return (
    <div className="more-external-card" style={{ backgroundColor }}>
      <div className="more-external-heading">
        <img src={imgSrc} alt={title} />
        <p>webilnk</p>
      </div>

      <h2>{title}</h2>

      <p className="external-text">
        added by <span>{addedBy}</span>
      </p>

      <div className="external-btn">visit weblink</div>
    </div>
  );
};

const ExternalResourceList = () => {
  const externalResources = [
    {
      imgSrc: "assets/link.png",
      title: "W3Schools: Learn HTML",
      addedBy: "techsnap",
      backgroundColor: "rgb(243, 255, 131)",
    },
    {
      imgSrc: "assets/link.png",
      title: "W3Schools: Learn HTML",
      addedBy: "techsnap",
      backgroundColor: "rgb(168, 255, 127)",
    },
    {
      imgSrc: "assets/link.png",
      title: "W3Schools: Learn HTML",
      addedBy: "techsnap",
      backgroundColor: "rgb(243, 255, 131)",
    },
    {
      imgSrc: "assets/link.png",
      title: "W3Schools: Learn HTML",
      addedBy: "techsnap",
      backgroundColor: "rgb(243, 255, 131)",
    },
  ];

  return (
    <div className="more-external-cont">
      {externalResources.map((resource, index) => (
        <ExternalResourceCard
          key={index}
          imgSrc={resource.imgSrc}
          title={resource.title}
          addedBy={resource.addedBy}
          backgroundColor={resource.backgroundColor}
        />
      ))}
    </div>
  );
};

// Main Component
function MoreDetails() {
  const { expandedCards } = useBeamStore();
  const theme = useTheme();
  console.log("More Details");
  const showDetailsPopUp = () => {
    console.log("Closing details popup");
  };
  const [activeTab, setActiveTab] = useState("roadmap");

  const { detailId } = useParams();
  console.log(detailId);
  const data = details.find(
    (detail) => detail.id.replace(/\s+/g, "") === detailId
  );
  console.log(data.units);

  if (!data) {
    return <div className="text-center text-red-500">Data not found.</div>;
  }

  return (
    <div className=" final mx-auto max-w-[1500px]">
      <Banner data={data} />

      <div className="flex m-2 mt-4 gap-2">
        <button
          onClick={() => setActiveTab("roadmap")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "roadmap" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Roadmap
        </button>
        <button
          onClick={() => setActiveTab("module")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "module" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Module
        </button>
        <button
          onClick={() => setActiveTab("tree")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "tree" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Tree
        </button>
      </div>
      <div className="flex justify-between gap-6 mt-4">
        <div
          className="w-full lg:w-[80%]"
          
        >
          {activeTab === "roadmap" && <Roadmap data={data.units} />}
          {activeTab === "module" && <Module data={data.units} />}
          {activeTab === "tree" && <FileTree data={data.units} />}
        </div>

        
          <div className="lg:flex hidden flex-col gap-6 w-min">
            <MagicCard
              className="w-auto h-auto rounded-lg p-6 text-start"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <h2 className="text-lg font-bold">Enroll for free</h2>
              <p className="text-gray text-sm mt-2">
                You are currently not enrolled. Track your progress, pick your
                courses, and learn daily with this learning path.
              </p>
              <button className="bg-blue-500 text-white font-medium px-6 py-2 rounded-lg mt-4">
                Enroll and start learning
              </button>
            </MagicCard>

            <MagicCard
              className="bg-white w-auto h-auto rounded-lg p-6 px-4 text-center"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <div className="w-full">
                <h2 className="text-lg font-bold text-left">
                  Join People Around the World
                </h2>
              </div>
              <div className="flex w-full flex-wrap justify-center items-center mt-4 space-x-4">
                <div className="flex flex-col gap-3 max-w-[340px]  overflow-hidden">
                  <Marquee pauseOnHover={true} direction="right" speed={30}>
                    
                      {mnc.map((m) => (
                        <img
                          key={m.name}
                          src={m.icon}
                          alt={m.name}
                          className="h-8 w-auto mr-10 object-contain"
                        />
                      ))}
                    
                  </Marquee>

                  <Marquee pauseOnHover={true} direction="left" speed={30}>
                    
                      {mnc.map((m) => (
                        <img
                          key={m.name}
                          src={m.icon}
                          alt={m.name}
                          className="h-8 w-auto mr-10 object-contain"
                        />
                      ))}
                    
                  </Marquee>
                </div>
              </div>
            </MagicCard>
          </div>
        
      </div>

      <div className="m-2 more-simplified">
        <div className="more_roadmap_heading">
          <p>Techsnap Curated Courses</p>
        </div>
        <div className="relative w-auto mt-10">
          <style>{customStyles}</style>
          <Carousel
            responsive={responsive}
            infinite={true}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
          >
            {Paths.map((path) => (
              <CuratedCard  key={path.id} path={path} className={"w-auto"} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="m-2 more-related">
        <div className="more_roadmap_heading">
          <p>Related Experts</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {experts.map((expert, index) => (
            <RelatedExpertsCard
              key={index}
              name={expert.name}
              title={expert.title}
              imgSrc={expert.imgSrc}
              believers={expert.believers}
            />
          ))}
        </div>
      </div>
      <ProjectList />
      <div className="more-external">
        <div className="more_roadmap_heading">
          <p>External Resources</p>
        </div>
        <ExternalResourceList />
      </div>
      <div class="more-resource">
        <div class="more-resource-card">
          <p>Resource center</p>
        </div>
      </div>
    </div>
  );
}

export default MoreDetails;
