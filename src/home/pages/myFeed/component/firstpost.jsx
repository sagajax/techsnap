import React, { useState } from "react";
import profileImage from "../../../assets/profile.png";
import MoreOptionsPopup from "./moreOption";
import { FaEllipsisH } from "react-icons/fa";
import SharePopup from "./sharePopup";
import { useNavigate } from "react-router-dom";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiper.css";
import CommentSection from "./comment/commentSection";
function FirstPost({ images }) {
  const navigate = useNavigate();

  const [showMore, setShowMore] = useState(false);
  const [show1, setShow1] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [activeReplyId, setActiveReplyId] = useState(null);

  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
  };

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  const handleReplyClick = (id) => {
    setActiveReplyId(activeReplyId === id ? null : id);
  };

  // More button
  const [showPopup, setShowPopup] = useState(false);

  const handleMoreClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  // share
  const [showSharePopup, setShowSharePopup] = useState(false);

  const handleShareClick = () => {
    setShowSharePopup(true);
  };

  const handleCloseSharePopup = () => {
    setShowSharePopup(false);
  };

  console.log(images, "this is image");

  // Handle image click to navigate to new page with selected image
  const handleImageClick = (image) => {
    navigate("/dashboard/myfeed/feeddetail", {
      state: { allImages: images },
    });
  };
  return (
    <div>
      <div
        className="post_box p-4 shadow-lg my-8 rounded w-[555px] min-[1400px]:w-[650px] max-[500px]:w-full mx-auto"
        style={{ fontFamily: "Nunito" }}
      >
        <div className="avater_section flex items-center justify-between">
          <div className="profile flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={profileImage}
              alt="profile"
            />
            <div className="name">
              <p className="font-bold">Alan Biju</p>
              <span className="text-gray-600 text-xs">TechSnap DevOps</span>
            </div>
          </div>
          <div className="relative">
            <div
              className="more cursor-pointer text-4xl"
              onClick={handleMoreClick}
            >
              <FaEllipsisH />
            </div>

            {showPopup && <MoreOptionsPopup onClose={handleClosePopup} />}
          </div>
        </div>
        <div className="para mt-5 text-sm  ">
          <p className="text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            reprehenderit minima dolorem{" "}
            {showMore && (
              <>
                deleniti consequatur quas, alias quis. Quam quo harum inventore,
                hic rerum ab. Laudantium numquam inventore iste provident
                labore!
              </>
            )}
          </p>

          <button
            className="text-blue-500 cursor-pointer"
            onClick={handleSeeMoreClick}
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
        <div className="relative">
          <div className="photo cursor-pointer mt-5 swiper mySwiper">
            <Swiper
              className="swiper-container"
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="swiper-wrapper min-h-[400px]"
                    onClick={() => handleImageClick(image)}
                  >
                    <img
                      className="w-full h-auto swiper-slide object-contain bg-[#e1e1e1]"
                      src={image}
                      alt={`banner-${index}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="post_tages pl-0 flex items-center justify-between p-4">
          <div className="tags_box flex">
            <div className="tags bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">
              React Js
            </div>
            <div className="tags bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              React Js
            </div>
          </div>
          <div className="time text-sm">
            <p className="text-gray-600">posted 3 Jan</p>
          </div>
        </div>

        <div className="post_icon_container p-4 max-[500px]:p-0">
          <div className="post_icons justify-between flex items-center">
            {/* Upvote Button */}
            <div className="icon flex items-center mr-4 cursor-pointer">
              <img src="/like.svg" alt="" className=" w-5 h-5 mr-2" />
              <span className="text-gray-600 max-[500px]:hidden">Upvote</span>
            </div>

            {/* Downvote Button */}
            <div className="icon flex items-center mr-4 cursor-pointer">
              <img
                src="/like.svg"
                alt=""
                className=" w-5 h-5 mr-2 rotate-180"
              />
              <span className="text-gray-600 max-[500px]:hidden">Downvote</span>
            </div>

            {/* Comment Button */}
            <div
              className="icon flex items-center mr-4 cursor-pointer"
              onClick={handleCommentClick}
            >
              <img src="/commenty.svg" alt="" className=" w-5 h-5 mr-2" />
              <span className="text-gray-600 max-[500px]:hidden">Comment</span>
            </div>

            {/* Share Button */}
            <div className="relative">
              <div
                className="icon flex items-center cursor-pointer"
                onClick={handleShareClick}
              >
                <img src="/share.svg" alt="" className=" w-5 h-5 mr-2" />
                <span className="text-gray-600 max-[500px]:hidden">Share</span>
              </div>
              {/* Share Popup */}
              {showSharePopup && <SharePopup onClose={handleCloseSharePopup} />}
            </div>

            {/* Bookmark Button */}
            <div className="icon flex items-center mr-4 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
                />
              </svg>
              <span className="text-gray-600 max-[500px]:hidden">Bookmark</span>
            </div>
          </div>
        </div>

        {/* Comment section */}
        {showComments && (
          <>
            <CommentSection />
          </>
        )}
      </div>
    </div>
  );
}

export default FirstPost;
