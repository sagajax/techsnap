import { Droppable } from 'react-beautiful-dnd';
import { FaPlus } from 'react-icons/fa';
import {  Task } from './tasks';




export const Column = ({ column, columnIndex, onTitleChange, onAddTask, onIssueClick, compact = false }) => (
  <Droppable droppableId={`${columnIndex}`}>
    {(provided) => (
      <div className={`flex-shrink-0 ${compact ? 'w-48 mr-2' : 'w-72 mr-4'} flex flex-col ${compact ? 'bg-gray-50' : 'bg-gray-100'} rounded${compact ? '' : '-lg'} border`}>
        <div className={`${compact ? 'p-1.5' : 'p-3'} flex items-center justify-between bg-white rounded-t${compact ? '' : '-lg'} border-b`}>
          <input
            type="text"
            value={column.title}
            onChange={(e) => onTitleChange(columnIndex, e.target.value)}
            className={`${compact ? 'text-xs font-medium w-32 px-1' : 'text-sm font-semibold'} text-gray-700 border-none focus:ring-0`}
          />
          <button
            onClick={() => onAddTask(columnIndex)}
            className={`${compact ? 'text-gray-500 hover:text-gray-700 p-0.5' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <FaPlus size={compact ? 10 : 12} />
          </button>
        </div>
        <div 
          className={`flex-1 ${compact ? 'p-1' : 'p-2'} overflow-y-auto`}
          style={{ minHeight: compact ? '270px' : 'calc(100vh - 160px)' }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {column.tasks.map((task, index) => (
            compact ? (
              <Task
                key={`${task.id}-${index}`}
                task={task}
                index={index}
                onIssueClick={onIssueClick}
                compact={true}
              />
            ) : (
              <Task
                key={`${task.id}-${index}`}
                task={task}
                index={index}
                onIssueClick={onIssueClick}
              />
            )
          ))}
          {provided.placeholder}
        </div>
      </div>
    )}
  </Droppable>
);