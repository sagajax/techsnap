import React from "react";

import { useNavigate } from "react-router-dom";
import "swiper/css";
import AllCourses from "../../component/courseComponent/allCources";
import Banner from "./component/Banner";
import { Card } from "./component/courseCard";
import Scrollable from "./component/Scrollable";
import AllCourse from "./component/allcourses";
function Cources() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/dashboard/courses/details");
  };
  

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

 
   

  return (
    <>
      <div className="md:pt-4 final">
       
        <Banner />
      
        <div className="hidden md:block final py-8 px-4">
          <div className="text-3xl font-bold mb-6 text-black ">
            <p>Featured Courses</p>
          </div>
          <div className=" w-full flex justify-between gap-4  ">{
            cardDataList.slice(0,3).map((data) => <Card key={data.id} data={data} onClick={handleClick} />)}
           
          </div>
        </div>

        <div className="hidden md:block final">
          <AllCourse datas={cardDataList} handleClick={handleClick} />
          {/* <AllCourses /> */}
        </div>
      </div>
    </>
  );
}

export default Cources;
