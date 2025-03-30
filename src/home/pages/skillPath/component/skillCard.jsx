import { FaBookReader } from "react-icons/fa";
import { FaHeart, FaUsers } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


export default function CareerCard  ({data}) {

      const navigate = useNavigate();
    const handleClick = () => {
      navigate("/dashboard/skill/details");
    };

   

   
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md mx-auto w-full">
            <div className="flex items-center justify-between mb-4">
              <img
                src={data.img} // 
                alt="App Icon"
                className="h-8 w-20"
              />
              <div className="flex items-center text-gray-500 text-xs">
                <FaHeart className="mr-1" />
                {data.rating}
              </div>
            </div>
      
          
            <h2 className="text-md font-semibold">{data.title}</h2>
            <div className="flex justify-between items-center mt-4">
              <div className="text-gray-600">
                <p className="text-xs">Enrolled</p>
                <div className="flex items-center mt-1">
                  <FaUsers className="h-4 w-4 mr-1 text-gray-500" />
                  <span>{data.enrolled}</span>
                </div>
              </div>
      
              <div className="text-gray-600">
                <p className="text-xs">Lessons</p>
                <div className="flex items-center mt-1">
                  <FaBookReader className="h-4 w-4 mr-1 text-gray-500" />
                  <span>{data.lessons}</span>
                </div>
              </div>
            </div>
            <div className="border-b-2 my-2 border-gray-300 border-dashed "></div>
      
            {/* Download Section */}
            <div className="mt-2 flex items-center justify-between">
              <span className="text-gray-600 text-sm">{data.subtitle}</span>
              <button className="flex items-center px-3 py-1 bg-black text-white rounded-md text-sm font-semibold" onClick={handleClick}>
                Start
              </button>
            </div>
          </div>
        );
      
    
  };