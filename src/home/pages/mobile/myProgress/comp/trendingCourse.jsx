import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Scrollable from "./Scrollable";
import BannerImage from "../../../../assets/banner.png";

// const cardData = [
//   {
//     title: "Introduction to SQL",
//     hours: "15 hours",
//     lessons: "9 lessons",
//     coins: "779 coins",
//     xp: "1250xp",
//     image: "/src/home/assets/python_logo.png",
//   },
//   {
//     title: "Web Development Basics",
//     hours: "12 hours",
//     lessons: "8 lessons",
//     coins: "599 coins",
//     xp: "1100xp",
//     image: "/src/home/assets/python_logo.png",
//   },
//   {
//     title: "Data Science Essentials",
//     hours: "20 hours",
//     lessons: "12 lessons",
//     coins: "999 coins",
//     xp: "1500xp",
//     image: "/src/home/assets/python_logo.png",
//   },
//   // Add more cards as needed
// ];

// const Card = () => {
//   return (
//     <div className="bg-white dark:bg-gray-800 pb-4 shadow-md rounded-lg flex flex-col overflow-hidden w-[280px]">
//       <div className="h-[150px] max-[900px]:mb-4">
//         <img
//           src={BannerImage}
//           alt="card"
//           className="h-full w-full object-cover"
//         />
//       </div>
//       <div className="flex justify-between text-gray-600  text-sm px-4 my-2">
//         <div>28942 students</div>
//         <div>1h 13m</div>
//       </div>
//       <div className="flex flex-col justify-between">
//         <div className="px-4 pb-2">
//           <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
//             Introduction to Python
//           </p>
//         </div>

//         <div className="flex gap-2 items-center px-4 py-2">
//           {/* <img src="https://dummyimage.com/38/38" className="rounded-full" /> */}
//           <img
//             src={
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU"
//             }
//             className="rounded-full h-10 w-10"
//           />
//           <div className="text-sm">
//             <div>Author Name</div>
//             {/* <div>Description</div> */}
//           </div>
//         </div>
//         <div className="px-4 text-sm pt-1">
//           <div className="flex items-center space-x-2">
//             <div className="bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
//               React
//             </div>
//             <div className="bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
//               Kodo
//             </div>
//           </div>
//         </div>
//         <button className="w-[90%] mx-auto bg-white dark:bg-gray-700 text-black dark:text-gray-200 h-9 border border-black dark:border-gray-500 font-semibold rounded-md mt-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
//           View in Detail
//         </button>
//       </div>
//     </div>
//   );
// };

