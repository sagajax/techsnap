import { useState } from "react";
import GridLayout from "react-grid-layout";

const ResizableComponent = ({ children }) => {
  const [isResizing, setIsResizing] = useState(false);
  const totalWidth = window.innerWidth - 30;
  const [layout, setLayout] = useState([
    { i: "left", x: 0, y: 0, w: 6, h: 10, minW: 2, maxW: 10 },
    { i: "right", x: 6, y: 0, w: 6, h: 10, minW: 2, maxW: 10 },
  ]);

  const handleLayoutChange = (newLayout) => {
    setIsResizing(false);
  
    const leftPanelNew = newLayout.find((item) => item.i === "left");
    const rightPanelNew = newLayout.find((item) => item.i === "right");

    if (leftPanelNew && rightPanelNew) {
      const leftPanelOld = layout.find((item) => item.i === "left");
      const rightPanelOld = layout.find((item) => item.i === "right");

      
      let updatedLayout;
      const totalCols = 12;

      if (leftPanelNew.w !== leftPanelOld.w) {
       
        const newRightWidth = totalCols - leftPanelNew.w;
        updatedLayout = newLayout.map((item) => {
          if (item.i === "right") {
            return { ...item, x: leftPanelNew.w, w: newRightWidth };
          }
          return item;
        });
      } else if (rightPanelNew.w !== rightPanelOld.w) {
       
        const newLeftWidth = totalCols - rightPanelNew.w;
        updatedLayout = newLayout.map((item) => {
          if (item.i === "left") {
            return { ...item, w: newLeftWidth };
          }
          return item;
        });
      }

      
      if (updatedLayout) {
        setLayout(updatedLayout);
      }
    }
  };

  return (
    <div className="relative h-[89vh] w-full">
      {isResizing && (
        <div
          className="absolute top-0 left-0 w-full h-full z-50"
          style={{ cursor: "ew-resize", background: "transparent" }}
        />
      )}
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={window.innerHeight / 14}
        width={totalWidth}
        onLayoutChange={handleLayoutChange}
        onResizeStart={() => setIsResizing(true)}
        isResizable
        isDraggable
        draggableHandle=".drag-handle"
        resizeHandles={["w", "e"]}
      >
        <div
          key="left"
          className="bg-white border-r border-gray-300 shadow-md overflow-y-scroll scrollbarhide"
        >
          <div className="drag-handle bg-gray-200 p-2 cursor-move">
            <h1 className="text-lg font-bold">Left Panel</h1>
          </div>
          {children[0]}
        </div>
        <div key="right" className="bg-gray-100 shadow-md overflow-hidden">
          <div className="drag-handle bg-gray-200 p-2 cursor-move">
            <h1 className="text-lg font-bold">Right Panel</h1>
          </div>
          {children[1]}
        </div>
        {children[2]}
      </GridLayout>
    </div>
  );
};

export default ResizableComponent;