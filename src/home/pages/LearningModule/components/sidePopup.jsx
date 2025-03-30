import { IoClose, IoCloseCircleSharp } from "react-icons/io5";
import { useSettingStore } from "../utils/store";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsStars } from "react-icons/bs";

const SidePopup = ({
  isOpen,
  closeSettingBar,
  children,
  className,
  isFooter = true,
}) => {
  const { isPopupRight } = useSettingStore();
  return (
    <div
      className={`fixed top-0 ${
        isPopupRight ? "right-0" : "left-0"
      } h-full bg-white py-12 w-[35vw] z-50 px-10 border  transform transition-transform duration-300 ease-in-out ${
        isOpen
          ? "translate-x-0"
          : isPopupRight
          ? "translate-x-full"
          : "-translate-x-full"
      } ${className}`}
    >
      <button
        onClick={closeSettingBar}
        className={`text-gray-500 border px-3 py-2 rounded-lg items-center flex text-sm absolute top-4 ${
          isPopupRight ? "left-4" : "right-4"
        }`}
      >
        <IoClose size={20} /> Close
      </button>

      <div className={`overflow-y-scroll scrollbarhide h-full ${isFooter? "border-b border-gray-500" : ""} `}>
        {children}
      </div>
      {isFooter && 
      <div className="mt-2 flex justify-center gap-4 ">
        <button className="bg-violet-500 flex gap-1 text-white p-1 px-3 rounded-lg">
          {" "}
          <MdOutlineSupportAgent size={23} />
          Get Support
        </button>{" "}
        <button className=" text-black p-1 items-center flex gap-1 px-3 rounded-lg border border-black bg-yellow-300">
          <BsStars size={18} />
          Ai History
        </button>
      </div>}
    </div>
  );
};

export default SidePopup;
