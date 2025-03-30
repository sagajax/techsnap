import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BannerImage from "./images/project.jpeg";
import Scrollable from "./Scrollable";
import { FaBookOpen, FaStar } from "react-icons/fa";

// const projects = [
//   {
//     title: "Introduction to Python",
//     duration: "16 hours",
//     author: "Alan Biju",
//     tags: ["React", "Kodo"],
//   },
//   {
//     title: "Advanced JavaScript",
//     duration: "12 hours",
//     author: "Jane Doe",
//     tags: ["JavaScript", "Node.js"],
//   },
//   {
//     title: "UI/UX Design Basics",
//     duration: "10 hours",
//     author: "John Smith",
//     tags: ["Figma", "Design"],
//   },
// ];

// import PropTypes from "prop-types";

const Card = () => {
  return (
    <div className="bg-white border  rounded-lg p-6 mx-auto w-[280px]">
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

function TrendingProject() {
  const cards = Array(4).fill(<Card />);

  return (
    <div className="w-full">
      <Scrollable components={cards} />
    </div>
  );
}

// function TrendingProject() {
//   return (
//     <Swiper
//       className="swiper-container"
//       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       breakpoints={{
//         // when window width is >= 320px
//         320: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         // when window width is >= 480px
//         480: {
//           slidesPerView: 2,
//           spaceBetween: 30,
//         },
//         // when window width is >= 768px
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 40,
//         },
//         // when window width is >= 1024px
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 50,
//         },
//       }}
//       //   pagination={{ clickable: true }}
//       //   scrollbar={{ draggable: true }}
//       //   autoplay={{
//       //     delay: 3000,
//       //     disableOnInteraction: false,
//       //   }}
//       //   loop={true}
//       //   grabCursor={true}
//     >
//       <SwiperSlide>
//         <div className=" bg-white    mb-20 shadow-md flex flex-col">
//           <div className="h-[150px] max-[900px]:mb-4">
//             <img src={BannerImage} alt="card" className="h-[150px] " />
//           </div>
//           <div className="flex flex-col justify-between">
//             <div className="title p-4 pb-2">
//               <p className="font-bold text-lg">Introduction to Python</p>
//             </div>

//             <div className="icons flex justify-between p-2 px-4">
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//             </div>
//             <div className=" flex items-center px-4 pt-2 text-xs">
//               <p className="text-gray-700 font-semibold">Author:</p>
//               <div className="name flex items-center ml-2">
//                 <span>
//                   <img
//                     src="/src/home/assets/coin.svg"
//                     alt="indian"
//                     className="w-4 h-4"
//                   />
//                 </span>
//                 <h3 className="text-gray-700 font-semibold">Alan Biju</h3>
//               </div>
//             </div>
//             <div className=" px-4 text-sm pt-1">
//               <div className="tags_box flex items-center">
//                 <div className="tags text-purple-600 text-xs rounded-lg mr-2">
//                   <p>React</p>
//                 </div>
//                 <div className="tags text-purple-600 text-xs rounded-lg mr-2">
//                   <p>Kodo</p>
//                 </div>
//               </div>
//             </div>
//             <button className="w-[90%] mx-auto bg-white text-black h-9 border border-black font-semibold rounded-md mt-4">
//               View in Detail
//             </button>
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className=" bg-white    mb-20 shadow-md flex flex-col">
//           <div className="h-[150px] max-[900px]:mb-4">
//             <img src={BannerImage} alt="card" className="h-[150px] " />
//           </div>
//           <div className="flex flex-col justify-between">
//             <div className="title p-4 pb-2">
//               <p className="font-bold text-lg">Introduction to Python</p>
//             </div>

//             <div className="icons flex justify-between p-2 px-4">
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//             </div>
//             <div className=" flex items-center px-4 pt-2 text-xs">
//               <p className="text-gray-700 font-semibold">Author:</p>
//               <div className="name flex items-center ml-2">
//                 <span>
//                   <img
//                     src="/src/home/assets/coin.svg"
//                     alt="indian"
//                     className="w-4 h-4"
//                   />
//                 </span>
//                 <h3 className="text-gray-700 font-semibold">Alan Biju</h3>
//               </div>
//             </div>
//             <div className=" px-4 text-sm pt-1">
//               <div className="tags_box flex items-center">
//                 <div className="tags text-purple-600 text-xs rounded-lg mr-2">
//                   <p>React</p>
//                 </div>
//                 <div className="tags text-purple-600 text-xs rounded-lg mr-2">
//                   <p>Kodo</p>
//                 </div>
//               </div>
//             </div>
//             <button className="w-[90%] mx-auto bg-white text-black h-9 border border-black font-semibold rounded-md mt-4">
//               View in Detail
//             </button>
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className=" bg-white    mb-20 shadow-md flex flex-col">
//           <div className="flex flex-col justify-between">
//             <div className="h-[150px] max-[900px]:mb-4">
//               <img src={BannerImage} alt="card" className="h-[150px] " />
//             </div>
//             <div className="title p-4 pb-2">
//               <p className="font-bold text-lg">Introduction to Python</p>
//             </div>
//             <div className="icons flex justify-between p-2 px-4">
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//             </div>
//             <div className=" flex items-center px-4 pt-2 text-xs">
//               <p className="text-gray-700 font-semibold">Author:</p>
//               <div className="name flex items-center ml-2">
//                 <span>
//                   <img
//                     src="/src/home/assets/coin.svg"
//                     alt="indian"
//                     className="w-4 h-4"
//                   />
//                 </span>
//                 <h3 className="text-gray-700 font-semibold">Alan Biju</h3>
//               </div>
//             </div>
//             <div className=" px-4 text-sm pt-1">
//               <div className="tags_box flex items-center">
//                 <div className="tags text-purple-600 text-xs rounded-lg mr-2">
//                   <p>React</p>
//                 </div>
//                 <div className="tags text-purple-600 text-xs rounded-lg mr-2">
//                   <p>Kodo</p>
//                 </div>
//               </div>
//             </div>
//             <button className="w-[90%] mx-auto bg-white text-black h-9 border border-black font-semibold rounded-md mt-4">
//               View in Detail
//             </button>
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className=" bg-white    mb-20 shadow-md flex flex-col">
//           <div className="image h-[150px] max-[900px]:mb-4">
//             <img
//               src="/src/home/assets/banner.png"
//               alt="card"
//               className="w-full object-cover"
//             />
//           </div>
//           <div className="flex flex-col justify-between">
//             <div className="title p-4 pb-2">
//               <p className="font-bold text-lg">Introduction to Python</p>
//             </div>

//             <div className="icons flex justify-between p-2 px-4">
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//               <div className="icon_item flex items-center text-xs">
//                 <span>
//                   <img
//                     src="/src/home/assets/card_time.svg"
//                     alt="time"
//                     className="w-5 h-5"
//                   />
//                 </span>
//                 <p>16 hours</p>
//               </div>
//             </div>
//             <div className=" flex items-center px-4 pt-2 text-xs">
//               <p className="text-gray-700 font-semibold">Author:</p>
//               <div className="name flex items-center ml-2">
//                 <span>
//                   <img
//                     src="/src/home/assets/coin.svg"
//                     alt="indian"
//                     className="w-4 h-4"
//                   />
//                 </span>
//                 <h3 className="text-gray-700 font-semibold">Alan Biju</h3>
//               </div>
//             </div>
//             <div className=" px-4 text-sm pt-1">
//               <div className="tags_box flex items-center">
//                 <div className="tags text-purple-600 text-xs rounded-lg mr-2">
//                   <p>React</p>
//                 </div>
//                 <div className="tags text-purple-600 text-xs rounded-lg mr-2">
//                   <p>Kodo</p>
//                 </div>
//               </div>
//             </div>
//             <button className="w-[90%] mx-auto bg-white text-black h-9 border border-black font-semibold rounded-md mt-4">
//               View in Detail
//             </button>
//           </div>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   )

export default TrendingProject;