const cardDataList = [
  {
    bannerImage:
      "https://i.pinimg.com/736x/aa/fe/c1/aafec1ee67e230a77f89463e421b006b.jpg", // Python
    students: "28,942 students",
    duration: "1h 13m",
    title: "Introduction to Python",
    author: {
      name: "John Doe",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
    tags: ["React", "Kodo"],
  },
  {
    bannerImage:
      "https://i.pinimg.com/736x/3f/f3/38/3ff338fded7cab6c231606b35ebe18ab.jpg", // JavaScript
    students: "15,874 students",
    duration: "2h 30m",
    title: "Mastering JavaScript",
    author: {
      name: "Jane Smith",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
    tags: ["JavaScript", "ES6"],
  },
  {
    bannerImage:
      "https://i.pinimg.com/736x/89/ee/f0/89eef0156f864ee018f3d90522ca360e.jpg", // CSS
    students: "32,110 students",
    duration: "3h 15m",
    title: "CSS for Beginners",
    author: {
      name: "Mike Johnson",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
    tags: ["CSS", "Design"],
  },
  {
    bannerImage:
      "https://i.pinimg.com/736x/7b/7e/0f/7b7e0fbc455d4198d38fa02d5051ffe7.jpg", // React
    students: "19,402 students",
    duration: "4h 45m",
    title: "Getting Started with React",
    author: {
      name: "Alice Brown",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
    tags: ["React", "Components"],
  },
  {
    bannerImage:
      "https://i.pinimg.com/736x/49/a7/f1/49a7f11e2765a3bc32dc946d725349d4.jpg", // Node.js
    students: "12,768 students",
    duration: "1h 50m",
    title: "Introduction to Node.js",
    author: {
      name: "Chris Lee",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
    tags: ["Node.js", "Backend"],
  },
  {
    bannerImage:
      "https://i.pinimg.com/736x/be/87/ce/be87cebbb89f29dd63cd85230ced3f74.jpg", // TypeScript
    students: "21,390 students",
    duration: "2h 10m",
    title: "Advanced TypeScript",
    author: {
      name: "Emily Davis",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
    tags: ["TypeScript", "Typing"],
  },
];

const Card = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 pb-4 shadow-md rounded-lg flex flex-col overflow-hidden w-[280px]">
      {/* Banner */}
      <div className="h-[150px] max-[900px]:mb-4">
        <img
          src={data.bannerImage}
          alt="card"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Students and Duration */}
      <div className="flex justify-between text-gray-600 text-sm px-4 my-2">
        <div>{data.students}</div>
        <div>{data.duration}</div>
      </div>

      {/* Title */}
      <div className="px-4 pb-2">
        <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
          {data.title}
        </p>
      </div>

      {/* Author */}
      <div className="flex gap-2 items-center px-4 py-2">
        <img
          src={data.author.avatar}
          alt="Author Avatar"
          className="rounded-full h-10 w-10"
        />
        <div className="text-sm">
          <div>{data.author.name}</div>
        </div>
      </div>

      {/* Tags */}
      <div className="px-4 text-sm pt-1">
        <div className="flex items-center space-x-2">
          {data.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button className="w-[90%] mx-auto bg-white dark:bg-gray-700 text-black dark:text-gray-200 h-9 border border-black dark:border-gray-500 font-semibold rounded-md mt-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
        View in Detail
      </button>
    </div>
  );
};

function TrendingCourse() {
  const cards = cardDataList.map((data, index) => (
    <Card key={index} data={data} />
  ));

  return (
    <div className="w-full">
      <Scrollable components={cards} />
    </div>
  );
}

// function TrendingCourse() {
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
//         <div className=" bg-white rounded-lg shadow-lg flex flex-col justify-between p-4">
//           <div className=" flex items-center justify-between">
//             <img
//               src="/src/home/assets/python_logo.png"
//               alt="course-logo"
//               className="w-10 h-10 rounded-full"
//             />
//             <div className="resolution bg-yellow-300 px-2 py-1 rounded-sm">
//               <p className="text-xs font-semibold">1250xp</p>
//             </div>
//           </div>
//           <div className=" mt-4">
//             <h1 className="text-lg font-semibold">Introduction to SQL</h1>
//             <div className="my_progess_trending_card_options_holder flex items-center mt-2">
//               <div className="flex items-center mr-4">
//                 <img
//                   src="/src/home/assets/time.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">15 hours</p>
//               </div>
//               <div className=" flex items-center mr-4">
//                 <img
//                   src="/src/home/assets/lessons.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">9 lessons</p>
//               </div>
//               <div className=" flex items-center">
//                 <img
//                   src="/src/home/assets/coin.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">779 coins</p>
//               </div>
//             </div>
//           </div>
//           <div className=" mt-4 pt-4 border-t border-gray-200">
//             <button className="w-full bg-white text-black font-semibold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
//               Start Course
//             </button>
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className=" bg-white rounded-lg shadow-lg flex flex-col justify-between p-4">
//           <div className=" flex items-center justify-between">
//             <img
//               src="/src/home/assets/python_logo.png"
//               alt="course-logo"
//               className="w-10 h-10 rounded-full"
//             />
//             <div className="resolution bg-yellow-300 px-2 py-1 rounded-sm">
//               <p className="text-xs font-semibold">1250xp</p>
//             </div>
//           </div>
//           <div className=" mt-4">
//             <h1 className="text-lg font-semibold">Introduction to SQL</h1>
//             <div className="my_progess_trending_card_options_holder flex items-center mt-2">
//               <div className="flex items-center mr-4">
//                 <img
//                   src="/src/home/assets/time.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">15 hours</p>
//               </div>
//               <div className=" flex items-center mr-4">
//                 <img
//                   src="/src/home/assets/lessons.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">9 lessons</p>
//               </div>
//               <div className=" flex items-center">
//                 <img
//                   src="/src/home/assets/coin.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">779 coins</p>
//               </div>
//             </div>
//           </div>
//           <div className=" mt-4 pt-4 border-t border-gray-200">
//             <button className="w-full bg-white text-black font-semibold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
//               Start Course
//             </button>
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className=" bg-white rounded-lg shadow-lg flex flex-col justify-between p-4">
//           <div className=" flex items-center justify-between">
//             <img
//               src="/src/home/assets/python_logo.png"
//               alt="course-logo"
//               className="w-10 h-10 rounded-full"
//             />
//             <div className="resolution bg-yellow-300 px-2 py-1 rounded-sm">
//               <p className="text-xs font-semibold">1250xp</p>
//             </div>
//           </div>
//           <div className=" mt-4">
//             <h1 className="text-lg font-semibold">Introduction to SQL</h1>
//             <div className="my_progess_trending_card_options_holder flex items-center mt-2">
//               <div className="flex items-center mr-4">
//                 <img
//                   src="/src/home/assets/time.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">15 hours</p>
//               </div>
//               <div className=" flex items-center mr-4">
//                 <img
//                   src="/src/home/assets/lessons.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">9 lessons</p>
//               </div>
//               <div className=" flex items-center">
//                 <img
//                   src="/src/home/assets/coin.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">779 coins</p>
//               </div>
//             </div>
//           </div>
//           <div className=" mt-4 pt-4 border-t border-gray-200">
//             <button className="w-full bg-white text-black font-semibold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
//               Start Course
//             </button>
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className=" bg-white rounded-lg shadow-lg flex flex-col justify-between p-4">
//           <div className=" flex items-center justify-between">
//             <img
//               src="/src/home/assets/python_logo.png"
//               alt="course-logo"
//               className="w-10 h-10 rounded-full"
//             />
//             <div className="resolution bg-yellow-300 px-2 py-1 rounded-sm">
//               <p className="text-xs font-semibold">1250xp</p>
//             </div>
//           </div>
//           <div className=" mt-4">
//             <h1 className="text-lg font-semibold">Introduction to SQL</h1>
//             <div className="my_progess_trending_card_options_holder flex items-center mt-2">
//               <div className="flex items-center mr-4">
//                 <img
//                   src="/src/home/assets/time.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">15 hours</p>
//               </div>
//               <div className=" flex items-center mr-4">
//                 <img
//                   src="/src/home/assets/lessons.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">9 lessons</p>
//               </div>
//               <div className=" flex items-center">
//                 <img
//                   src="/src/home/assets/coin.svg"
//                   alt="time"
//                   className="w-4 h-4 mr-2"
//                 />
//                 <p className="text-sm font-semibold text-gray-600">779 coins</p>
//               </div>
//             </div>
//           </div>
//           <div className=" mt-4 pt-4 border-t border-gray-200">
//             <button className="w-full bg-white text-black font-semibold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
//               Start Course
//             </button>
//           </div>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// }

export default TrendingCourse;
