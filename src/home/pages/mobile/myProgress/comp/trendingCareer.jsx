import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Scrollable from "./Scrollable";
import { gradients } from "../../../myProgress/comp/trendingCareer";
import { FaCertificate, FaUserGraduate } from "react-icons/fa";

const Card = () => {
  // Randomly pick a gradient
  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="bg-white shadow-md border rounded-lg mx-auto w-[280px] mb-3 hover:drop-shadow-2xl">
      {/* Content */}
      <div
        className={`relative border-b pb-2 ${randomGradient} rounded-t-lg px-4 py-2`}
      >
        <div className="text-sm font-semibold text-white uppercase tracking-wider">
          {/* Career path */}
        </div>
      </div>
      <div className="px-4 pb-4">
        <h2 className="text-lg font-bold mt-4">Full-Stack Engineer</h2>
        <p className="text-gray-700 mt-2 text-xs">
          A full-stack engineer can get a project done from start to finish,
          back-end to front-end.
        </p>
        <div className="border-b-2 my-2 border-gray-300 border-dashed"></div>
        <div className="text-gray-600">
          Includes <span className="font-semibold">51 Courses</span>
        </div>
        <div className="border-b-2 my-2 border-gray-300 border-dashed"></div>
        <div className="text-gray-600 text-sm text-ellipsis line-clamp-1 flex items-center">
          <FaCertificate className="h-4 w-4 mr-2" />
          With{" "}
          <span className="font-semibold ml-1">Professional Certification</span>
        </div>
        <div className="border-b-2 my-2 border-gray-300 border-dashed"></div>
        <div className="text-gray-600 flex items-center justify-between">
          <div className="flex text-sm items-center">
            <FaUserGraduate className="h-4 w-4 mr-2" />
            <span className="font-semibold pr-1">Beginner </span>
            <span>Friendly</span>
          </div>
          <span className="ml-auto text-sm font-semibold">150 hrs</span>
        </div>
      </div>
    </div>
  );
};
function TrendingCareer() {
  const cards = Array(4).fill(<Card />);

  return (
    <div className="w-full">
      <Scrollable components={cards} />
    </div>
  );
}

export default TrendingCareer;
