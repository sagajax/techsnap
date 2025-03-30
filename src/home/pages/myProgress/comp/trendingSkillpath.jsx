import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./../../../pages/myFeed/component/swiper.css";

import { FaBookReader, FaHeart, FaUsers } from "react-icons/fa";
import Scrollable from "./Scrollable";

const Card = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md mx-auto w-[300px]">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <img
          src="https://dummyimage.com/48x48" // Replace with actual icon/image URL
          alt="App Icon"
          className="h-8 w-8"
        />
        <div className="flex items-center text-gray-500 text-xs">
          <FaHeart className="mr-1" />
          4.9
        </div>
      </div>

      {/* Title */}
      <h2 className="text-md font-semibold">Frontend Developer</h2>

      {/* Stats Section */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-gray-600">
          <p className="text-xs">Enrolled</p>
          <div className="flex items-center mt-1">
            <FaUsers className="h-4 w-4 mr-1 text-gray-500" />
            <span>9.2k</span>
          </div>
        </div>

        <div className="text-gray-600">
          <p className="text-xs">Lessons</p>
          <div className="flex items-center mt-1">
            <FaBookReader className="h-4 w-4 mr-1 text-gray-500" />
            <span>90</span>
          </div>
        </div>
      </div>
      <div className="border-b-2 my-2 border-gray-300 border-dashed "></div>

      {/* Download Section */}
      <div className="mt-2 flex items-center justify-between">
        <span className="text-gray-600 text-sm">Frontend Developer</span>
        <button className="flex items-center px-3 py-1 bg-black text-white rounded-md text-sm font-semibold">
          Start
        </button>
      </div>
    </div>
  );
};
export default function TrendingSkillPath() {
  const cards = [<Card />, <Card />, <Card />, <Card />];

  return (
    <div className="w-full">
      <Scrollable components={cards} />
    </div>
  );
}
// export default function TrendingSkillPath() {
//   const uniqueId = "trending-skill-path"; // Unique ID for this Swiper section

//   return (
//     <div className={`swiper-container relative ${uniqueId}`}>
//       <div
//         className={`${uniqueId}-next absolute top-1/2 right-0 transform -translate-y-1/2`}
//       >
//         <GrNext size={25} />
//       </div>
//       <div
//         className={`${uniqueId}-prev absolute top-1/2 left-0 transform -translate-y-1/2`}
//       >
//         <GrPrevious size={25} />
//       </div>

//       <Swiper
//         className="w-[95%]"
//         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation={{
//           nextEl: `.${uniqueId}-next`,
//           prevEl: `.${uniqueId}-prev`,
//           disabledClass: "swiper-button-disabled",
//         }}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           480: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//           },
//           1000: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1200: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//           1400: {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//           1500: {
//             slidesPerView: 3.5,
//             spaceBetween: 50,
//           },
//         }}
//       >
//         <SwiperSlide>
//           <Card />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Card />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Card />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Card />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
