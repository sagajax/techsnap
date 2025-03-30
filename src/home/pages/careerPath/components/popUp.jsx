import { AnimatedBeamMultipleOutput } from "./animatedBeam";
import { IoCloseCircleSharp } from "react-icons/io5";

function Popup({ data, onClose }) {
  return (
    <div className="fixed flex justify-end inset-0 z-[40] w-screen backdrop-blur-lg rounded overflow-hidden">
      <div className="bg-white relative w-[70%] h-screen p-0 ">
        <button className="absolute top-24 left-8 text-slate-500 h-auto w-auto z-30" onClick={onClose}>
          <IoCloseCircleSharp className="h-10 w-10" />
        </button>
        <AnimatedBeamMultipleOutput realtions={getArcherRelations(index, currentPosition)} data={data} />
      </div>
    </div>
  );
}

export default Popup;
