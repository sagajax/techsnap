import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const bannerData = [
  {
    title: "Hands-On learning",
    description:
      "Practice what you learn with our interactive courses, practice problems, and quizzes.",
    video:
      "https://cdn.programiz.pro/programiz-static/programiz-pro/homepage/3.improve-tech-interview-skills.mp4",
  },
  {
    title: "Coding Challenges",
    description:
      "Level up your skills with our challenges and compete on our global leaderboard.",
    video:
      "https://cdn.programiz.pro/programiz-static/programiz-pro/homepage/2. beginner-friendly.mp4",
  },

  {
    title: "Practice Projects",
    description: "Build your confidence through guided real-world projects.",
    video:
      "https://cdn.programiz.pro/programiz-static/programiz-pro/homepage/4.practice-projects.mp4",
  },
  {
    title: "AI Assistant",
    description:
      "Get personalized AI help with code explanation, error fixing, and feedback for improvements.",
    video:
      "https://cdn.programiz.pro/programiz-static/programiz-pro/homepage/5. personalized-ai-help.mp4",
  },
  {
    title: "Professional certification",
    description:
      "Showcase your expertise and stand out to your potential employers.",
    video:
      "https://cdn.programiz.pro/programiz-static/programiz-pro/homepage/6.professional-certifications.mp4",
  },
];

export default function Banner() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="flex flex-col justify-between p-6 h-[432px] bg-purple-300 rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold ">
        Overcome your fear of coding with Techsnap PRO
      </h2>

      <div className="flex justify-between mt-4">
        <ul className="flex flex-col text-xl font-semibold justify-center w-[35%] ">
          {bannerData.map((item, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={`group flex  py-4 cursor-pointer w-full flex-col hover:text-black  border-t border-t-gray-300 first:border-t-0 ${
                active === index ? "text-black" : "text-white"
              }`}
            >
              <span className="flex w-fit items-center gap-2 flex-start">
                <GoDotFill
                  className={`w-4 h-4  ${
                    active === index
                      ? "visible text-black"
                      : "invisible group-hover:visible group-hover:text-black"
                  }`}
                />
                {item.title}
              </span>
              {active === index && (
                <span className="text-sm font-normal pl-6 line-clamp-2">
                  {" "}
                  {item.description}
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="w-3/5 h-full relative my-auto">
          <video
            ref={videoRef}
            className="w-full h-80 object-cover  rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
            key={active}
          >
            <source src={bannerData[active].video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button
            onClick={togglePlayPause}
            className="absolute bottom-6 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <FaPause className="w-6 h-6" />
            ) : (
              <FaPlay className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
