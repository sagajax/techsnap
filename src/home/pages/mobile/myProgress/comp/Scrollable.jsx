import { useRef } from "react";
import PropTypes from "prop-types";
import { GrNext, GrPrevious } from "react-icons/gr";

const Scrollable = ({ components }) => {
  const containerRef = useRef(null);

  const scrollByCardWidth = (direction) => {
    if (containerRef.current) {
      const card = containerRef.current.firstChild; // Get the first card element
      const cardWidth = card ? card.offsetWidth + 16 : 0; // Include gap between cards (e.g., 16px)
      containerRef.current.scrollBy({
        left: direction * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => scrollByCardWidth(-1); // Scroll to the left
  const scrollRight = () => scrollByCardWidth(1); // Scroll to the right

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 -left-3 transform -translate-y-1/2 z-10 rounded-full backdrop-blur-sm  bg-white bg-opacity-75  text-black dark:text-gray-200 p-2 p-auto "
        onClick={scrollLeft}
      >
        <GrPrevious size={25} />
      </button>
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 px-3  scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          msOverflowStyle: "none", // Hide scrollbar for IE/Edge
        }}
      >
        {components.map((Component, index) => (
          <div
            key={index}
            className="shrink-0"
            style={{ minWidth: "280px", maxWidth: "280px" }} // Set consistent card width
          >
            {Component}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 rounded-full backdrop-blur-sm bg-white bg-opacity-75 text-black dark:text-gray-200 p-2 "
        onClick={scrollRight}
      >
        <GrNext size={25} />
      </button>
    </div>
  );
};

Scrollable.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Scrollable;
