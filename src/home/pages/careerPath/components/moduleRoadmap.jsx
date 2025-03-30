import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BsFolderSymlink } from "react-icons/bs";

const Accordion = ({ data, expanded, setExpanded, index }) => {
  const isOpen = index === expanded;

  return (
    <>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : index)}
        className="cursor-pointer  text-black  px-4 py-2"
      >
        <div className="text-sm font-medium"> Module {index}</div>
        <div className="flex gap-2 items-center text-xl font-semibold">{isOpen ? <IoIosArrowDown />:<IoIosArrowForward />}
        {data.unitName}</div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial={{ opacity: 0, scaleY: 0.95 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="overflow-hidden px-10 flex flex-col gap-2"
          >
            {data.lessons?.map((lesson, idx) => (
              <motion.div key={idx} layout className="flex gap-2 items-center text-gray-800 bg-gray-100 p-2 rounded-lg ">
                <BsFolderSymlink />{lesson}
              </motion.div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const Module = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="">
      {data.map((unit, index) => (
        <Accordion
          key={index}
          data={unit}
          expanded={expanded}
          setExpanded={setExpanded}
          index={index}
        />
      ))}
    </div>
  );
};

export default Module;
