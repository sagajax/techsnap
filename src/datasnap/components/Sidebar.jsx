import React from "react";
import {
  FaHome,
  FaCompass,
  FaPenAlt,
  FaBookmark,
  FaEllipsisH,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaTimes,
} from "react-icons/fa";
import trendingimg from "../assets/rsc/icons8-trending-topic-25.png";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const getLinkClass = (path) =>
    `flex items-center mb-2 p-2 rounded-lg transition-all ${
      location.pathname === path ? "bg-gray-300" : "hover:bg-gray-400"
    }`;

  return (
    <div className="">
      <div
        className={`hidden lg:flex lg:flex-col lg:justify-between sticky top-0 h-full bg-gray-50 text-gray-700 dark:bg-black dark:text-gray-100 px-6 py-2 shadow-lg border-r dark:border-gray-600`}
      >
        <div>
          <div className={getLinkClass("/home")}>
            <FaHome className="w-4 h-4 mr-4 text-blue-600" />
            <Link to="home" className="text-md font-medium">
              My Feed
            </Link>
          </div>
          <div className={getLinkClass("/explore")}>
            <FaCompass className="w-4 h-4 mr-4 text-blue-600" />
            <Link to="explore" className="text-md font-medium">
              Explore
            </Link>
          </div>
          <div className={getLinkClass("/drafts")}>
            <FaPenAlt className="w-4 h-4 mr-4 text-blue-600" />
            <Link to="drafts" className="text-md font-medium">
              Drafts
            </Link>
          </div>
          <div className={getLinkClass("/bookmarks")}>
            <FaBookmark className="w-4 h-4 mr-4 text-blue-600" />
            <Link to="bookmarks" className="text-md font-medium">
              Bookmarks
            </Link>
          </div>
          <div className={getLinkClass("/published")}>
            <FaBookmark className="w-4 h-4 mr-4 text-blue-600" />
            <Link to="published" className="text-md font-medium">
              Published
            </Link>
          </div>
          <div className={getLinkClass("/more")}>
            <FaEllipsisH className="w-4 h-4 mr-4 text-blue-600" />
            <Link to="details" className="text-md font-medium">
              More
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xl font-semibold">Trending Tags</p>
            <img src={trendingimg} alt="Trending" className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <p className="flex justify-between p-2 hover:bg-gray-700 rounded-lg transition-all">
              <a href="" className="text-md">
                Javascript
              </a>
              <span className="text-sm text-gray-400">+205</span>
            </p>
            <p className="flex justify-between p-2 hover:bg-gray-400 rounded-lg transition-all">
              <a href="" className="text-md">
                React
              </a>
              <span className="text-sm text-gray-400">+93</span>
            </p>
            <p className="flex justify-between p-2 hover:bg-gray-400 rounded-lg transition-all">
              <a href="" className="text-md">
                CSS
              </a>
              <span className="text-sm text-gray-400">+105</span>
            </p>
            <p className="flex justify-between p-2 hover:bg-gray-400 rounded-lg transition-all">
              <a href="" className="text-md">
                Python
              </a>
              <span className="text-sm text-gray-400">+66</span>
            </p>
            <p className="flex justify-between p-2 hover:bg-gray-400 rounded-lg transition-all">
              <a href="" className="text-md">
                Vue
              </a>
              <span className="text-sm text-gray-400">+40</span>
            </p>
            <p className="p-2 hover:bg-gray-400 rounded-lg transition-all">
              <a href="" className="text-md">
                Show more
              </a>
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-sm">&copy; 2022 Datasnap</p>
          <div className="flex space-x-4 mt-2">
            <a href="" className="hover:text-blue-400 transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="" className="hover:text-blue-400 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="" className="hover:text-blue-400 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="" className="hover:text-blue-400 transition-colors">
              <FaDiscord className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
