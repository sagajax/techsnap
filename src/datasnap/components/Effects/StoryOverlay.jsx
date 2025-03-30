import { X } from "lucide-react";
import React from "react";

function StoryOverlay({
  isOpen,
  setIsOpen,
  stories,
  handleClick,
  currentStoryIndex,
  progress,
  currentUserIndex,
  users,
}) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[999]">
          <div className="w-full h-full flex flex-col">
            <div className="flex gap-1 px-4 pt-4">
              {users[currentUserIndex].stories.map((_, index) => (
                <div
                  key={index}
                  className="h-1 bg-gray-600 flex-1 rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-white transition-all duration-100 ease-linear"
                    style={{
                      width: `${
                        index === currentStoryIndex
                          ? progress
                          : index < currentStoryIndex
                          ? 100
                          : 0
                      }%`,
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between px-4 pt-4">
              <div className="flex items-center space-x-2">
                <img
                  src={users[currentUserIndex].photo}
                  alt={users[currentUserIndex].username}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-white text-lg">
                  {users[currentUserIndex].username}
                </span>
                <span className="text-gray-500 text-sm">18h</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white z-10"
              >
                <X size={24} />
              </button>
            </div>

            <div
              onClick={handleClick}
              className="flex-1 flex items-center justify-center cursor-pointer"
            >
              <img
                src={
                  users[currentUserIndex].stories[currentStoryIndex].imageUrl
                }
                alt={`Story ${currentStoryIndex + 1}`}
                className="max-h-full max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StoryOverlay;
