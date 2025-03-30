import profile from "../../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { FaBook, FaClipboardCheck, FaProjectDiagram } from "react-icons/fa";
import { gradients } from "../../myProgress/comp/trendingCareer";
import BannerImage from "../../../assets/banner.png";

function CardCareer({ path, className }) {
  const navigate = useNavigate();
  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];
  return (
    <div className={`${className} bg-white shadow-md border rounded-lg mx-2 1300:mx-4 1200:w-[300px] w-[350px] mb-3 hover:drop-shadow-lg`} onClick={() => navigate(`/dashboard/career/${path.title.replace(/\s+/g, '')}`)}>
      <div
        className={`relative border-b pb-4 ${randomGradient} rounded-t-lg px-4 py-2`}
      >
        <div className="text-sm font-semibold text-white uppercase tracking-wider"></div>
      </div>
      <div className="px-4 pb-4">
        <h2 className="text-lg font-bold mt-4">{path.title}</h2>
        <p className="text-gray-700 mt-2 text-xs line-clamp-2 overflow-hidden text-ellipsis">
          {path.description}
        </p>
        <div className="border-b-2 my-2 border-gray-300 border-dashed" />
        <div className="text-gray-600 flex items-center gap-1">
          <FaBook className="inline mr-1" />
          <span className="font-medium">{path.courses} </span> Courses
        </div>
        <div className="border-b-2 my-2 border-gray-300 border-dashed"></div>
        <div className="text-gray-600 flex items-center gap-1 ">
          <FaProjectDiagram className="inline mr-1" />
          <span className="font-medium">{path.projects}</span> Projects
        </div>
        <div className="border-b-2 my-2 border-gray-300 border-dashed"></div>
        <div className="text-gray-600 flex items-center gap-1 ">
          <FaClipboardCheck className="inline mr-1" />
          <span className="font-medium">{path.assessments}</span> Skill
          Assessments
        </div>
      </div>
    </div>
    
  );
}

export const CuratedCard = ({path, className}) => {
  return (
    <div className={`${className}bg-white dark:bg-gray-800 pb-4 mx-4 shadow-md rounded-lg flex flex-col overflow-hidden`}>
      <div className="h-[150px] max-[900px]:mb-4">
        <img
          src={BannerImage}
          alt="card"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-between text-gray-600  text-sm px-4 my-2">
        <div>28942 students</div>
        <div>1h 13m</div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="px-4 pb-2">
          <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
            {path.title}
          </p>
        </div>

        <div className="flex gap-2 items-center px-4 py-2">
          {/* <img src="https://dummyimage.com/38/38" className="rounded-full" /> */}
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU"
            }
            className="rounded-full h-10 w-10"
          />
          <div className="text-sm">
            <div>Author Name</div>
            {/* <div>Description</div> */}
          </div>
        </div>
        <div className="px-4 text-sm pt-1">
          <div className="flex items-center space-x-2">
            <div className="bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
              React
            </div>
            <div className="bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
              Kodo
            </div>
          </div>
        </div>
        <button className="w-[90%] mx-auto bg-white dark:bg-gray-700 text-black dark:text-gray-200 h-9 border border-black dark:border-gray-500 font-semibold rounded-md mt-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
          View in Detail
        </button>
      </div>
    </div>
  );
}

export default CardCareer;
