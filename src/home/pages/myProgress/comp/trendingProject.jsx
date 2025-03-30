import React from "react";
import { FaBookOpen, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./../../../pages/myFeed/component/swiper.css";
import BannerImage from "./images/project.jpeg";
import Scrollable from "./Scrollable";

const Card = () => {
  return (
    <div className="bg-white border  rounded-lg p-6 mx-auto w-[300px]">
      <img src={BannerImage} className="w-full h-[150px] rounded-md" />
      <div className="mt-4 font-semibold text-md ">
        Project Name Project Name Project Name Project
      </div>
      <div className="mt-1 text-gray-500 text-xs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat...
      </div>
      <div className="flex text-xs gap-2 my-3">
        <div className="flex items-center">
          <FaStar className="text-yellow-300" />
          <span className="ml-2 text-gray-700">4</span>
        </div>
        <div className="flex items-center">
          <FaBookOpen className="text-blue-500" />
          <span className="ml-2 text-gray-700">8 Chapters</span>
        </div>
        <div className="flex items-center">
          <FaBookOpen className="text-blue-500" />
          <span className="ml-2 text-gray-700">Intermediate</span>
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU"
          }
          className="rounded-full h-10 w-10"
        />
        <div className="text-sm">
          <div>Anna Doe</div>
          <div>Professional Artist</div>
        </div>
      </div>
    </div>
  );
};

export default function TrendingProject() {
  const cards = [<Card />, <Card />, <Card />, <Card />];

  return (
    <div className="w-full">
      <Scrollable components={cards} />
    </div>
  );
}
// export default function TrendingProject() {
//   return (
//     <div className="swiper-container relative">
//       <div className="my-swiper-button-next-uni">
//         <GrNext size={25} />
//       </div>
//       <div className="my-swiper-button-prev-uni">
//         <GrPrevious size={25} />
//       </div>

//       <Swiper
//         className="w-[95%]"
//         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//         spaceBetween={50}
//         slidesPerView={3}
//         // navigation
//         navigation={{
//           nextEl: ".my-swiper-button-next-uni",
//           prevEl: ".my-swiper-button-prev-uni",
//           disabledClass: "swiper-button-disabled",
//         }}
//         breakpoints={{
//           // when window width is >= 320px
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           // when window width is >= 480px
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
//         //   pagination={{ clickable: true }}
//         //   scrollbar={{ draggable: true }}
//         //   autoplay={{
//         //     delay: 3000,
//         //     disableOnInteraction: false,
//         //   }}
//         //   loop={true}
//         //   grabCursor={true}
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
