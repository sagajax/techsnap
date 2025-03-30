import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BannerImage from "../../../assets/banner.png";
import "./../../../pages/myFeed/component/swiper.css";
import Scrollable from "./Scrollable";

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
    <div className="bg-white dark:bg-gray-800 pb-4 shadow-md rounded-lg flex flex-col overflow-hidden w-[300px]">
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

export default function TrendingCourse() {
  const cards = cardDataList.map((data, index) => (
    <Card key={index} data={data} />
  ));

  return (
    <div className="w-full">
      <Scrollable components={cards} />
    </div>
  );
}
// export default function TrendingCourse() {
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
