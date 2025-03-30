import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes, FaCheck, FaPaperclip } from "react-icons/fa";
import image1 from "../../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg";
import image2 from "../../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import image3 from "../../assets/rsc/joshua-earle-ICE__bo2Vws-unsplash.jpg";
import image4 from "../../assets/rsc/arnold-francisca-nPhl2x4fk2s-unsplash.jpg";

const ProfileImage = memo(({ src, name, isPinned = false }) => (
  <div className={`relative inline-block ${isPinned ? 'border-2 border-blue-500 rounded-full' : ''}`}>
    <img
      src={src}
      alt={name}
      className="w-16 h-16 object-cover rounded-full shadow-md"
      loading="lazy"
    />
    {isPinned && (
      <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
        <FaPaperclip className="w-3 h-3" />
      </div>
    )}
  </div>
));

const users = [
  { id: 1, photo: image1, name: "Soniya Pise", title: "Senior Engineer at Zeitview", isPinned: true },
  { id: 2, photo: image2, name: "Devansh Dubey", title: "Software Engineer @Zeitview", isPinned: true },
  { id: 3, photo: image3, name: "Charan Guggulla", title: "M.Tech CS @ IIT Bombay | ISRO-2019",isPinned: true },
  { id: 4, photo: image4, name: "Anusheel", title: "Software Engineer II @Walmart Global",isPinned: true },
  { id: 5, photo: image2, name: "Paduni G", title: "HR Data Analytics | Data Administration",isPinned: true },
  { id: 6, photo: image3, name: "Tripti Kariwal", title: "10k+ Followers | Passionate HR Professional" },
  { id: 7, photo: image1, name: "Akshay P", title: "Frontend Developer | UI/UX | Python" },
  { id: 8, photo: image4, name: "Dhanush Chowdary", title: "--" },
  { id: 9, photo: image3, name: "Dhanush Chowdary Nathani", title: "Student at VIT" },
  { id: 10, photo: image1, name: "Shanmukha Reddy Vasa", title: "--" },
  { id: 11, photo: image4, name: "Rutvik", title: "--" },
];

const UserList = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [checkedUsers, setCheckedUsers] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckboxChange = (id) => {
    setCheckedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.title.toLowerCase().includes(search.toLowerCase())
  );

  const pinnedUsers = users.filter(user => user.isPinned);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-50 h-[90vh] rounded-t-3xl bg-white dark:bg-black shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-center pt-4 pb-2">
                <div className="w-12 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
              </div>

              <div className="sticky top-0 bg-white dark:bg-black z-10 px-4 pb-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-semibold">Send as Message</h1>
                  <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>

                <div className="relative mt-4">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users by name or title"
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-transparent border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={search}
                    onChange={handleSearch}
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {pinnedUsers.length > 0 && (
                  <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900/50">
                    <h2 className="text-lg font-semibold mb-2">Pinned Chats</h2>
                    <div className="flex space-x-4 overflow-x-auto pb-2">
                      {pinnedUsers.map((user) => (
                        <div key={user.id} className="flex flex-col items-center space-y-2 flex-shrink-0">
                          <ProfileImage src={user.photo} isPinned={true} />
                          <span className="text-xs truncate max-w-16">{user.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="px-4">
                  {filteredUsers.map((user) => (
                    <motion.div
                      key={user.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between py-3 space-x-4 group cursor-pointer"
                      onClick={() => handleCheckboxChange(user.id)}
                    >
                      <div className="flex items-center space-x-4 flex-grow">
                        <img
                          src={user.photo}
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-grow min-w-0">
                          <p className="font-medium truncate">{user.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{user.title}</p>
                        </div>
                      </div>
                      <motion.div
                        initial={false}
                        animate={{ scale: checkedUsers.includes(user.id) ? 1 : 0.8 }}
                        className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                          checkedUsers.includes(user.id)
                            ? "bg-blue-500 border-blue-500"
                            : "border-gray-300 dark:border-gray-600"
                        }`}
                      >
                        {checkedUsers.includes(user.id) && (
                          <FaCheck className="w-4 h-4 text-white" />
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {checkedUsers.length > 0 && (
                  <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="sticky bottom-0 p-4 bg-white dark:bg-black shadow-lg"
                  >
                    <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                      Send to {checkedUsers.length} User{checkedUsers.length !== 1 ? "s" : ""}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default UserList;