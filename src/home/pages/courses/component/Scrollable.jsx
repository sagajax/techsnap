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
    <div className="relative flex justify-center items-center gap-1">
      <button
        className=" w-8 h-8   z-30 text-black dark:text-gray-200 p-2 rounded-full bg-white dark:bg-gray-800 backdrop-blur-sm bg-opacity-70 flex justify-center items-center "
        onClick={scrollLeft}
      >
        <GrPrevious size={20} />
      </button>
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide"
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
            style={{ minWidth: "300px", maxWidth: "300px" }} // Set consistent card width
          >
            {Component}
          </div>
        ))}
      </div>
      <button
        className=" w-8 h-8   z-30 text-black dark:text-gray-200 p-2 rounded-full bg-white dark:bg-gray-800 backdrop-blur-sm bg-opacity-70 flex justify-center items-center "
        onClick={scrollRight}
      >
        <GrNext size={20} />
      </button>
    </div>
  );
};

Scrollable.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Scrollable;
