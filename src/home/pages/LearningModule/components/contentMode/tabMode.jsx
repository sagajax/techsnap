import React, { useEffect, useState, useRef } from "react";
import { AiOutlineExpand } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import ChatInterface from "../chatBot";

export default function RndWithDraggableTabs({ children }) {
  const totalWidth = window.innerWidth;
  const [leftWidth, setLeftWidth] = useState(totalWidth / 2);
  const [isResizing, setIsResizing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(null); // Track expansion state
  const dividerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedTab, setDraggedTab] = useState(null);


  const [tabs, setTabs] = useState({
    left: [],
    right: [],
  });

  useEffect(() => {
    const titles = ["Question", "Submissions", "Hint", "Code", "Chatbot"];
    const updatedTabs = { left: [], right: [] };
    const childrenCount = React.Children.count(children);

    React.Children.forEach(children, (child, index) => {
      const tab = {
        id: index + 1,
        title: titles[index],
        content: child,
      };
      if (index === childrenCount - 1) {
        updatedTabs.right.push(tab);
      } 
      else {
        updatedTabs.left.push(tab);
      }
    });
    const tab = {
      id: childrenCount + 1,
      title: "Chatbot",
      content: <ChatInterface />,
    };
    updatedTabs.right.push(tab);
    setTabs(updatedTabs);
  }, [children]);

  
  useEffect(() => {
    if (isExpanded !== null) return; 
    
    if (tabs.left.length === 0 && !isDragging) {
      setLeftWidth(0);
    } else if (tabs.right.length === 0 && !isDragging) {
      setLeftWidth(totalWidth);
    } else if (!isResizing && leftWidth === 0 || leftWidth === totalWidth) {
      setLeftWidth(totalWidth / 2);
    }
  }, [tabs, totalWidth, leftWidth, isDragging, isExpanded, isResizing]);

  const [activeTab, setActiveTab] = useState({ left: 0, right: 0 });

 
  useEffect(() => {
    const newActiveTab = { ...activeTab };
    if (activeTab.left >= tabs.left.length) {
      newActiveTab.left = Math.max(0, tabs.left.length - 1);
    }
    if (activeTab.right >= tabs.right.length) {
      newActiveTab.right = Math.max(0, tabs.right.length - 1);
    }
    setActiveTab(newActiveTab);
  }, [tabs]);

  const handleDragStart = (e, tab, side) => {
    setIsDragging(true);
    setDraggedTab({ tab, sourceSide: side });
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    setDraggedTab(null);
    e.target.style.opacity = "1";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetTab, targetSide) => {
    e.preventDefault();
    if (!draggedTab) return;

    const { tab: sourceTab, sourceSide } = draggedTab;
    const newTabs = { ...tabs };

    if (sourceSide === targetSide) {
      const sourceIndex = newTabs[sourceSide].findIndex(
        (t) => t.id === sourceTab.id
      );
      const targetIndex = targetTab
        ? newTabs[targetSide].findIndex((t) => t.id === targetTab.id)
        : newTabs[targetSide].length;

      newTabs[sourceSide] = [...newTabs[sourceSide]];
      newTabs[sourceSide].splice(sourceIndex, 1);
      newTabs[sourceSide].splice(targetIndex, 0, sourceTab);
    } else {
      const sourceIndex = newTabs[sourceSide].findIndex(
        (t) => t.id === sourceTab.id
      );
      newTabs[sourceSide] = newTabs[sourceSide].filter(
        (t) => t.id !== sourceTab.id
      );

      if (targetTab) {
        const targetIndex = newTabs[targetSide].findIndex(
          (t) => t.id === targetTab.id
        );
        newTabs[targetSide].splice(targetIndex, 0, sourceTab);
      } else {
        newTabs[targetSide].push(sourceTab);
      }
    }

    setTabs(newTabs);
  };

 

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing) {
        const newWidth = Math.max(400, Math.min(e.clientX, totalWidth));
        setLeftWidth(newWidth);
      }
    };
    
    const stopResizing = () => {
      setIsResizing(false);
      document.body.style.userSelect = ""; 
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopResizing);
    document.body.style.userSelect = "none";
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopResizing);
      document.body.style.userSelect = ""; 
    };
    
  }, [isResizing, totalWidth]);
  const handleClick = (side) => {
    if (side === "left") {
      if (leftWidth === totalWidth) {
        setLeftWidth(totalWidth / 2);
        setIsExpanded(null);
      } else {
        setLeftWidth(totalWidth);
        setIsExpanded("left");
      }
    } else {
      if (leftWidth === 0) {
        setLeftWidth(totalWidth / 2);
        setIsExpanded(null);
      } else {
        setLeftWidth(0);
        setIsExpanded("right");
      }
    }
  };
  const startResizing = () => {
    setIsResizing(true);
    setIsExpanded(null);
  };

  const renderPanel = (side) => {
    if (tabs[side].length > 0) {
      return (
        <div
          className="h-full flex flex-col"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, null, side)}
        >
          <div className="flex justify-between items-center bg-[#f6f7f9]">
            <div className="flex gap-1 min-h-12">
              {tabs[side].map((tab, index) => (
                <div
                  key={tab.id}
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, tab, side)}
                  onDragEnd={handleDragEnd}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, tab, side)}
                  onClick={() =>
                    setActiveTab((prev) => ({ ...prev, [side]: index }))
                  }
                  className={`p-4 px-6 cursor-move font-semibold hover:brightness-110 ${
                    activeTab[side] === index
                      ? "text-black"
                      : "text-gray-400 opacity-80"
                  }`}
                >
                  {tab.title}
                </div>
              ))}
            </div>
            <button 
              className="p-2 hover:bg-gray-200 rounded-md mr-4"
              onClick={() => handleClick(side)}
            >
              <AiOutlineExpand size={16} className="text-gray-500" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto scrollbarhide">
            {tabs[side][activeTab[side]]?.content}
          </div>
        </div>
      );
    }

    if (isDragging && draggedTab?.sourceSide !== side) {
      return (
        <div
          className="h-full flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, null, side)}
        >
          <div className="text-gray-500 font-medium">Drop tab here</div>
        </div>
      );
    }

    return null;
  };

  const leftVisible =
    tabs.left.length > 0 || (isDragging && draggedTab?.sourceSide !== "left");
  const rightVisible =
    tabs.right.length > 0 || (isDragging && draggedTab?.sourceSide !== "right");
  const shouldShowDivider =
    (tabs.left.length > 0 && tabs.right.length > 0) ||
    (isDragging &&
      ((tabs.left.length > 0 && draggedTab?.sourceSide !== "right") ||
        (tabs.right.length > 0 && draggedTab?.sourceSide !== "left")));

  const getLeftWidth = () => {
    if (!leftVisible) return 0;
    if (!rightVisible) return totalWidth;
    return leftWidth;
  };

  return (
    <div className="relative h-full w-full flex">
      {leftVisible && (
        <div
          className="bg-white border-r border-t border-gray-300 shadow-md rounded-tr-2xl overflow-hidden "
          style={{ width: getLeftWidth() }}
        >
          {renderPanel("left")}
        </div>
      )}

      {shouldShowDivider && (
        <div
          ref={dividerRef}
          className="w-2 flex items-center cursor-col-resize hover:bg-blue-200"
          onMouseDown={startResizing}
        >
          <FaEllipsisVertical size={20} className="text-black" />
        </div>
      )}

      {rightVisible && (
        <div
          className="flex-1 bg-gray-100 border-l border-t border-gray-300 shadow-md rounded-tl-2xl overflow-hidden "
          style={{ width: !leftVisible ? "100%" : undefined }}
        >
          {renderPanel("right")}
        </div>
      )}
    </div>
  );
}
