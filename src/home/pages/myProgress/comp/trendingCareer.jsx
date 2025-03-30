import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./../../../pages/myFeed/component/swiper.css";

import { FaCertificate, FaUserGraduate } from "react-icons/fa";
import Scrollable from "./Scrollable";

export const gradients = [
  "bg-gradient-to-tr from-[#F8E2F1] to-[#E2B5E3]", // Light to Dark Purple shades
  "bg-gradient-to-tr from-[#A7B4F7] to-[#8E57FD]", // Light to Dark Deep Purple shades
  "bg-gradient-to-tr from-[#FFEC99] to-[#FDBB2D]", // Light to Dark Golden shades
  "bg-gradient-to-tr from-[#A0E3E3] to-[#22C1C3]", // Light to Dark Teal shades
  "bg-gradient-to-tr from-[#FFDB71] to-[#FDC830]", // Light to Dark Orange shades
  "bg-gradient-to-tr from-[#FF9E5A] to-[#F37335]", // Light to Dark Burnt Orange shades
  "bg-gradient-to-tr from-[#8F9EFF] to-[#667EEA]", // Light to Dark Blue shades
  "bg-gradient-to-tr from-[#D6A9E3] to-[#764BA2]", // Light to Dark Violet shades
  "bg-gradient-to-tr from-[#A0F0FF] to-[#00C6FF]", // Light to Dark Cyan shades
  "bg-gradient-to-tr from-[#88B8FF] to-[#0072FF]", // Light to Dark Royal Blue shades
  "bg-gradient-to-tr from-[#FFB0B4] to-[#FF5F6D]", // Light to Dark Coral shades
  "bg-gradient-to-tr from-[#FFDC83] to-[#FFC371]", // Light to Dark Warm Yellow shades
  "bg-gradient-to-tr from-[#FF9E91] to-[#FF7E5F]", // Light to Dark Sunset shades
  "bg-gradient-to-tr from-[#8FF29C] to-[#00F260]", // Light to Dark Green shades
  "bg-gradient-to-tr from-[#C4E9FF] to-[#76E1FF]", // Light to Dark Light Blue shades
];

export const Card = () => {
  // Randomly pick a gradient
  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="bg-white shadow-md border rounded-lg mx-auto w-[300px] mb-3 hover:drop-shadow-2xl">
      {/* Content */}
      <div
        className={`relative border-b pb-2 ${randomGradient} rounded-t-lg px-4 py-1`}
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
          <div className="flex items-center">
            <FaUserGraduate className="h-4 w-4 mr-2" />
            <span className="font-semibold pr-1">Beginner </span>
            <span>Friendly</span>
          </div>
          <span className="ml-auto font-semibold">150 hrs</span>
        </div>
      </div>
    </div>
  );
};

function TrendingCareer() {
  const cards = [0, 1, 2, 3].map((index) => <Card key={index} />);

  return (
    <div className="w-full">
      <Scrollable components={cards} />
    </div>
  );
}
// function TrendingCareer({ sectionId }) {
//   return (
//     <div className="swiper-container relative">
//       {/* Unique navigation buttons for this section */}
//       <div
//         className={`my-swiper-button-next-${sectionId} absolute top-1/2 right-0 transform -translate-y-1/2`}
//       >
//         <GrNext size={25} />
//       </div>
//       <div
//         className={`my-swiper-button-prev-${sectionId} absolute top-1/2 left-0 transform -translate-y-1/2`}
//       >
//         <GrPrevious size={25} />
//       </div>

//       <Swiper
//         className="w-[95%]"
//         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation={{
//           nextEl: `.my-swiper-button-next-${sectionId}`,
//           prevEl: `.my-swiper-button-prev-${sectionId}`,
//           disabledClass: "swiper-button-disabled",
//         }}
//         breakpoints={{
//           320: { slidesPerView: 1, spaceBetween: 20 },
//           480: { slidesPerView: 2, spaceBetween: 30 },
//           1000: { slidesPerView: 2, spaceBetween: 40 },
//           1200: { slidesPerView: 2, spaceBetween: 10 },
//           1400: { slidesPerView: 3, spaceBetween: 40 },
//           1500: { slidesPerView: 3.5, spaceBetween: 50 },
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

export default TrendingCareer;
