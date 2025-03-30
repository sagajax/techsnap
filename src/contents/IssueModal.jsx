import React, { useState } from "react";
import {
  FaChevronUp,
  FaEllipsisH,
  FaExclamation,
  FaChevronDown,
  FaEye,
  FaLink,
  FaPaperclip,
  FaPlus,
  FaRegFileAlt,
  FaShareAlt,
  FaThumbsUp,
  FaTimes,
} from "react-icons/fa";

function IssueModal({ isPopupOpen, closePopup, IssuePopupId, handleNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProject, setIsOpenProject] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
    setIsOpenProject(!isOpenProject);
  };

  const toggleDetailsProject = () => {
    setIsOpenProject(!isOpenProject);
  };
  return (
    <>
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <div className="fixed left-[50%] top-[50%] z-50 grid h-[80vh] w-full max-w-screen-xl translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ">
            <div className="w-full flex justify-end px-8 overflow-auto">
              <div className="flex space-x-4 items-center text-gray-700">
                <div className="flex items-center space-x-1">
                  <FaEye className="text-blue-500" />
                  <span className="text-sm font-medium">1</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaThumbsUp className="text-green-500" />
                  <span className="text-sm font-medium">Like</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaShareAlt className="text-blue-500" />
                  <span className="text-sm font-medium">Share</span>
                </div>
                <div
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={closePopup}
                >
                  <FaTimes className="text-gray-600" />
                </div>
              </div>
            </div>
            <div className="w-full flex overflow-auto mb-16">
              <div className=" w-4/5 ml-2 overflow-hidden">
                <div className="p-4">
                  <div className="uppercase tracking-wide text-sm text-gray-600 font-semibold mb-2 absolute top-10 ">
                    {IssuePopupId}
                  </div>
                  <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
                    Nothing
                  </h1>
                  <div className="mt-4 flex space-x-1">
                    <button className="bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center">
                      <FaPaperclip className="mr-2" /> Attach
                    </button>
                    <button className="mr-2 bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center">
                      <FaPlus className="mr-2" /> Add a child issue
                    </button>
                    <button className="mr-2 bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center">
                      <FaLink className="mr-2" /> Link issue
                    </button>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-gray-600">Description</h2>
                    <textarea
                      className="w-full h-20 p-2 border rounded mt-2"
                      placeholder="Add a description..."
                    />
                  </div>
                  <div className="mt-4">
                    <div className="w-full flex justify-between">
                      <h2 className="flex text-gray-800">
                        Confluence content{" "}
                        <FaExclamation className="text-gray-500 w-1 mt-1.5 ml-1" />
                      </h2>
                      <FaEllipsisH />
                    </div>
                    <div className="flex items-center justify-between shadow-md p-2 border border-gray-100 mt-2">
                      <div className="text-gray-600 py-2 px-4 flex items-center">
                        <FaRegFileAlt className="mr-2 text-blue-600" /> Project
                        plan
                      </div>
                      <button className="ml-4 text-gray-600 font-semibold text-sm bg-indigo-200">
                        TRY TEMPLATE
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-gray-600">Activity</h2>
                    <div className="mt-2 ">
                      <div className="flex space-x-2">
                        <span>Show:</span>
                        <button className="mr-4 text-blue-600 bg-gray-300 rounded-md px-2">
                          All
                        </button>
                        <button className="text-blue-600 bg-gray-300 rounded-md px-2">
                          Comments
                        </button>
                        <button className="ml-4 text-blue-600 bg-gray-300 rounded-md px-2">
                          History
                        </button>
                      </div>
                      <div className="flex mt-4 space-x-4">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white mt-2">
                          V
                        </span>
                        <textarea
                          className="w-full h-12 p-2 border rounded"
                          placeholder="Add a comment..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow overflow-auto">
                <div className="w-full p-4 overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded">
                      To Do
                    </button>
                    <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded">
                      Actions
                    </button>
                  </div>

                  <div className="p-4 bg-gray-100 rounded-md">
                    <h2 className="text-sm font-bold mb-2">Pinned fields</h2>
                    <p className="text-gray-600 text-sm">
                      Click on the <span className="text-gray-800">🔧</span>{" "}
                      next to a field label to start pinning.
                    </p>
                  </div>

                  <div className={`mt-2 rounded-md  p-2 border transition-all`}>
                    <div
                      className="flex justify-between sticky top-0 z-10 border-b"
                      onClick={toggleDetails}
                    >
                      <h3 className="text-gray-700 text-lg font-semibold mb-2">
                        Details
                      </h3>
                      <button onClick={toggleDetails} className="text-gray-500">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>
                    {isOpen && (
                      <div className="mt-2">
                        <div className="mb-4">
                          <p className="text-gray-500 text-sm">Assignee</p>
                          <div className="flex items-center mt-2">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              <span role="img" aria-label="person">
                                👤
                              </span>
                            </div>
                            <p className="ml-2 text-gray-700">Unassigned</p>
                          </div>
                          <a
                            href="#"
                            className="text-blue-600 text-sm mt-2 block"
                          >
                            Assign to me
                          </a>
                        </div>

                        <div className="mb-4 flex justify-between">
                          <p className="text-gray-500 text-sm">Labels</p>
                          <p className="text-gray-700 ">None</p>
                        </div>

                        <div className="mb-4 flex justify-between">
                          <p className="text-gray-500 text-sm">Parent</p>
                          <p className="text-gray-700 ">None</p>
                        </div>

                        <div className="mb-4 flex justify-between">
                          <p className="text-gray-500 text-sm">Team</p>
                          <p className="text-gray-700 ">None</p>
                        </div>

                        <div className="mb-4 flex justify-between">
                          <p className="text-gray-500 text-sm">Start date</p>
                          <p className="text-gray-700">None</p>
                        </div>

                        <div className="mb-4 flex justify-between">
                          <p className="text-gray-500 text-sm">Due date</p>
                          <p className="text-gray-700">None</p>
                        </div>

                        <div className="mb-4">
                          <p className="text-gray-500 text-sm mb-2">Reporter</p>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                              S
                            </div>
                            <p className="ml-2 text-gray-700">saketh</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 rounded-md p-2 border transition-all">
                    <div
                      className="flex justify-between items-center"
                      onClick={toggleDetailsProject}
                    >
                      <h3 className="text-gray-700 text-lg font-semibold mb-2">
                        Project overview
                      </h3>
                      <span>🚀</span>
                      <button
                        onClick={toggleDetailsProject}
                        className="text-gray-500"
                      >
                        {isOpenProject ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>
                    {isOpenProject && (
                      <div className="text-lg">
                        <span>Nothing</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4 text-gray-500 text-sm px-5">
                  <p>Created 19 hours ago</p>
                  <p>Updated 19 hours ago</p>
                  <button className="mt-2 text-blue-600">⚙ Configure</button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
                Save
              </button>
            </div>
            <div className="absolute bottom-4 left-6">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                onClick={handleNavigate}
              >
                View issue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IssueModal;
