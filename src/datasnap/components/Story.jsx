import React, { useState, useEffect, useCallback } from "react";
import StoryOverlay from "./Effects/StoryOverlay";
import image1 from "../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg";
import image2 from "../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import image3 from "../assets/rsc/joshua-earle-ICE__bo2Vws-unsplash.jpg";

const Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [viewedStories, setViewedStories] = useState(new Set());

  const users = [
    {
      username: "Vignesh",
      photo: image1,
      stories: [
        { imageUrl: image1, duration: 5000 },
        { imageUrl: image2, duration: 5000 },
      ],
    },
    {
      username: "Saketh",
      photo: image2,
      stories: [{ imageUrl: image3, duration: 5000 }],
    },
  ];

  useEffect(() => {
    if (!isOpen) return;

    const story = users[currentUserIndex].stories[currentStoryIndex];
    const interval = 100;
    const steps = story.duration / interval;
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += 100 / steps;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        setViewedStories((prev) => {
          const updatedSet = new Set(prev);
          updatedSet.add(`${currentUserIndex}-${currentStoryIndex}`);
          return updatedSet;
        });

        if (currentStoryIndex < users[currentUserIndex].stories.length - 1) {
          setCurrentStoryIndex((prev) => prev + 1);
          setProgress(0);
        } else if (currentUserIndex < users.length - 1) {
          setCurrentUserIndex((prev) => prev + 1);
          setCurrentStoryIndex(0);
          setProgress(0);
        } else {
          setIsOpen(false);
          setCurrentUserIndex(0);
          setCurrentStoryIndex(0);
        }
      }
    }, interval);

    return () => clearInterval(timer);
  }, [currentStoryIndex, currentUserIndex, isOpen]);

  const handleClick = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const clickedPosition = x / rect.width;

      if (clickedPosition < 0.3 && currentStoryIndex > 0) {
        setCurrentStoryIndex((prev) => prev - 1);
        setProgress(0);
      } else if (clickedPosition > 0.7) {
        if (currentStoryIndex < users[currentUserIndex].stories.length - 1) {
          setCurrentStoryIndex((prev) => prev + 1);
          setProgress(0);
        } else if (currentUserIndex < users.length - 1) {
          setCurrentUserIndex((prev) => prev + 1);
          setCurrentStoryIndex(0);
          setProgress(0);
        }
      }
    },
    [currentStoryIndex, currentUserIndex]
  );

  return (
    <div className="flex overflow-x-auto whitespace-nowrap px-4 pt-4 ds-scrollbar">
      <div className="flex gap-4 mb-4">
        {users.map((user, userIndex) => {
          const isViewed = user.stories.every((_, storyIndex) =>
            viewedStories.has(`${userIndex}-${storyIndex}`)
          );

          return (
            <div key={userIndex} className="flex flex-col items-center">
              <button
                onClick={() => {
                  setIsOpen(true);
                  setCurrentUserIndex(userIndex);
                  setCurrentStoryIndex(0);
                  setProgress(0);
                }}
                className={`w-16 h-16 rounded-full border-2 p-1 ${
                  isViewed ? "border-gray-500" : "border-blue-500"
                }`}
              >
                <img
                  src={user.photo}
                  alt={`Story by ${user.username}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              <span className="text-sm mt-1 text-center">{user.username}</span>
            </div>
          );
        })}
      </div>

      <StoryOverlay
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        stories={users[currentUserIndex].stories}
        handleClick={handleClick}
        currentStoryIndex={currentStoryIndex}
        progress={progress}
        currentUserIndex={currentUserIndex}
        users={users}
      />
    </div>
  );
};

export default Story;
