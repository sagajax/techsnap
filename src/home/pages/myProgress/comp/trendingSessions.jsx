import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./../../../pages/myFeed/component/swiper.css";
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
    <div className="bg-white border mx-auto rounded-lg w-[300px]">
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
