import { useState } from "react";
import { File, Folder, Tree } from "../../../../components/ui/file-tree";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";

export function FileTree({ data }) {
  const [units, setUnits] = useState([...data]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceUnitIndex = parseInt(source.droppableId.split("-")[1]);
    const destinationUnitIndex = parseInt(destination.droppableId.split("-")[1]);

    const updatedUnits = [...units];

    if (sourceUnitIndex === destinationUnitIndex) {
      
      const lessons = Array.from(updatedUnits[sourceUnitIndex].lessons);
      const [moved] = lessons.splice(source.index, 1);
      lessons.splice(destination.index, 0, moved);
      updatedUnits[sourceUnitIndex].lessons = lessons;
    }
    setUnits(updatedUnits);
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree className="overflow-hidden rounded-md bg-background p-2" initialExpandedItems={["1", "unit-0"]} elements={units}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Folder element="src" value="1">
            {units.map((unit, unitIndex) => (
              <Folder key={unitIndex} element={unit.unitName} value={`unit-${unitIndex}`}>
                <Droppable droppableId={`unit-${unitIndex}`}>
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="bg-white  p-2  w-full ">
                      {unit.lessons.map((lesson, lessonIndex) => (
                        <Draggable key={`${unitIndex}-${lessonIndex}`} draggableId={`lesson-${unitIndex}-${lessonIndex}`} index={lessonIndex}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`p-4 mb-3 ${snapshot.isDragging ? "bg-gray-300 rounded-lg shadow-lg" : "bg-gray-100 rounded-lg shadow-md"}`}
                            >
                              <File key={lessonIndex} value={`lesson-${lessonIndex}`}>
                                {lesson}
                              </File>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Folder>
            ))}
          </Folder>
        </DragDropContext>
      </Tree>
    </div>
  );
}
