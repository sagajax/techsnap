import { DragDropContext } from 'react-beautiful-dnd';
import { FaPlus } from 'react-icons/fa';
import { Column,  } from './components/column';
import { useState } from 'react';
import "./../SnappyAI/sideBar.css"

export const PRIORITY = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
};

export const INITIAL_COLUMNS = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { title: 'Mini hacks', label: 'PRACTICE', id: 'TS-75', assignee: 'AS', priority: PRIORITY.HIGH },
      { title: 'XP redeem page', label: 'DASHBOARD', id: 'TS-95', assignee: 'AS', priority: PRIORITY.MEDIUM },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      { title: 'Feature implementation', label: 'DEV', id: 'TS-80', assignee: 'AS', priority: PRIORITY.HIGH },
    ],
  },
  { id: 'review', title: 'Under Review', tasks: [] },
  
];


const JiraBoard = ({compact=false}) => {
  const [columns, setColumns] = useState(INITIAL_COLUMNS);
  const [issueOpen, setIssueOpen] = useState(false);
  const [issuePopupId, setIssuePopupId] = useState('');

  const handleIssueClick = (id) => {
    setIssueOpen(true);
    setIssuePopupId(id);
  };

  const addColumn = () => {
    const newColumn = {
      id: `column-${columns.length}`,
      title: 'New Column',
      tasks: []
    };
    setColumns([...columns, newColumn]);
  };

  const addTask = (columnIndex) => {
    const newTask = {
      title: 'New Task',
      label: 'NEW',
      id: `TS-${Math.floor(Math.random() * 1000)}`,
      assignee: 'AS',
      priority: PRIORITY.MEDIUM,
    };
    
    setColumns(prevColumns => {
      const updatedColumns = [...prevColumns];
      updatedColumns[columnIndex].tasks.push(newTask);
      return updatedColumns;
    });
  };

  const updateColumnTitle = (index, title) => {
    setColumns(prevColumns => {
      const updatedColumns = [...prevColumns];
      updatedColumns[index].title = title;
      return updatedColumns;
    });
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    setColumns(prevColumns => {
      const updatedColumns = [...prevColumns];
      const sourceCol = {...updatedColumns[source.droppableId]};
      const destCol = {...updatedColumns[destination.droppableId]};
      
      const [movedTask] = sourceCol.tasks.splice(source.index, 1);
      destCol.tasks.splice(destination.index, 0, movedTask);
      
      updatedColumns[source.droppableId] = sourceCol;
      updatedColumns[destination.droppableId] = destCol;
      
      return updatedColumns;
    });
  };

  return (
    <div className={` w-full relative  ${compact ? 'my-auto' : 'mb-auto'} `}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="h-full w-full custom-scrollbar overflow-x-auto">
          <div className={`flex  ${compact ? 'p-2 justify-center' : 'p-4 gap-2'} min-w-max`}>
            {columns.slice(0, compact ? 2 : columns.length).map((column, columnIndex) => 
              compact ? (
                <Column
                  key={column.id}
                  column={column}
                  columnIndex={columnIndex}
                  onTitleChange={updateColumnTitle}
                  onAddTask={addTask}
                  onIssueClick={handleIssueClick}
                  compact={true}
                />
              ) : (
                <Column
                  key={column.id}
                  column={column}
                  columnIndex={columnIndex}
                  onTitleChange={updateColumnTitle}
                  onAddTask={addTask}
                  onIssueClick={handleIssueClick}
                />
              )
            )}
            {!compact && (
              <button
                onClick={addColumn}
                className="flex-shrink-0 w-8 absolute top-2 right-2 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600"
              >
                <FaPlus size={10} />
              </button>
            )}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default JiraBoard;