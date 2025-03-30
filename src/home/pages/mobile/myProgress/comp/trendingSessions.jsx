import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "./../../../pages/myFeed/component/swiper.css";
import BannerImage from "./images/session.jpeg";
import Scrollable from "./Scrollable";

const cardDataList = [
  {
    bannerImage:
      "https://static.skillshare.com/cdn-cgi/image/width=370,quality=90,format=auto/uploads/learningPaths/learningpathtry1.jpg",
    students: "28,942 users",
    duration: "1h 13m",
    projectName: "Weather Forecast Application",
    author: {
      name: "Anna Doe",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
  },
  {
    bannerImage:
      "https://static.skillshare.com/cdn-cgi/image/width=370,quality=90,format=auto/uploads/learningPaths/Drap_2.jpg",
    students: "15,874 users",
    duration: "2h 30m",
    projectName: "Expense Tracker",
    author: {
      name: "John Smith",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
  },
  {
    bannerImage:
      "https://static.skillshare.com/cdn-cgi/image/width=370,quality=90,format=auto/uploads/learningPaths/become-a-professional-3d-animator.jpg",
    students: "32,110 users",
    duration: "3h 15m",
    projectName: "Responsive Portfolio Website",
    author: {
      name: "Alice Brown",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
  },
  {
    bannerImage:
      "https://static.skillshare.com/cdn-cgi/image/width=370,quality=90,format=auto/uploads/learningPaths/launch-your-vector-illustration-journey-with-adobe-illustrator.png",
    students: "19,402 users",
    duration: "4h 45m",
    projectName: "E-Commerce Dashboard",
    author: {
      name: "Chris Lee",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
  },
  {
    bannerImage:
      "https://static.skillshare.com/cdn-cgi/image/width=370,quality=90,format=auto/uploads/learningPaths/unreal-image-learning-path-cover-image-jordy-vandeput.jpg",
    students: "11,546 users",
    duration: "5h 20m",
    projectName: "Real-Time Chat Application",
    author: {
      name: "Sophia Davis",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
  },
  {
    bannerImage:
      "https://static.skillshare.com/cdn-cgi/image/width=370,quality=90,format=auto/uploads/learningPaths/canva-learning-path-cover-image-simone-feretti.jpg",
    students: "24,198 users",
    duration: "3h 50m",
    projectName: "TypeScript Task Manager",
    author: {
      name: "Liam Johnson",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU",
    },
  },
];

const Card = ({ data }) => {
  const { bannerImage, students, duration, projectName, author } = data;

  return (
    <div className="bg-white border mx-auto rounded-lg w-[280px]">
      <img
        src={bannerImage}
        className="w-full h-[180px] rounded-md"
        alt="Banner"
      />
      <div className="p-4">
        <div className="flex justify-between text-gray-600 my-2 text-xs">
          <div>{students}</div>
          <div>{duration}</div>
        </div>
        <div className="mb-4 font-semibold text-md ">{projectName}</div>
        <div className="flex gap-2 items-center">
          <img
            src={author.avatar}
            className="rounded-full h-10 w-10"
            alt="Author Avatar"
          />
          <div className="text-xs">
            <div>{author.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TrendingSessiions() {
  const cards = cardDataList.map((data, index) => (
    <Card data={data} key={index} />
  ));

  return (
    <div className="w-full">
      <Scrollable components={cards} />
    </div>
  );
}
// export default function TrendingSessiions() {
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
