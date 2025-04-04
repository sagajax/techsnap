import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import profileImage from "../../../../assets/profile.png";
import MoreOptionsPopup from "./moreOption";
import { FaEllipsisH } from "react-icons/fa";
import SharePopup from "./sharePopup";
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
function FeedDetail() {
  const location = useLocation();
  const { allImages } = location.state;

  //   Post things here
  const [showMore, setShowMore] = useState(false);
  const [show1, setShow1] = useState(false);
  const [showComments, setShowComments] = useState(true);
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
  // Post things end here

  return (
    <div>
      <div
        className="mb-8 mt-14 bg-gray-100 rounded w-full mx-auto shadow-lg p-4 "
        // className="post_box p-4 shadow-lg my-8 rounded w-[555px] min-[1400px]:w-[650px] max-[500px]:w-full mx-auto "
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
              {allImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-wrapper min-h-[400px]">
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
          <div className="comment_section p-4 max-[900px]:p-0">
            <div className="comment_input1 flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={profileImage}
                alt="profile"
              />
              <input
                className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300"
                type="text"
                name="comment"
                placeholder="Write a comment..."
              />
            </div>

            <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]">
              Submit
            </button>

            <div className="comments_box w-full max-[900px]:px-[5px] mt-4">
              <div className="comment mb-4">
                <div className="main_comment flex flex-col overflow-hidden">
                  <div className="main_info flex-1 flex">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src={profileImage}
                      alt="profile"
                    />
                    <div className="flex flex-col">
                      <div className="comment_info max-[900px]:text-sm bg-gray-200 p-[10px] rounded-lg">
                        <div className="comment_name flex items-center mb-2">
                          <p className="font-bold mr-2 text-sm">Alan Biju</p>
                          <span className="text-gray-600 text-xs">
                            Developer
                          </span>
                        </div>
                        <div className="para mb-2 text-sm">
                          <p className="text-gray-700">
                            Thank you Nuseir Yassin for taking us this through
                            this amazing Odyssey 💕👌😊, surreal experience and
                            Dubai has done it again a giant time
                            capsule.........Yet again millenials will throng the
                            Booking counters eager to catch a
                          </p>
                        </div>
                      </div>
                      <div className="likes flex items-center mb-4 text-xs">
                        <span className="mr-2">Like . 51 ||</span>
                        <span
                          className="comment_reply_btn text-blue-500 cursor-pointer"
                          onClick={() => handleReplyClick(1)}
                        >
                          Reply
                        </span>
                      </div>
                      {activeReplyId === 1 && (
                        <div className="comment_input max-[900px]:text-sm reply flex items-center mb-4">
                          <img
                            className="w-8 h-8 rounded-full mr-4"
                            src={profileImage}
                            alt="profile"
                          />
                          <input
                            className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300 max-[900px]:w-[50%]"
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder="Write a reply..."
                          />
                          <button
                            id="submit_comment"
                            className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]"
                          >
                            Submit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="sub_comment max-[900px]:text-sm ml-[50px] max-[900px]:ml-[30px] max-[900px]:w-full flex mb-4">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src={profileImage}
                      alt="profile"
                    />
                    <div className="flex flex-col bg-white">
                      <div className="main_info flex-1 bg-gray-200 p-2 rounded-lg">
                        <div className="comment_info">
                          <div className="comment_name flex flex-col justify-center mb-2">
                            <div className="flex">
                              <p className="font-bold mr-2 text-sm">
                                Alan Biju
                              </p>
                              <span className="text-gray-600 text-xs">
                                Developer
                              </span>
                            </div>
                            <span className="text-gray-600 text-xs">
                              Replying to @lorem
                            </span>
                          </div>
                          <div className="para mb-2 text-sm">
                            <p className="text-gray-700">
                              Thank you Nuseir Yassin for taking us this through
                              this amazing Odyssey 💕👌😊, surreal experience
                              and Dubai has done it again a giant time
                              capsule.........Yet again millenials will throng
                              the Booking counters eager to catch a
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="likes flex items-center mb-4 text-xs">
                        <span className="mr-2">Like . 51 ||</span>
                        <span
                          className="comment_reply_btn text-blue-500 cursor-pointer"
                          onClick={() => handleReplyClick(2)} // Unique ID for the comment
                        >
                          Reply
                        </span>
                      </div>
                      {activeReplyId === 2 && ( // Show input only if activeReplyId matches
                        <div className="comment_input max-[900px]:text-sm reply flex items-center mb-4">
                          <img
                            className="w-8 h-8 rounded-full mr-4"
                            src={profileImage}
                            alt="profile"
                          />
                          <input
                            className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300 max-[900px]:w-[50%]"
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder="Write a reply..."
                          />
                          <button
                            id="submit_comment"
                            className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]"
                          >
                            Submit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="sub_sub_comment max-[900px]:text-sm ml-[95px] max-[900px]:ml-[70px] max-[900px]:w-full flex mb-4">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src={profileImage}
                      alt="profile"
                    />
                    <div className="flex flex-col bg-white">
                      <div className="main_info flex-1 bg-gray-200 p-2 rounded-lg">
                        <div className="comment_info">
                          <div className="comment_name flex flex-col justify-center mb-2">
                            <div className="flex">
                              <p className="font-bold mr-2 text-sm">
                                Alan Biju
                              </p>
                              <span className="text-gray-600 text-xs">
                                Developer
                              </span>
                            </div>
                            <span className="text-gray-600 text-xs">
                              Replying to @lorem
                            </span>
                          </div>
                          <div className="para mb-2 text-sm">
                            <p className="text-gray-700">Thank You</p>
                          </div>
                        </div>
                      </div>
                      <div className="likes flex items-center mb-4 text-xs">
                        <span className="mr-2">Like . 51 ||</span>
                        <span
                          className="comment_reply_btn text-blue-500 cursor-pointer"
                          onClick={() => handleReplyClick(3)} // Unique ID for the comment
                        >
                          Reply
                        </span>
                      </div>
                      {activeReplyId === 3 && ( // Show input only if activeReplyId matches
                        <div className="comment_input max-[900px]:text-sm reply flex items-center mb-4">
                          <img
                            className="w-8 h-8 rounded-full mr-4"
                            src={profileImage}
                            alt="profile"
                          />
                          <input
                            className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300 max-[900px]:w-[50%]"
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder="Write a reply..."
                          />
                          <button
                            id="submit_comment"
                            className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]"
                          >
                            Submit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment mb-4">
                <div className="main_comment flex flex-col overflow-hidden"></div>
              </div>
              <div className="comment mb-4">
                <div className="main_comment flex flex-col overflow-hidden">
                  {show1 && (
                    <div className="main_info flex-1 flex">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={profileImage}
                        alt="profile"
                      />
                      <div className="flex flex-col">
                        <div className="comment_info max-[900px]:text-sm bg-gray-200 p-[10px] rounded-lg">
                          <div className="comment_name flex items-center mb-2">
                            <p className="font-bold mr-2 text-sm">Alan Biju</p>
                            <span className="text-gray-600 text-xs">
                              Developer
                            </span>
                          </div>
                          <div className="para mb-2 text-sm">
                            <p className="text-gray-700">Ur right bro</p>
                          </div>
                        </div>
                        <div className="likes flex items-center mb-4 text-xs">
                          <span className="mr-2">Like . 51 ||</span>
                          <span
                            className="comment_reply_btn text-blue-500 cursor-pointer"
                            onClick={() => handleReplyClick(5)} // Unique ID for the comment
                          >
                            Reply
                          </span>
                        </div>
                        {activeReplyId === 5 && ( // Show input only if activeReplyId matches
                          <div className="comment_input max-[900px]:text-sm reply flex items-center mb-4">
                            <img
                              className="w-8 h-8 rounded-full mr-4"
                              src={profileImage}
                              alt="profile"
                            />
                            <input
                              className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300 max-[900px]:w-[50%]"
                              type="text"
                              name="comment"
                              id="comment"
                              placeholder="Write a reply..."
                            />
                            <button
                              id="submit_comment"
                              className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]"
                            >
                              Submit
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => setShow1(!show1)}
                    class="mt-2 text-blue-500 w-full m-auto "
                  >
                    {show1 ? "Show Less" : "Show More"}
                  </button>
                </div>
                <button class="loadMorebutton bg-blue-500 text-white px-2 py-1 rounded-lg">
                  Load More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeedDetail;
